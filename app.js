// **************************************************************************************
// **************************************************************************************


// ======================== Chapter no 31-34 ===================


// ----------- Q # 1 ----------- //
// 1. Write a program that displays current date and time in 
// your browser. 

    // var date = new Date();
    // document.write(date);

    // var current = date.getTime();
    // var date = new Date("12-12-1997");
    // var old = date.getTime();
    // var diff = current-old;
    // var final = diff/(1000*60*60*24*365);
    // document.write(final+"</br>");
    // final = Math.floor(final);
    
    // document.write(final);
 
// ----------- Q # 2 ----------- //
// 2. Write a program that alerts the current month in words. 
// For example December.

    // var date = new  Date();
    // var month = date.toString();
    // month=month.slice(4,7);
    // document.write("Current month : "+month);

// ----------- Q # 3 ----------- //
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

    //  var date = new  Date();
    // var day = date.toString();
    // day = day.slice(0,3);
    // document.write(day);

// ----------- Q # 4 ----------- //
// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

    // var date = new  Date();
    // var day = date.toString();
    // day = day.slice(0,3); 
    // if (day == "Sat" || day == "Sun") {
    //     document.write("It's a Fun day");
    // }else{
    //     document.write("It's Not a Fun day")
    // }

// ----------- Q # 5 ----------- //
// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”

    
//     var date = new  Date();
//     var actualDate = date.getDate();
//    if (actualDate < 16) {
//     document.write("First fifteen days of the month");
//    }else{
//     document.write("Last days of the month");
//    }

// ----------- Q # 6 ----------- //
// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

    //  var date = new  Date();
    //  document.write(date +"</br>");
    //  var miliSec = date.getTime();
    //  var today = new Date();
    //  var oldYear = new Date("01-01-1970");
    //  var dif = (today - oldYear);
    //  var dif = Math.round((dif/1000)/60);
    //  var minutes = dif;
    //  document.write("Elapsed milliseconds since January 1,1970 : "+ miliSec +"</br>");
    //  document.write("Elapsed minutes since January 1,1970 : "+minutes +"</br>");

// ----------- Q # 7 ----------- //
// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

    // var date = new Date();
    // var time = date.toString();
    // time = time.slice(16,18);
    // if(time>=12 && time<=23){
    //     alert("It's Pm");
    // }else if(time>=0 && time<12){
    //     alert("It's Am");
    // }

// ----------- Q # 8 ----------- //
// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

    // var date = new Date("12-31-2020");
    // var laterDate = date;
    // document.write("Later Date : "+laterDate);

// ----------- Q # 9 ----------- //
// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

    // var currentDate = new Date("12-18-2015");
    // var ss = currentDate.getDate();
    // var olddate = new Date("06-18-2015");
    // var ww = olddate.getDate();
    // document.write(currentDate-olddate)
    // var user = +prompt("Enter the starting date of this ramadan");

        // var date1 = new Date();
        // var date2 = new Date("06-18-2015");
    
        // // One day in milliseconds
        // var oneDay = 1000 * 60 * 60 * 24;
        // var diffInTime = date1.getTime() - date2.getTime();
        // var diffInDays = Math.round(diffInTime / oneDay);

        // alert(diffInDays+"  days have passed since 1st Ramadan, 2015");

// ----------- Q # 10 ----------- //
// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

    // var reffdate = new Date("12-05-2015");
    // reffdate = reffdate.getTime();
    // var startdate = new Date("01-01-2015");
    // startdate = startdate.getTime();
    // var diff = reffdate - startdate;
    // diff = diff/1000*60*60*24;
    // var result = Math.round(diff);
    // document.write(result)

    // var date1, date2;
    // date1 = new Date("Dec 05, 2015 22:50:16");
    // date2 = new Date( "Jan 01, 2015 22:50:16" );

    // // get total seconds between two dates
    // var seconds = (date1 - date2) / 1000;
    // document.write("On refrence date "+date1+" , </br> "+seconds+" seconds had passed since beginning of 2015");


