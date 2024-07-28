const sumAll = function(start, end) {
    if(start<0 || end<0){return "ERROR";}
    else if((Math.floor(start)!=start) || (Math.floor(end)!=end)){return "ERROR";}
    else if((typeof start !=="number") || (typeof end !=="number")){return "ERROR";}
    // if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    // instead of 2 previous checks
    else{
        let sum = 0;
        for(let i = Math.min(start,end); i <= Math.max(start,end); i++){
            sum += i;
        }
        return sum;
    }
    



};

// Do not edit below this line
module.exports = sumAll;
