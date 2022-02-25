// Iteration 1: Names and Input
var hacker1 = 'XXXX';
console.log("The driver's name is "+hacker1);
var hacker2='YYYY';
console.log('The navigator\'s name is '+hacker2);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
   console.log("The driver has the longest name, it has "+hacker1.length+" characters.");
}
else if (hacker1.length > hacker2.length){
   console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters.");
}else {
   console.log("Wow, you both have equally long names, "+hacker2.length+" characters!.");
}

var hacker1_chars = Array.from(hacker1);
var BigChars="";
for(var i=0;i<hacker1.length;i++){
    var next_CHAR=hacker1_chars[i].toUpperCase();
    BigChars=BigChars+next_CHAR+" ";
}
console.log(BigChars);

var hacker2_chars = Array.from(hacker2);
var Chars="";
for(var i=(hacker2.length-1);i>=0;i--){
    var next_CHAR=hacker2_chars[i];
    Chars=Chars+"" +next_CHAR;
}
console.log(Chars);

// Iteration 3: Loops
if(hacker1<hacker2){
  console.log("The driver's name goes first.");  
}else if(hacker2<hacker1){
  console.log("Yo, the navigator goes first definitely.");  
}else {
  console.log("What?! You both have the same name?");  
}

 
