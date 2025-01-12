//! without parameters and arguments
// function demo(){ //! function declaration
//     console.log("Hello i am function");

// }
// demo();
// demo();
// demo();//function calling

//with parameters and arguments
// function add(a,b){
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// add(4,5);

// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         console.log(str[i]);
//         revStr += str[i];

//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("telugu");

// function onemoretime(){
//     console.log("not understood tell me one more");
// }
// onemoretime();

// ! anonymus function
// function(){
//     console.log("Anonymus function");
// }
// ();

// let x =function(){
//     console.log("function expression");

// };
// x();
// x();
// x();

// !IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

// ! arrow function
// function demo(){
//     console.log("Hello");
// }
// demo();

// let x = _ =>{console.log("Hello")};
// x();

// let x =_ =>{ console.log("Hi");
//              console.log("Hello");
//              console.log("Bye");}
// x();

// ! return - implicit return , explicit return

// function add(a,b){
//     console.log("I am printing before return keyword");
//     return a+b;
//     console.log("I am printing after return keyword");

// }
// let x = add(5,5);
// console.log(x);

// ! higher order function

// function hof(a){
//     return a;
// };

// let x = hof([1,2,3,4,5]);
// console.log(x);

// let b = function(){
//     console.log("anonymus");
// };
// b();

// function add(callback){
//     return callback;
// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// let users = ["Prashanth" , "Shiva Ganesh" , "Hemanth" , "Sanjay"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// for(let i=0;i<users.length;i++);

//  let users = ["Shiva Ganesh" , "Prashanth" , "Praneeth"];
//  let x = users.map((user)=>{
//      return user;

//  });
//  console.log(x);

// function x(){
//     var user = "Luffy";
//     let company = "Onepiece";
//     let sal = "30000000";
//     console.log(user);
//     console.log(company);
//     console.log(sal);

    
// }x();

// function x(){
//     let a = 10;
//     const b= 20;
//     console.log(a , b);
//     function y(){
//         let p="js";
//         var q="reactjs";
//         console.log(p,q);
//         function z(){
//             const username = "Prasanth";
//             console.log(username);
//         }
//         z();

//     }
//     y();
// }
// x();

                                
