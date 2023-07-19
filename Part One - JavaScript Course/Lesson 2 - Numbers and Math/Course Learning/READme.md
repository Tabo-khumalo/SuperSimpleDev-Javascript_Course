#Number and Math#

**Lesson Link** #https://supersimple.dev/projects/amazon/


2 + 4
6  -> **Addition**

4 - 2
= 2 -> **Subtration**

2 * 4
= 8 -> **Multiplication**

8 / 2 
= 4 -> **Division**

###Syntax for math###

  - You can type out math directly as show above

  - you can calculate more than just two number in one calculation

**a.**  
  ###Practical Examples (project/Amazon)###

    **1.a**

    Calculate the cost of items in the cart before tax and shipping (items(3))?

    20.95 + (10.90 * 2)
    = 42.75

    **2.a**

    Calculate the cost of the products plus shipping?

    20.95 + 4.99 + 10.90 * 2
    = 47.74 

##Order of Operations (Operator Precedence)##

  - There is an order of operation like in normal math that dictates which calculation get does first

  - Javascript follows this rule **BODMAS** which standS for 

  **Brackets () of multiplication (*), addition (+), subtraction(-), division(/)**

    - this describes the order of precedence with brackets having the highest precedence meaning calculation in brackets are done first 
  
    - then multiplication is next highest 

    - followed by addition

    - then subtration

    - and finally division

 **b.**  

  ###Practical Examples (project/Amazon)###

    **1.b**

       Calculate the cost of items in the cart before tax and shipping (items(3))?

    7.99 * 2 + 20.95
    = 36.93

    ###How to calculate Tax(%)###

    You can not directly calculate a percetage in javascript you will have to first calculate it manualy.

    1% = 1/100
    10% = 10/100 = 0.1 

    That is how to calculate percentage.

**c.**

  **1.c**

    Calculate 10% tax for the estimated tax for the item in the cart?

    20.95 + 7.99 *2 
    = 36.93

    10% = 10/100 = 0.1

    36.93 * 0.1
    = 3.693

##Weird Behavior of math in JavaScript##

###terminology:###

  **Whole numbers** like 2,4,9 are called **Intergers**

  **Decimal numbers** like 2.2, 4.4, 9.9 are called **floats(Floating point number)**

Javascript and other programming languages have a hard time storing Floats as some of the number have reccuring numbers _e.g 0.666666...7_. Computers cannot store these values after the dot(.) because computer unlike humans can only count using O's and 1's and this may cause inaccurecies in your code.

**D.** 

  **1.d**

  Calculate the cost of the items in the cart?

    20.95 + 7.99
    = 28.939999999999998

  **because this are floats you get a recurring answer. To solve this calculate money in cents and then divide by 100 to convert to correct currency conversion**

  **2.d**

    (2095 + 799) / 100
    = 28.94

##how to round a number to the nearest interger##

  use Math.round() and _make sure the m is in caps_

    Math.round(2.2)
    = 2

  **this will round the number down to 2**

   Math.round(2.8)
  = 3

  **this will round the number up to three**

**E.** 

  **1.e**

  Calculate the Estimated tax

     ((2095 + 799) * 0.1) / 100
     = 2.894

  **2.e**

  Round the number to match the tax shown in the cart

  _round of the number in cents first and then divide by 100_

     Math.round((2095 + 799) * 0.1) / 100
    < 2.89

##How to use google to learn new features of JavaScript##

  the trick to finding JavaScript features on google is to search for what you are trying to do.

  _e.g "JavaScript how to round a number"_

   