// ----------- Q # 11 ----------- //
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

  // var date = new Date();
  // document.write("Current date: " +date + "</br>");
  // var gethour = date.getHours();
  // gethour = gethour = date.setHours(gethour - 1); 
  // document.write("1 hour ago, it was "+date);


// ----------- Q # 12 ----------- //
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

  // var date = new Date();
  // document.write("Current date: " +date + "</br>");
  // var year = date.getFullYear();
  // var before100Years = date.setFullYear(year-100);
  // document.write("100 years back, it was "+date);
  
// ----------- Q # 13 ----------- //
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

  // var user = prompt("Enter your date of birth");
  // var date = new Date();
  // var specificDate = new Date(user);
  // var year = specificDate.getFullYear();
  // var oldTime = specificDate.getTime();
  // var currentTime = date.getTime();
  // var diff = currentTime - oldTime;
  // var result = diff/(1000*60*60*24*365);
  // result = Math.floor(result);
  // document.write("Your age is: "+result+"</br>");
  // document.write("Your birth year is: " + year);

// ----------- Q # 14 ----------- //
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month

  // var userName = prompt("Enter Full Name");
  // var month = prompt("Enter Your Month");
  // var units = prompt("Enter Number Of Units");
  // var chargesPerunit = 16;
  // var latePayment = 350;

  //   var amount = units*chargesPerunit;
  //   var afterDuedateamount = amount+latePayment;
  //   amount = Math.round(amount);
  //   afterDuedateamount = Math.round(afterDuedateamount); 

  // document.write("<b> K-Electric Bill </b> </br></br>");

  // document.write("Customer Name : <b>"+ userName + "</b></br>");
  // document.write("Customer Month : <b>"+ month + " </b></br>");
  // document.write("Number Of Units : <b>"+ units + " </b></br>");
  // document.write("Charge Per Unit : <b>"+ chargesPerunit + " </b></br></br>");

  // document.write("Net Amount Payable ( within Due Date ) :  <b>"+ amount + " </b></br>");
  // document.write("Late Payment Surcharge :  <b>"+ latePayment + " </b></br>");
  // document.write("Gross Amount Payable ( After Due Date ) :  <b>"+ afterDuedateamount +"</b>");
 




// **************************************************************************************
// **************************************************************************************


    // ============================= CHAPTER 35-38 ================================= //




// ----------- Q # 1 ----------- //
// Write a function that displays current date & time in your
// browser.

  // var currentTime = new Date();
  // document.write(currentTime);

// ----------- Q # 2 ----------- //
// Write a function that takes first & last name and then it
// greets the user using his full name.

  // var firstName = prompt("Enter your first name: ");
  // var lastName = prompt("Enter your last name: ");
  // document.write(firstName + ' ' + lastName);

// ----------- Q # 3 ----------- //
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

  // var firstNumber = prompt("Enter your first number: ");
  // var secondNumber = prompt("Enter your second number: ");
  // document.write(parseInt(firstNumber) + parseInt(secondNumber));

// ----------- Q # 4 ----------- //
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

  //   function compute(num1,operator, num2){
  //       if(operator=="+"){
  //         var result = num1 + num2;
  //       }else if(operator=="-"){
  //         var result = num1 - num2;
  //       }else if(operator=="*"){
  //         var result = num1 * num2;
  //       }else if(operator=="/"){
  //         var result = num1 / num2;
  //       }
  //       return result;
  // }

  // var number1 = +prompt("enter number 1");
  // var operator = prompt(" operator ");
  // var number2 = +prompt("enter number 2");
  // var computes = compute(number1,operator,number2);

  // document.write(computes);


// ----------- Q # 5 ----------- //
// Write a function that squares its argument.
  // function squares(num){
  //   return Math.sqrt(num);
  // }

  // var numb = prompt("Enter any number");
  // var squareRoot = squares(numb);
  // document.write(squareRoot);


