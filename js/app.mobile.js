$(document).ready(
  function() {
    console.log('ready');

    $('#evaluations-popup').popup({history: false});

    var model = new AppModel();
    var handModel = model.handModel;
    var $tbody = $("table#evaluations tbody")
    var $shapeRow = $tbody.find('tr.shape');
    var $totalRow = $tbody.find('tr.total');
    var $suitRow = {}
    handModel.suits().forEach(
        function(suit) {
            $suitRow[suit.short]=$tbody.find('tr.suit'+suit.short);
        }
    );

    var focusSpades = function() {
	$('input.holding#spades').focus();
    }

    var submitButton =  $('form#handentry input[type="submit"]');

    var setButtonLabel = function(buttonElement,label) {
	buttonElement.val(label)
	buttonElement.button('refresh')
    }

    var errorDiv = $('form#handentry .error');
    var setErrorState = function(label) {
	if (label == null) {
	    errorDiv.hide(0);
        } else {
	    errorDiv.text(label);
	    errorDiv.show(0);
	}
    }

    var disableSubmit= function(label) {
	submitButton.button('disable');
	setErrorState(label);
    };

    var clearModel = function(e) {
          handModel.clear();
          $('input.holding').val('');
          $('input.holding').removeClass('invalid');
	  disableSubmit(null);
	  focusSpades();
    };

    $('input.holding').bind("propertychange change click keyup input paste",
       function(event) {
         var $input = $(this);
         var $form = $(this.form)
         suitLabel = $input.data('suit');
         hString = $input.val().toUpperCase();
         if (hString != $input.val()) {
             $input.val(hString);
         }
          
         // if the string ends with 1, treat it as ending with 10, except when
         // exiting field, for purposes of validating entry inline
         if (hString.slice(-1)=='1' && event.type !='change' && event.type!='propertychange') { 
             hString = hString+'0';
             appended = true;
         } else {
             appended = false;
         }
   
         var valid = handModel.setHolding(suitLabel,hString);
         if (!valid) {
           $input.addClass('invalid');
         } else {
           $input.removeClass('invalid');
         } 

         if (handModel.isComplete() && !appended) {
	     submitButton.button('enable');
	     setErrorState(null);
         } else {
	     if (handModel.length<0) {
		 disableSubmit('Invalid');
	     } else if (appended) {
                 disableSubmit('Incomplete 10');
	     } else if (handModel.length==0) {
		 disableSubmit('Evaluate');
             } else {
		 disableSubmit(handModel.length.toString() + " cards");
	     }
         }
       }
    );
    
    var pageHandHash = function() {
        hash = window.location.hash;
        if (hash==null) {
            return hash;
        }
	return hash.split('&')[0]
    }

    window.onpopstate = function(event) {
        stateHash = handModel.urlHash()
        pageHash = pageHandHash()
	console.log(pageHash);
        if (stateHash==null) {
            if (pageHash != '') {
                initializeHash();
            }
        } else if (pageHash != '#' + stateHash) {
	    initializeHash();
        }
	return false;
    }
    var formPanel = $('#handForm');

    var handleSubmit = function() {
	formPanel.panel('close');
	var container = $('#evaluationscontainer');
	container.hide(250);
        
	window.location.hash = handModel.urlHash()
	var shape = handModel.shape();
	$shapeRow.find('.key').text(shape.short);
	handModel.suits().forEach(
            function (suit) {
		$suitRow[suit.short].find('.holding').text(handModel.text(suit));
	    }
        );

        var evaluations = model.evaluate();
        var toText = function(val) {
            if (val == null) {
                return "<span class='na'>n/a</span>";
            } else {
                return val;
            }
        }

        evaluations.forEach(
            function (evaluation) {
                var evalClass = '.' + evaluation['name'];
                var update = function(row,value) {
                    row.find(evalClass).html(toText(value));
                }

                update($shapeRow,evaluation.shape);
                update($totalRow,evaluation.total);
                handModel.suits().forEach(
                    function(suit) {
                        update($suitRow[suit.short],evaluation[suit.short])
                    }
                );
            }
         );
                
         container.finish();
         container.show('fast');
         jQuery.mobile.silentScroll(0);
     }

     var initializeHash=function() {
         hash = pageHandHash();
         clearModel();
         if (hash != '' && hash!='#' || hash!=null) {
            hStrings = hash.substring(1).split(',',4);
            map = {'S':'','H':'','D':'','C':'' }
            for (i=0; i<hStrings.length; i++) {
                suit = handModel.suits().entry(i).short;
                map[suit] = hStrings[i];
            }
            $('input.holding').each(
               function(index,entry) {
                   var $entry = $(entry);
                   $entry.val(map[$entry.data('suit')]);
                   $entry.triggerHandler('change');
               }
            );
            if (handModel.isComplete()) {
                handleSubmit();
		return;
            } 
	 }
	 $('#handForm').panel('open');
	 $('#evaluationscontainer').hide(500);

     }

     
     initializeHash();

    $('#handentry').submit(
      function(e) {
        e.preventDefault();
        handleSubmit();
      }
    );

    $('input#clear').click(
       function (e) {
          clearModel();
       }
    );

    focusSpades();
  }
);
  

