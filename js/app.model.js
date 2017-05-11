InvalidHolding ={
    'length': -100
}

function HandModel(deck) {
    this.deck = deck;
    var voidH = deck.h('-');
    var _holdings = [voidH,voidH,voidH,voidH];
    var _texts = ["","","",""];
    this.length = 0;
    this.holdings = function() {
       return _holdings
    }
 
    this.clear = function() {
	_holdings = [voidH,voidH,voidH,voidH];
        this.length = 0;
    }
       
    this.setHolding=function(suitString,hString) {
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

}