// ----------- Q # 6 ----------- //
// Write a function that computes factorial of a number.

  // var num = prompt("Enter any number");
  // var ans = 1;
  // for (var i = num; i > 0; i--) {
  //   ans *= i;
  // }
  // document.write(ans);


// ----------- Q # 7 ----------- //
// Write a function that take start and end number as inputs
// & display counting in your browser.

  // var start = prompt("Enter starting number");
  // var end = prompt("Enter ending number");
  // for (var i = start; i <= end; i++) {
  //   document.write(i + "<br/>");
  // }


// ----------- Q # 8 ----------- //
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse 2 = Base 2 + Perpendicular 2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

  // function computeHypotenuse(b, p){

  //   var squareRoot = function sr(x){
  //     return x ** 2;
  //   }

  //   var base = squareRoot(b);
  //   var perpendicular = squareRoot(p);
  //   return Math.sqrt(parseInt(base) + parseInt(perpendicular));
  // }

  // var getBase = prompt("Enter base");
  // var getPerpendicular = prompt("Enter perpendicular");

  // var result = computeHypotenuse(getBase, getPerpendicular);
  // document.write(result);

// ----------- Q # 9 ----------- //
// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

  // function calculateAreaOfTriangle(w, h){
  //   return parseInt(w) * parseInt(h);
  // }
  // var getWidth = prompt("Enter width");
  // var getHeight = prompt("Enter height");

  // var result = calculateAreaOfTriangle(getWidth, getHeight);
  // document.write(result);


// ----------- Q # 10 ----------- //
// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

  // function checkPalindrome(str){
  //   var reversedStr = str.split("").reverse().join("");
  //   return str === reversedStr;
  // }

  // var word = prompt("Enter any word");
  // var result = checkPalindrome(word) ? word + " is Palidrome." : word + " is not Palindrome.";
  // document.write(result);

// ----------- Q # 11 ----------- //
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

  // function myFunc(str){
  //   var makeUpperCase = function muc(w){
  //     return w[0].toUpperCase() + w.substring(1);
  //   }
  //   var splittedArray = str.split(" ");
  //   var processedArray = splittedArray.map(makeUpperCase);
  //   return processedArray.join(" ");
  // }

  // var word = prompt("Enter any phrase");
  // var result = myFunc(word);
  // document.write(result);


// ----------- Q # 12 ----------- //
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

  // function findLongestWord(str) {
  //   var strSplit = str.split(' ');
  //   var longestWord = 0;
  //   for(var i = 0; i < strSplit.length; i++){
  //     if(strSplit[i].length > longestWord){
  //     longestWord = strSplit[i].length;
  //     if(longestWord){
  //       var index = [i];
  //     }
  //     }
  //   }
  //   return strSplit[index] ;
  // }
  // var finded = findLongestWord("Web Development Tutorial");
  // alert(finded);


// ----------- Q # 13 ----------- //
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

  // function countOccurrences(s, l){
  //   var count = 0;
  //   var splittedArray = s.split("");
  //   for (var i = 0; i < splittedArray.length; i++) {
  //     if(splittedArray[i].toUpperCase() === l.toUpperCase()){
  //           count = count + 1;
  //         } 
  //   }
  //   return count;
  // }

  // var str = prompt("Enter a string");
  // var letter = prompt("Enter a letter");
  // var rslt = countOccurrences(str, letter);
  // document.write(rslt);


// ----------- Q # 14 ----------- //
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
//  • Pass the radius to the function.
//  • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//  • Pass the radius to the function.
//  • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle πr 2

    // function calcCircumference(r){
    //   var p = 3.14;
    //   return 2 * p * parseInt(r);
    // }

    // function calcArea(r){
    //   var p = 3.14;
    //   return p * (parseInt(r) ** 2);
    // }

    // var radius = prompt("Enter radius");
    // var circumference = calcCircumference(radius);
    // var area = calcArea(radius);
    // document.write("Circumference of Circle: " + circumference + "<br />");
    // document.write("Area of Circle: " + area + "<br />");




  
