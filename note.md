# CSS 
# FONT PROPERTY
1. font-size: 16px, rem, em
2. font-weight: bold, light, normal
3. font-style: normal, italic
4. font-family: time new roman, times, seirf, arial, helvatica sans-serif
5. google fonts   

# Text Property
1. Text-alin: start, end, center, justify
2. Text-transform: uppercase, lowercase, capitalize, none
3. Text-decoration : underline, overline, line-through, none
4. Text-underline-offset: value in pixels
5. line-height: 1 It totally depends on front size
6. letter: spx in value pixel
7. word-spacing: 50px value in px
8. -webkit-text-stroke: 2px black
9. Text-shadow:ofset-x offset-y blur radius color of shadow; 


# css box model Rules

1. It is added in css3
2. According to css box model rule if we weite anything it will be wrapped within a rectanglular box

3. It has a four major parts
   1. Margin Box
   2. Border Box
   3. Padding Box
   4. Content Box

# Flex Box:

   It is 1 dimension layout module

* flex Terminology:-
      
# Grid Container Property
-> It is 2 Dimension Layout Module System

# Grid  Trminology
1. Grid row line
2. Grid Column Line
3. Row
4. column
5. Track
6. Cell
7. Grid Container
8. Grid items

# Grid Item Property
 1. grid-column-start:__1_____

 2. gird-column-end:__8_____

 3. grid-column:___1____ / ____8___
 
 4. gird-row-start:__2__

 5. grid-row-end:___5__

 6. grid-row:__2___/____5___

 7. justify-self:____
    1] stretch(default)
    2] start
    3] end
    4] center

 8. align-item:_____
    1] stretch(default)
    2] start
    3] end
    4] center

 9. place-self:_end___/_center__
       
        or

     place-self:__center____

10. grid-area:__any name what ever you want you can write here ___

# How to center a card  ***
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
             
# What is difference between display: none ,display: visibility , display: hidden ***

# Transition Property
1. Transition-property:____
      1. all4
      2. any css proprty

# Animation
 1. Animation-name:__;

 2. Animation-duration:_____;
     1. 1s
     2. 1000ms

 3. Animation-timing-function:____
     1. ease(default)
     2. ease-in
     3. ease-out
     4. rase-in-out
     5. linear

 4. Animation-delay:____
     1. 1s
     2. 1000ms

 5. Animation-iteration-count:___
     1. 1
     2. 2
     3. infinite


 6. Animation-direction:____
      1. normal
      2. reverse
      3. alternate
      4. alternate-reverse

 7. Animation-play-state:____
      1. running
      2. paused

 8. Animation-fill-mode:____
      1. farward
      2. backward

# shortcut of animation:-

  animation: name duration time-function delay iteration count direction playstate fillmode

# css unit
  1. Absolute Units(Fixid units)
     1. pixel
     2. inch
     3. cm
     4. mm

  2. Relative units(can change)
     1. percentage(%)  ->[width, height]
     2. em  ->[Typography Spacinng, border]
     3. rem
     4. vw(viewport)
     5. vh(viewport height)
     6. Vmax(view Max)
     7. Vmin(viewport min)

# Responsive Design

   1. Desktop First Approach = max-width
   2. Mobile First Apporach = Min-width


 * @media screen and (min-width:576)
                                  |--------> to fit screen size
   1. all     
   2. print
   3. speech 
   4. screen

 * different screen scize 
  extra small size(xs) = 
  small screen size(sm) = 576px
  large(lg) = 992px
  extra large(xl) = 1200px
  extra extra large(xxl) = 1400px



   

  




2.       
## JavaScript
1. javascript is scripting and programming language
2. JavaScript is object based language
3. javascript is dynamically typed language
4. javascript is both complied and interpreter language
5. javascript is syncrhonous single threaded language because has only one call stack
6. javascript can also asynchronos task with the help of event loop and queues

# what is javaScript
1. js is scripting and programming language
2. js is Object based language
3. js is dynamically type language
4. js is synchronous single thread language but is can perform a   synchronous operation with the help of event loop and queues
5. js is both compiled and interpreted language

# JavaScript Runtime Enviornment(JRE)
JavaScript Runtime Environment that provide an environment where we run our javascript code

# Types of JRE
it is 2 types
1. Browser
2. Node js

# if npm throw the error node install then write this on vs terminal 
set- ExecutionPolicy -ExecutePolicy RemoteSigned -Scope CurrentUser

# Token 
1. it is smallest unit of programming language 
# Example      let a = 10;
1. let = keyword
2. a = identifier
3. = operator
4. 10 = literals
5. ; = punctuators/separators


# Types if token
    it is 5 types

1. Keyword: key word are predefind word that is used to perform some specific task 
       Example:- 
        var, let, const, function, if , else, switch, case, break, continue, do , while, for, in, delete, try, catch, finally , throw, extend

*** notes 
       keywords are always in written in lower case or letter

2. Identifier 
        idetifiers are use givien names
        i) name of a variable
          explample:-1
                const user = "Raj";

          ex2 :-
              const fullName = "Sarvesh Yadav";   ----> lower camel casing
               

        ii) name of function 

           ex1 
              function sum (a , b){

              }

           ex2
              fuction addSum(a, b){

              }                         --------->lower camel casing


        iii) name of a class and  clssmembers

           ex1:-
              class Employee{
                                  -------> upper camel casing
              }

        Example 1:- let user = "Rig"; 
                        |
                        |-----Identifier(variable)

3. Operators:-
        operatos are predefind symbols that is used to perform some specific task

        example1:- const result = 10  + 20;
                                      |                               
                                      |--operator

