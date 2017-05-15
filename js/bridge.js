// Module of classes for use in bridge website building
Bridge = {}

Bridge.Rank = function(index,short) {
    this.index = index;
    this.short = short;
    this.bit = 1<<index;
}

// Class representing a suit
Bridge.Suit= function (index,short) {
    this.index = index;
    this.short = short;
}

suitSymbols = {
    'S':'\U+2660',
    'H':'\U+2665',
    'D':'\U+2666',
    'C': '\U+2663'
};

// Class representing a holding (a subset of ranks in a suit)
Bridge.Holding= function (index,short,source) {
    this.index = index;
    this.short = short;
    this.display = short;
    this.source = source;
    this.cache = {}
    self = this;
    source.ranks.forEach(function (rank) {
	    self[rank.short] =((rank.bit & self.index) != 0);
	});

    this.ranks = source.ranks.filter(function (rank) {
	    return ((rank.bit & index) != 0);
	}).reverse();
    this.length = this.ranks.length;
    if (this.length>0) {
        this.topCard = this.ranks[0];
	this.bottomCard = this.ranks[this.length-1];
    } else {
        this.topCard = null;
	this.bottomCard = null;
    }

    this.complement = function() {
        return this.source.entry(8191&~(this.index));
    }

    this.addRank = function(rank) {
        return this.source.entry(this.index | rank.bit);
    }

    this.removeRank = function(rank) {
        return this.source.entry(this.index | rank.bit);
    }

    this.intersect=function (holding) {
	return this.source.entry(this.index & holding.index);
    }

    this.union = function(holding) {
	return this.source.entry(this.index | holding.index);
    }

    this.addSpots = function(noOfSpots) {
        // Adds noOfSpots bottom ranks to holding if they are not in holding
        // Returns new holding, or null if one of the bottom ranks is already
        // in holding. 
        spotHolding = this.source.entry((1<<noOfSpots)-1)
        if (this.intersect(spotHolding).length==0) {
            return this.union(spotHolding);
        } else {
	    return null;
	}
    }
}

// Class representing hand shape
Bridge.Shape = function(index,lengths,suits) {
    this.index = index;
    this.short = lengths.join("-");
    this.lengths = lengths;
    var localThis = this;
    suits.forEach( function(suit) {
	    localThis[suit.short] = lengths[suit.index];
	});
}


Bridge.builderFor = function(klass) {
    return function(index,short) {
       return new klass(index,short);
    }
}

// Useful for 
Bridge.SmartListOf = function(builder) {
    var _byIndex = [];
    var _byShort = {};
    this._builder = builder;

    this.close = function(message) {
	this._builder = function(short,name) {
	    throw message;
        };
    }

    this.add = function(short,name) {
        var index = _byIndex.length;
        var newItem = this._builder(index,short);
        _byIndex.push(newItem);
        _byShort[newItem.short] = newItem;
        return newItem;
    };

    this.alias = function(aliasName,realName) {
	_byShort[aliasName]=this.lookup(realName);
    };

    this.map = function(f) {
        return _byIndex.map(f);
    };

    this.forEach = function(f) {
	return _byIndex.forEach(f);
    };

    this.filter = function(f) {
        return _byIndex.filter(f);
    };

    this.len = function() { 
	return _byIndex.length;
    };

    this.lookup = function(short) {
        return _byShort[short];
    };
 
    this.entry = function(index) {
	return _byIndex[index];
    };
}

Bridge.standardRanks = function() {
    var ranks = new Bridge.SmartListOf(Bridge.builderFor(Bridge.Rank));
    ranks.add('2');
    ranks.add('3');
    ranks.add('4');
    ranks.add('5');
    ranks.add('6');
    ranks.add('7');
    ranks.add('8');
    ranks.add('9');
    ranks.add('T');
    ranks.add('J');
    ranks.add('Q');
    ranks.add('K');
    ranks.add('A');
    ranks.close('Cannot add additional ranks');
    return ranks;
}
        
Bridge.standardSuits = function() {
    var suits = new Bridge.SmartListOf(Bridge.builderFor(Bridge.Suit));
    suits.add('S');
    suits.add('H');
    suits.add('D');
    suits.add('C');
    suits.close('No additional suits allowed');
    return suits;
}