// **************************************************************************************
// **************************************************************************************



// ============================= Changing Case ================================= //

// ----------- Q # 1 ----------- //
// 1. Write a program that takes user input. Convert and show the input
// in capital letters.

  // var user = prompt("Enter any word");
  // var convert = user.toUpperCase()
  // alert(convert);

// ----------- Q # 2 ----------- //
// 2. Write a program that takes user input. Convert and show the
// input in title case.

  // function titleCase(str) {
  //   str = str.toLowerCase().split(' ');
  //   for (var i = 0; i < str.length; i++) {
  //     str[i] = str[i].slice(0,1).toUpperCase() + str[i].slice(1);
  //   }
  //   return str.join(' ');
  // }
  // var user = prompt("Enter a title")
  // document.write(titleCase(user));


// -------- Strings: measuring length and extracting parts -------- //

// ----------- Q # 1 ----------- //
//   1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

  // function lengthOfInput(str){
  //   return str.length;
  // }

  // var modelName = prompt("Enter your favorite mobile model");
  // document.write(lengthOfInput(modelName));

// ----------- Q # 2 ----------- //
// 2.
// Write a program to display the last character of a user input.

  // var user = prompt("Enter any word");
  // var character = user.charAt(user.length-1);
  // document.write(character); 
  
// ------- Strings: finding segments -------- //

// ----------- Q # 1 ----------- //
// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.

// function findIndex(){
//   var str = "Pakistani";
//   var splittedArray = str.split("");
//   return splittedArray.indexOf("n");
// }
// document.write(findIndex());

// ----------- Q # 2 ----------- //
// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

  // var arr1 = prompt("Enter Username")
  // arr1 =arr1.split("");
  // var arr2 = ['@', ',', '!', '#', '%','$','^','~','-','+','(',')','_','*','&','/','<','>','{','}','|'];
  // function checkSpecialChar(arr1,arr2){
  //     for(var i=0; i<arr1.length ; i++ ){
  //         for(var j=0 ; j<arr2.length ; j++){
  //             if(arr1[i]==arr2[j]){
  //                 return true
  //             }
  //         }
  //     }
  // }
  // var validateName = checkSpecialChar(arr1,arr2)
  // if(validateName){
  //   alert("Enter a valid username");
  // } 
  // else{
  //   alert("Valid name");
  // } 

  // ----------- Q # 3 ----------- //

// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.

//   var user = prompt("Enter Word");
//   userlen = user.length;
//   var para = "The quick brown fox jumps over the lazy dog";
//   // var find = para.indexOf(user);
//   for(var i =0; i<=para.length; i++){
//     var text = para.slice(i , i + userlen);
//     // alert(text)
//     if(text == user){
//       document.write(count(user));
//         alert( user + " is found on " + i + "  index" );
//     }

// }
  

 // ----------- Q # 4 ----------- //
        // Strings: finding a character at a location
// 1. Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.

// Method 1
  // var word = "Pakistan"; 
  // var text = word.slice(2 , 3);
  // alert(text);

// Method 2
  // var word = "Pakistan";
  // for (let i = 2; i < 3; i++) {
  //   var element = word[i];
  //   alert(element);
  // }


     
 // ----------- Q # 1 ----------- //
              // Strings: replacing characters
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

  // var word = "Hyderabad";
  // var copyIndex = word.slice(0,5);
  // var replace = word.replace(copyIndex,"Islam");
  // word = replace;
  // alert(word); 

// 2. Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g,"&");
// message = replace;
// document.write(message);


        // Rounding numbers