4. Literals:- 
        Literals are different type of value that is used in writing a program

5. Puncution:-
        Punctuation are also know as separaters which tell about the line ending of a code.


# what is difference b/w "var", "let", and "const" lekword

1. Var
-> multi time declaration 
-> mutiple time initilization 
-> var declaration with var keyword goes to the global scope.
-> variable declared with "var" keyword support hoisting and does not belong to temporal dead zone (TDZ)
example-
           initialize
           |-----|
       var a = 10; 
      |-----|
      declaration

       var a = 100;
       var a = 1000;
       a = 10000;
       console.log(a);

2. let
-> one time declaration 
-> multiple time initialization
-> variable declared with "let" keyword goes to block scope or script scope
-> variable declared with "let" keyword support hoisting but belong to temporal dead zone(TDZ)
example-
            initialize
           |-----|
       let b = 20; 
      |-----|
      declaration

           b = 200
           b = 2000;
           console.log(b);  

3. const 
-> one time declaration
-> one time initialization
-> variable declared with "const" keyword goes to block scope or script scope
-> ariable declared with "const" keyword support hoisting but belong to temporal dead zone(TDZ)
example:-

       initialize
           |-----|
       const c = 30; 
      |-----|
      declaration
       
       error c = 300;
       error c = 3000;

# Operator

1. opreands:-  operands are different types of value needed by an operator.

# Type of operator
   on the basis of operand, operator are of 3 types 

   1. Unary Operator:-
      i) Increment / Decrement 
   * their are two types
      1. pre increment/pre decrement (example1 let a  = ++10)
      2. post increment/post decrement (example1 let a  = 10++)

      ii) Logical Not (!)

   2. Binary Operator:- 
      i) Arthmetic Operator (+,-,*,/,%,**)
      ii) Assignment Operator (=)
      iii) Coumpund Assignment Operator (+=, -=, *=, /=, %=, **=)
      iv) Relational Operator / Comparion Operator (>, <,  >=, <=, == (loose equality), !=(loose not equality), ===(stict equality), !==(stict not equality))

      v) Logical Operator
         logical and(&&)
         Logical or / Double Pipeline(||)

    3. Ternaey Operator:-
       Condtional Operator(Operand1 ? Operend2 : Operand3)

# TYPE COERCION:-
       To Convert one type of data into another type with the help of js engine is know as type coercion.

# Types of Type Coercion:-
        it is of 2 types

1. Implicit Type coercion:-
        To convert the one type of data into another type with the help of js engine implicity (automatically) is known as Implicit Type of coercion

example 1 :- 
        const a = 10; (number type data)
        const b = "5" (string type data)

        console.log(a - b)
                         |
                         |--------> automatically string converted into number
        
        output = (10 - 5) => 5

example 2 :-
        onst a = 10; (number type data)
        const b = "5#mn" (string type data)

        console.log(a - b)
                         |
                         |--------> js automatically converted string into number
       
        output = (10 - Nan) => Nan

        ->if is try to convert any actual string into number we will get compution error that is Nan(not a number)

2. Explecit type coercion 
       i). To convert one type data into another type forefully (explicitly) with the help of js engine is   known as explicit type coericon
       
       ii). here we use inbulid method
           1. String()  2. Boolean()  3. Number() 4.BigInt()   5. Symbol

   * note:- type of NaN is number     

# what is truthly and falsy;
* truthly:-
      the value converted or treated as true is know as truthly value such as [], {}, -1, "sarvesh"

* falsy:-
      the valuse converted as teated as false is know as falsy value such as +0, -0, 0.0, 0n, nan, null, undefined
      ""(empty string)

# Boolean Conversion      

* Number to Boolean conversion
  Ex1.
  const a = 10;
  const bool = boolean(a);
  console.log(bool);------>true
  console.log(type of (bool));------->boolean
  
  Ex.2
  const str = "hello";
  const bool = Boolean(str);
  console.log(bool);------>ture

# Type of Literals
  1. Primitive Literals
  -> Primitive value are single value literals.
  -> Primitive Literal are immutabel (can not change)

  Example:- let a = 10;
                a = 100;
                a = 1000
                a = 10000;
                console.log(a)------> 10000

  2. Non Primitive Literal
  -> Non primitive literal are multi valued literal
  -> Non primitive Literal are mutable (can change)

  example:- const num = [10, 20, 30, 40];
                  num[1] =   200;
                  new num= [10,200,30,40 ]------>output            

# node js
## what is module fuction executor ? **
-> In node js (CommonJs modules), the module function executor refer too the automatic function wrapper that node.js uses to execute every module.

-> before node.js runs a modules code , it wrap the entire file content inside a function like this:

(function (exports, require, __filename, __dirname){
// Your module code actually lives here
});

# what is __filename and __dirname?

1. __filename: the full absolute path of the current javascript file(including the filename).
example. :/user/you/project/app.js

2. __dirname : the absolute path of the folder that contains the current javascript file 
example. :/user/you/project.

# what is path modules?

The path module is a built in node js tool that help you work with the file and folder path (join the, get the dierectory name ,etc. ) in a safe and cross-platform way.

1. **path.join()** join path segment safely.
2. **path.resolve()** resolve to anabsolute path.
3. **path.dirname()** Return the dirname of a path
4. **path.basename()** Return the last portion of a path (filename)
5. **path.extname()** Return the file extension
6. **path.parse()** Parses a path into an object
7. **path.format()** Build a path string from an object
8. **path.isAbsolute()** Check if path is absolute.