Bridge.standardShapes = function(suits) {
    shapeMaker = function(index,lengths) {
	return new Bridge.Shape(index,lengths,suits);
    };
    shapes = new Bridge.SmartListOf(shapeMaker);
   
    for (s=0;s<=13; s++) {
	for (h=0;h+s<=13; h++) {
	    for (d=0; d+h+s<=13; d++) {
		c = 13-(d+h+s);
		shapes.add([s,h,d,c]);
	    }
	}
    }
    shapes.close('Cannot add additional shapes');
    return shapes;
}

Bridge.AllHoldings = function(ranks) {
    this.ranks = ranks
    var self = this
    var holdingMaker = function(index,short) {
	return new Bridge.Holding(index,short,self);
    };
    var holdings = new Bridge.SmartListOf(holdingMaker);
    var voidH = holdings.add("");
    voidH.display = "-";
    holdings.alias("-",voidH.short);
    ranks.forEach(
      function(topCard) {
        for (i=0;i<1<<topCard.index; i++) {
            h = holdings.entry(i);
            holdings.add(topCard.short + h.short);
        }
      }
    );
    holdings.close('No more holdings allowed');
    this.list=holdings;
    this.entry = function(index) {
        return this.list.entry(index);
    }
    var re = /^(A?K?Q?J?T?9?8?7?6?5?4?3?2?)(X*)$/i;
    this.parse = function(hString) {
        if (hString == '-') {
            return this.list.lookup(hString);
	}             

        hString = hString.replace('10','T');
	hString = hString.replace(/ /g,'');
        if (hString.length>13) {
            return null;
	}
        var parts = re.exec(hString);
        if (parts==null) {
            return null;
	}
        var base = this.list.lookup(parts[1].toUpperCase());
	return base.addSpots(parts[2].length);
    }
}


// Lifted from https://davidwalsh.name/javascript-arguments
Bridge.getArgs = function(func) {
    // First match everything inside the function argument parens.
    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
 
    // Split the arguments string into an array comma delimited.
    return args.split(',').map(function(arg) {
	// Ensure no inline comments are parsed and trim the whitespace.
	return arg.replace(/\/\*.*\*\//, '').trim();
    }).filter(function(arg) {
	    // Ensure no undefined values are added.
	    return arg;
	});
}

Bridge.holdingArgMap = function(ranks,arg) {
    if (arg =='len') {
        return 'length'
    }
    if (arg[0]=='x') {
        arg=arg.slice(1)
    }
    return arg
}

Bridge.HoldingMapper = function(ranks,func) {
    this.func = func
    var args = Bridge.getArgs(func)
    this.argMapper = args.map(function(arg) { return Bridge.holdingArgMap(ranks,arg)})

    this.evalHolding = function(h) {
        mapped = this.argMapper.map(function(m) {
		return h[m]
	    })
        return this.func.apply(null,mapped)
    }
}

// Represents a standard deck (4 suits, 13 ranks)
Bridge.Deck = function() {
    this.ranks = Bridge.standardRanks();
    this.suits = Bridge.standardSuits();
    this.shapes = Bridge.standardShapes(this.suits);
    this.holdings = new Bridge.AllHoldings(this.ranks);
    this.holdingProc = function(name,func) {
	var mapper = new Bridge.HoldingMapper(this.ranks,func);
	Bridge.Holding.prototype[name]=function () {
	    if (!(name in this.cache)) {
		this.cache[name] = mapper.evalHolding(this);
            }
            return this.cache[name];
	}
        return mapper
    };
    this.shapeProc = function(name,func) {
        Bridge.Shape.prototype[name] = function() {
            return func.apply(null,this.lengths);
        }
    };

    this.shape = function(lengths) {
        key = lengths.join("-");
        return this.shapes.lookup(key);
    }

    this.h = function (hVal) {
	var holding;
	if (typeof(hVal)=='string') {
	    holding = this.holdings.parse(hVal);
	} else if (typeof(hVal)=='number') {
	    holding = this.holdings.entry(hVal);
	} else {
	    holding = hVal;
        }
	    
	return holding;
    };
};

// Example:
//    deck = new Bridge.Deck()
//    deck.holdingProc('hcp',function (A,K,Q,J) { return A*4+K*3+Q*2+J })
//    deck.h('AJT32').hcp()
//    --> 5
//    deck.h('-').hcp()
//    --> 0
