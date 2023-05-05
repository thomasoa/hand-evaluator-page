function HCP (A, K, Q, J) {
   return A*4+K*3+Q*2+J
}

function Fifths(A, K, Q, J, T) {
    return A*4.0+K*2.8+Q*1.8+J+T*0.4;
}

function BUMRAP(A,K,Q,J,T) {
    return A*4.5+K*3.0+Q*1.5+J*0.75+T*0.25;
}

function CCCCShapePoints(s,h,d,c) {
    pts= 0;
    // Add one point per singleton, two per doubleton, three per void
    [s,h,d,c].forEach(function(l) {
	    if (l<=2) { pts += 100*(3-l) }
	}
	)

    if (pts==0) {
        // If flat 4-3-3-3, return -1/2.
        return -0.50
    }

    // Ignore first doubleton.
    return pts*1.0/100.0-1.0
}

function CCCCQuality (len,A,K,Q,J,T, x9, x8) {
   SuitFactor=10*len
   Quality = SuitFactor*HCP(A,K,Q,J)

   HigherHonors=A+K+Q+J

   if (len>6) {
      ReplaceCount=3
      if (Q) { ReplaceCount -= 2 }
      if (J) { ReplaceCount -= 1 }
      if (ReplaceCount > (len-6)) { ReplaceCount = len-6 }

      Quality += ReplaceCount*SuitFactor
   } else {

    if (T) {
	  if (HigherHonors>1 || J) {
	    Quality += SuitFactor
        } else {
	    Quality += SuitFactor/2
        }
      }
      if (x9) {

	  if (HigherHonors==2 || T || x8) {
           Quality += SuitFactor/2
        }
      }
   }

   return Quality
}

function CCCCHolding(len,A,K,Q,J,T,x9,x8) {
    HigherHonors=0;
    eval=0;

    if (A) {
        eval += 300;
        HigherHonors += 1;
   }

    if (K) {
	if (len==1) { 
	    eval += 50 ;
        } else { 
	    eval += 200;
        }
        HigherHonors+= 1
    }

    if (Q) {
	eval += 100;
	if (len==1) {
	    eval -= 75;
	}
	if (len==2) {
           eval -= 25
	       }
	if (HigherHonors==0) { eval -= 25; }

        HigherHonors += 1;
    }

    if (J) {
	if (len>2) {
	    if (HigherHonors == 2) {
		eval += 50;
	    }
	    if (HigherHonors==1) {
	       eval += 25;
	    }
	}
	HigherHonors += 1;
    }

    if (T) {
	if (HigherHonors==2 || (HigherHonors==1 && x9)) {
	    eval += 25;
	}
    }
    eval += CCCCQuality(len,A,K,Q,J,T,x9,x8);
    return eval*1.0/100.0;
}

function Bissell(A,K,Q,J,T,len) {
    var pts=0;
    var honors=A+K+Q+J+T;
    if (len>3 && honors<4) { pts += 1 }
    var min;
    if (honors>4) { min = honors } else { min = 4 }
    if (len>min) { pts += 3*(len-min); }
    var higher = 0;
    var base = 3;
    [A,K,Q,J,T].forEach(
	function(card) {
            value = card*(base+higher);
            if (value>0) { pts += value; }
            higher += card;
            base -= 1;
        }
    );
    return pts;
}
