// Conditionals

/* Syntax QUIP

[ ] -> Square Brackets
{ } -> Curly Brackets
( ) -> parentheses

*/


// If statements have an test expression and a follow-up THEN expression

if (3===3)
 {
    console.log("TRUE");
 }


 // We can also do an else if to it as well

 if (3===2){
    console.log("Three === Two");
 } else if (3 === 3){
    console.log("3 === 3");
 }

 // There can only be one if and else statement but unlimited else ifs

 if (false) {
    console.log("ifed");
 } else {
    console.log("elsed");
 }






 // Mutually Exclusive Conditions

 // What is a MEC?
 // We must follow DRY -> Don't repeat yourself

 // If one condition is true then the other must be false

 function numberSep(number) {
    if (number > 100) {
        bigNumber();
    } else {
        smallNumber();
    }
 }
