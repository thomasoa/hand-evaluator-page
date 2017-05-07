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
Bridge.Holding= function (index,short,ranks) {
    this.index = index;
    this.short = short;
    this.display = short;
    self = this;
    ranks.forEach(function (rank) {
	    self[rank.short] =((rank.bit & self.index) != 0);
	});

    this.ranks = ranks.filter(function (rank) {
	    return ((rank.bit & index) != 0);
	}).reverse();
    this.length = this.ranks.length;
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
    this._byIndex = [];
    this._byShort = {};
    this._builder = builder;

    this.close = function(message) {
	this._builder = function(short,name) {
	    throw message;
        };
    }

    this.add = function(short,name) {
        var index = this._byIndex.length;
        var newItem = this._builder(index,short);
        this._byIndex.push(newItem);
        this._byShort[newItem.short] = newItem;
        return newItem;
    };

    this.alias = function(aliasName,realName) {
	this._byShort[aliasName]=this.lookup(realName);
    };

    this.map = function(f) {
        return this._byIndex.map(f);
    };

    this.forEach = function(f) {
	return this._byIndex.forEach(f);
    };

    this.filter = function(f) {
        return this._byIndex.filter(f);
    };

    this.len = function() { 
	return this._byIndex.length;
    };

    this.lookup = function(short) {
        return this._byShort[short];
    };
 
    this.entry = function(index) {
	return this._byIndex[index];
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
    this.ranks = ranks;
    var holdingMaker = function(index,short) {
	return new Bridge.Holding(index,short,ranks);
    };
    var holdings = new Bridge.SmartListOf(holdingMaker);
    var voidH = holdings.add("");
    voidH.display = "-";
    holdings.alias("-",voidH.short);
    ranks.forEach(function(topCard) {
        for (i=0;i<1<<topCard.index; i++) {
            h = holdings.entry(i);
            holdings.add(topCard.short + h.short);
        }
	});
    holdings.close('No more holdings allowed');
    this.list=holdings;
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
            return mapper.evalHolding(this);
	}
        return mapper
    };

    this.h = function (hVal) {
	var holding;
	if (typeof(hVal)=='string') {
	    holding = this.holdings.list.lookup(hVal.toUpperCase());
	} else if (typeof(hVal)=='number') {
	    holding = this.holdings.list.entry(hVal);
	} else {
	    holding = hVal;
        }
	    
	if (holding == null) {
	    throw "Invalid holding '" + text + "'";
	}
	return holding;
    };
}

// Example:
//    deck = new Bridge.Deck()
//    deck.holdingProc('hcp',function (A,K,Q,J) { return A*4+K*3+Q*2+J })
//    deck.h('AJT32').hcp()
//    --> 5
//    deck.h('-').hcp()
//    --> 0