/**
 * Verfies if number is power 2
 */
var isPower2 = function (n) {   
    while (true) {
        n = n/2;
        
        if (n < 1) {
            return n == 0.5 ? true : false;
        }
    }
}


var getPower2Numbers = function (n) {
    if (isPower2(n)) {
        return [n];
    }
    
    p = [];
    k = true;
    off = 0;
    bigger = 0;
    
    while (k) {
        n--;
        off++;
      
        if (isPower2(n)) {
            bigger = n;
            p = getPower2Numbers(n);
        }
        
        if (bigger !== 0) {
            if (isPower2(off)) {
                k = false;
                p.push(off);
            } else {
                p = p.concat(getPower2Numbers(off));
            }
        }
    }
    
    return p;
}

module.exports = getPower2Numbers;