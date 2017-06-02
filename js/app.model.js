InvalidHolding ={
    'length': -100
}

function HandModel(deck) {
    this.deck = deck;
    var voidH = deck.h('-');
    var _holdings = [voidH,voidH,voidH,voidH];
    var _texts = ["","","",""];
    this.length = 0;

    this.suits = function() {
        return this.deck.suits;
    }
    this.holdings = function() {
        return _holdings;
    }

    this.holding = function(suit) {
        return _holdings[suit.index]
    }

    this.text = function(suit) {
	return _texts[suit.index];
    }
 
    this.urlHash = function() {
        if (this.length==13) {
   	    return _texts.join(",");
	} else {
	    return null;
	}
    }

    this.clear = function() {
	_holdings = [voidH,voidH,voidH,voidH];
        _texts = ['','','',''];
        this.length = 0;
    }
       
    this.setHolding=function(suitString,hString) {
        //console.log('setting holding: ' + suitString + ' ' + hString)
        var suit = this.deck.suits.lookup(suitString);
        hString = hString.toUpperCase();
        if (hString != _texts[suit.index]) {
            _texts[suit.index] = hString;
            var oldHolding = _holdings[suit.index];
            var holding = this.deck.h(hString);
            if (holding == null) {
		holding = InvalidHolding;
	    }
	    _holdings[suit.index]=holding;
	    this.length = this.length-oldHolding.length + holding.length;
	}
	return _holdings[suit.index].length>=0;
    } 

    this.shape = function() {
        //console.log(_holdings.map(function(h) { return h.length }));
	key= _holdings.map(function(h) { return h.length });
	return this.deck.shape(key);
    }

    this.isComplete = function() {
        return this.length == 13
    }

}

function Evaluator(name,options) {
    this.name = name;
    myOptions = {
	displayName: name,
	selectName: name,
	digits: 0,
	shapeMethod: name,
	holdingMethod: name
    };
    Object.keys(options).forEach(
	function(key) {
	    myOptions[key]=options[key];
	}
    );
    this.options = myOptions;


    this.evaluateOne=function(component,mName) {
        var value;
        if (this.name in component) {
	    return component[mName]();
        } else {
	    return null;
        }
    }
        
    this.format = function(value) {
	if (value==null) {
	    return null;
	} else {
	    return value.toFixed(this.options.digits);
	}
    }

    this.evaluate=function(handModel) {
        var result = {name: this.name};
        total = this.evaluateOne(handModel.shape(),this.options.shapeMethod);
        result['shape']=this.format(total);
        var self = this;
        handModel.suits().forEach(
	    function(suit) {
		value=self.evaluateOne(handModel.holding(suit),self.options.holdingMethod);
                total += value;
		result[suit.short] = self.format(value);
	    }
	);
        result['total']=this.format(total);
	return result;
    }
}

function AppModel() {
    this.deck = new Bridge.Deck();
    this.handModel = new HandModel(this.deck)
    this.deck.holdingProc('cccc',CCCCHolding);
    this.deck.shapeProc('cccc',CCCCShapePoints);
    this.deck.holdingProc('hcp',HCP);
    this.deck.holdingProc('fifths',Fifths);
    this.deck.holdingProc('bumrap',BUMRAP);
    this.deck.holdingProc('bissell',Bissell);
    var _evaluators = [
	new Evaluator('cccc',{digits: 2}),
	new Evaluator('hcp',{}),
	new Evaluator('fifths',{digits:1}),
	new Evaluator('bumrap',{digits:2}),
	new Evaluator('bissell',{}),
	new Evaluator('binkyNT',{digits:2}),
	new Evaluator('binkySuit',{digits:2})
    ];

    this.evaluate = function() {
        var model=this.handModel;
	return _evaluators.map(function(evaluator) {
            return evaluator.evaluate(model);
	    });
    }
}
