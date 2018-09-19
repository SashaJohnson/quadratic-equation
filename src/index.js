module.exports = function solveEquation(equation) {

// identifying variables in string:

var count = 0;

for (var i = 0; i < equation.length; i++) {
    
    if (equation[i] == ' ') { count++ }	
	
	if (equation[i] == ' ' && count == 1) {
        
        var a = parseInt(equation.slice(0, equation.indexOf(equation[i])));
	
	} else if (equation[i] == ' ' && count == 3) {		
		
		var bStrStart = i + 1;
		
	} else if (equation[i] == ' ' &&  count == 5)  {
	
		var bStrEnd = i;
		
	} else if (equation[i] == ' ' && count == 7) {
	
        var cStrStart = i + 1;
        var cStrEnd = equation.length;
    
	} else {continue}
    
	
}

	var bStrFull = equation.slice(bStrStart, bStrEnd);
	var b = parseInt(bStrFull.replace(' ', ''));
	
	var cStrFull = equation.slice(cStrStart, cStrEnd);
	var c = parseInt(cStrFull.replace(' ', ''));
	
	
	// performing calculation:
	
	var d = Math.pow(b, 2) - 4 * a * c;
	
	var answer_1 = Math.round((-b +Math.sqrt(d)) / (2 * a));
	var answer_2 = Math.round((-b -Math.sqrt(d)) / (2 * a));
	
	
	// performing sorting and returning values:
	
	var response = [answer_1, answer_2].sort(function(a,b){return a - b});
	
	return response;

}