// ----------- Q # 1 ----------- //      
// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//   var user = +prompt("Enter positive integer");
//   if (user > 0) {
//     alert("The number is positive");
//     var value = Math.round(user);
//     document.write("Math.round Value : "+value + "</br>");
//     var value = Math.floor(user);
//     document.write("Math.floor Value : "+value + "</br>");
//     var value = Math.ceil(user);
//     document.write("Math.round ceil : "+value + "</br>");

// }else{
//     alert("The number is not positive");
// }


// ----------- Q # 2 ----------- //
// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//   var user = +prompt("Enter Negative integer");
//   if (user < 0) {
//     alert("The number is negative");
//     var value = Math.round(user);
//     document.write("Math.round Value : "+value + "</br>");
//     var value = Math.floor(user);
//     document.write("Math.floor Value : "+value + "</br>");
//     var value = Math.ceil(user);
//     document.write("Math.round ceil : "+value + "</br>");

// }else{
//     alert("The number is not negative");
// }


            // Generating random numbers

// ----------- Q # 1 ----------- //
// 1. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

  // var dice = Math.random();
  // dice = Math.ceil(dice*6);
  // alert(dice);


// ----------- Q # 2 ----------- //
// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

  // var random = Math.random();
  // headTails = Math.ceil(random*2);

  // if(headTails == 2){
  //   alert("Heads");
  // }else if(headTails == 1){
  //   alert("Tails"); 
  // }


// ----------- Q # 3 ----------- //
// 3.
// Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.

  // var user =  prompt("Enter number between1 to 10");

  // var secretKey = Math.floor(Math.random()*10)+1;
  // // alert(secretKey)
  // if(user == secretKey){
  //   alert(" Woow Congratulations ");
  // }else{
  //   alert("Try Again " + "The secret key of this time is : "+secretKey)
  // }



        // Converting strings to integers and decimals

// ----------- Q # 1 ----------- //
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgsd. 
// d. 50.2kilograms

  // var user = prompt("Enter Your Weight");

  //     var sUser = user;
  //     var userInt = user = +user;

  //     if(userInt && userInt != null){ 
        
  //         var validUser = userInt + " Kg";
  //         alert("Your weight is : "+validUser); 

  //     }else if(sUser && sUser != null){
        
  //         var regixMatchednumber = sUser.match(/\d+/);
  //         alert("Your weight is : "+regixMatchednumber + " Kg");
  //     }



        // Converting strings to numbers, numbers to strings

// ----------- Q # 1 ----------- //     
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())

  // var convertingNumber = "472";

  // if(typeof(convertingNumber) != typeof(Number(convertingNumber))){
   
  //   var stringType = (typeof(convertingNumber));
  //       convertingNumber =+ convertingNumber;
  //       document.write("Your entered  <b> String Type Number</b> : '' "+ convertingNumber + " '' " + stringType + " " + "& Now it's converted successfully to <b> Number Type Number</b> "+ convertingNumber + " " +typeof(convertingNumber));
 
  //     }else if(typeof(convertingNumber) != typeof(convertingNumber.toString())){
      
  //   var nummberType = (typeof(convertingNumber));
  //       convertingNumber = convertingNumber.toString();
  //       document.write("Your entered  <b> Number Type Number</b> : "+ convertingNumber + " " + nummberType + " " + "& Now it's converted successfully to <b> String Type Number</b> ''"+ convertingNumber + " '' " +typeof(convertingNumber));
     
  // }
 

// ----------- Q # 2 ----------- //
// 2.
// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

  // var num = 35.36;
  // var convert = num = num.toString();
  // var splittedArray = convert.split(".");
  // splittedArray = splittedArray.join("")
  // document.write("This is Your Number <b>'' " + splittedArray +" ''</b> & Type of This Number Is " + "<b>" + typeof(splittedArray) + "</b>");

        // Controlling the length of decimals

// ----------- Q # 1 ----------- //
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666

  // var percentage = 30 / 45 * 100;
  //     percentage = percentage.toFixed(2);
  //     alert(percentage);