// Class representing a card rank
function Rank(index,short) {
    this.index = index;
    this.short = short;
    this.bit = 1<<index;
}


// Class representing a suit
function Suit(index,short) {
    this.index = index;
    this.short = short;
}

// Class representing a holding (a subset of ranks in a suit)
function Holding(index,short,ranks) {
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
function Shape(index,lengths,suits) {
    this.index = index;
    this.short = lengths.join("-");
    this.lengths = lengths;
    localThis = this;
    suits.forEach( function(suit) {
	    localThis[suit.short] = lengths[suit.index];
	});
}

function builderFor(klass) {
    return function(index,short) {
       return new klass(index,short);
    }
}

// Useful for 
function SmartListOf(builder) {
    this._byIndex = [];
    this._byShort = {};
    this._builder = builder;

    this.close = function(message) {
	this._builder = function(short,name) {
	    throw message;
        };
    }

    this.add = function(short,name) {
        index = this._byIndex.length;
        newItem = this._builder(index,short);
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

function standardRanks() {
    ranks = new SmartListOf(builderFor(Rank));
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
        
function standardSuits() {
    suits = new SmartListOf(builderFor(Suit));
    suits.add('S');
    suits.add('H');
    suits.add('D');
    suits.add('C');
    suits.close('No additional suits allowed');
    return suits;
}

function standardShapes(suits) {
    shapeMaker = function(index,lengths) {
	return new Shape(index,lengths,suits);
    };
    shapes = new SmartListOf(shapeMaker);
   
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

function AllHoldings(ranks) {
    this.ranks = ranks;
    holdingMaker = function(index,short) {
	return new Holding(index,short,ranks);
    };
    holdings = new SmartListOf(holdingMaker);
    voidH = holdings.add("");
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

// Represents a standard deck (4 suits, 13 ranks)
function Deck() {
    this.ranks = standardRanks();
    this.suits = standardSuits();
    this.shapes = standardShapes(this.suits);
    this.holdings = new AllHoldings(this.ranks);
    this.holding = function (text) {
	return this.holdings.list.lookup(text);
    }
}

function getArgs(func) {
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

function holdingArgMap(ranks,arg) {
    if (arg =='len') {
        return 'length'
    }
    if (arg[0]=='x') {
        arg=arg.slice(1)
    }
    return arg
}

function HoldingMapper(ranks,func) {
    this.func = func
    args = getArgs(func)
    this.argMapper = args.map(function(arg) { return holdingArgMap(ranks,arg)})


    this.evaluate = function(h) {
        console.log(h)
        mapped = this.argMapper.map(function(m) {
		return h[m]
	    })
        console.log(mapped)
        return this.func.apply(null,mapped)
    }
}

