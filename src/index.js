module.exports = function solveEquation(equation) {
 
// example: a * x^2 - 10 * x + 12

for (var i = 0; i < equation.length; i++) {
    
    if (equation[i] == ' ') {
        
        var a = parseInt(equation.slice(0, equation.indexOf(equation[i])));
        
        console.log(a);
        
        break;
        
    }
    
}


}
