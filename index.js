let a = "hello";
//it shows the lenth of the string
//output : 5
console.log(a.length);

let a = "hello",
  b = "world";
//it joins two strings
//output : hello world
console.log(a.concat(" ", b));

let str1 = "hi";
//returns whether the end value is true or false
//false
console.log(str1.endsWith("g"));

let str1 = "hello world";
//it checks whether given value is present or not
//output : true
console.log(str1.includes("world"));

let str1 = "hi welcome";
//it gives the index of given data
//output : 2
console.log(str1.indexOf(" "));

let str1 = "hi all welcome";
//it checks the last occurence of given string
//output : 6
console.log(str1.lastIndexOf(" "));

let str1 = "hello";
//it repeats the given string 'n' no of times
//output : hellohello
console.log(str1.repeat(2));

let str1 = "hi",
  str2 = "all";
//it replace one value wit other
//to replace all repeating /g ,irrespective of cases /i
//output : all
console.log(str1.replace("hi", "all"));

let str1 = "hi welcome";
//it searches for the given value in string
//output : 8
console.log(str1.search("m"));
//searches the value in te string
//output : 8
var str1 = ["summer", "winter", "autumn", "spring"];
//it changes the values in array , it splices up
//output : ["autumn"]
console.log(str1.splice(2, 1));

var str1 = ["summer", "winter", "autumn", "spring"];
//it does not change the array, it slices up starting from (1,length)
//output :["winter", "autumn"]
console.log(str1.slice(1, 3));

let str1 = "hi welcome";
//it checks whether it starts with given string
//output : false
console.log(str1.startsWith("w"));
//it prints from x to length given values
//output : i welcom

console.log(str1.substr(1, 8));
//it prints from x to y-1 given values
//output : i welco

console.log(str1.substring(1, 8));

//i8t changes the string to lowercase
// output : hi welcome
console.log(str1.toLowerCase());
//i8t changes the string to uppercase
// output : HI WELCOME
console.log(str1.toUpperCase());

let str1 = "     hello       world!           ";
//it removes extra spaces but does not remove in btw strings
//output : hello       world!
console.log(str1.trim());

//------------------------------------------------------------------------

//Number Method's

let num = 2011.32546;
//it fixes the values as it is given,if no arguements fixes only main value
//output : 2011.325
console.log(num.toFixed(3));
//it returns the exponential notations
//output :2.01132546e+3
console.log(num.toExponential());
//it returns the value with BASE value mentioned inside bracket
//output : 11111011011.0101001101010001010110001011100000101
console.log(num.toString(2));

//------------------------------------------------------------------------
//Global Elements

//prints the value in console
//output : hello world
console.log("hello world");
//it displays the console in different color based on browser
console.info("hello world");
//It writes the error message to the console
console.error("it was a mistake");
//creates a table with index values in console
console.table(["abi", "amri", "lavanya"]);
//it is used to create an alert in web browser
//alert('The time is running')
//it gives warning in the console
console.warn("Warning ! Error");
//it pops up on the webpage and asks the user to give an input data
//prompt('How was the page ?')
//it pops on the screen and asks for OK and CANCEL. If OK returns true else False
//confirm("press OK to continue")

let num=200.00
//it converts numeric strings and null to numbers
console.log(Number(num))
console.log(Number(null))
//it shows whether the value is not a legal numbers
console.log(isNaN(null))
//output : false
console.log(isNaN(20))
//output : false
console.log(isNaN('123dfs'))
//output : true
//it changes the datatype to float
console.log(parseFloat(num));
//it changes the datatype to INT
console.log(parseFloat(num));
//it converts differrent objects to Strings
console.log(String(num));
//boolean is used to return either 0's-false OR 1's-true
console.log(Boolean(10<9))
//output : False

