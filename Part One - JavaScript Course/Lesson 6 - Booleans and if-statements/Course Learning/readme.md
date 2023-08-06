# Booleans and If statements

## Booleans

In JavaScript, a boolean value is one that can either be TRUE or FALSE. If you need to know “yes” or “no” about something, then you would want to use the boolean function. It sounds extremely simple, but booleans are used all the time in JavaScript programming, and they are extremely useful.

### What are the booleans values

**true**

    <script>
      console.log(3 < 5);
    </script>

  - This comparison will return true in the console.

**false**

    <script>
          console.log(3 > 5);
    </script>

  - This comparison will return false in the console.

**_A boolean value represents wether something is true or false_**

### Comparison Operators

On way to create booleans is to compare the value of numbers `(7 > 5);`. Here is a list of all the _comparison operators_

- `>` greater than
- `<` less than
- `>=` greater than or equals to
- `<=` less than or equal to
- `===` equal to
- `!==` not eqaul to

### Syntax rules for booleans

- To create a boolean you just type the word `true` or `false`.
- Do not surrond them in qoutation marks `'true'` or `"false"`
- comparison operators are lower than math operators in the order or precedence.

## If Statement

In JavaScript we have the following conditional statements: Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false.

  ### What do if statements do

 An _if statement_ will run the code between the curly brackets if the _boolean_ value between the brackets is true.

    <script>
      if(true) {
            console.log('hello');
          }
    </script>

An _if statement_ will not run the code in the between the curly brackets if the _boolean_ value between the brackets is false

    <script>
      if(false) {
            console.log('hello');
          }
    </script>

  ### What do if-else statements do

an _if-else statement will run the code in the curly brackets if the value of the _boolean_ in the brackets is true otherwise it will run the code in the _else_ curly brakets. 

    <script>
      if(true) {
        console.log('hello'); 
      } else {
        console.log('world')
      };
    </script>

if the value of the _boolean_ value in the brackets is false, the _if-else statement_ will not run the code in the curly brackets and will run the code in the _else_ curly brackets

    <script>
      if(false) {
        console.log('hello'); 
      } else {
        console.log('world')
      };
    </script>

## Logical Operators

  ### AND (&&) Operator

          <script>
          console.log( true && true)
          </script>

  - It check if two boolean values are both true
  - if both side are true, it will result in true
  - if one of the sides is false, it will result in false

  ### OR (||) Operator

        <script>
          console.log( true || false)
        </script>

  - It checks if the right side is true or the left side is true.
  - If one side is true then it will result in true
  - if both side are true it will result in true

  ### NOT (!) Operator

        <script>
          console.log(!true)
        </script>

  - The not operator only takes on value and flips it
  - if the value is true, it will return false
  - if the value is false, it will return true

## Scope

- Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. It limits where a variable exists. 
- Any variable we creat inside the curly bracket ` {...}` will only exist inside the curly brackets and can't be used anywhere else. 
- Scopes will help with avoiding naming conflits.

## Strategy for javaScript

- Figure out what steps you need to do. This is called an Algorithm
- Convert the steps into code 

## Truthy and Falsy Values

When non-boolean values are used in a boolean context, such as the condition of an if statement, they will be force into either true or false. 

- if you put a number in to an if statement as an argument it will behave as the boolean true. we call this a truthy value.

        <script>
          if(5) {
            console.log('truthy')    
          };
        </script>

- if we put the number zero in an if statement as the augment. it will return false. we call zero a falsey value

        <script>
          if(5) {
            console.log('truthy')    
          };
        </script>

### Falsy Value

- false
- 0 
- ' ' empty string
- NaN not a number. 
  - We get Nan if we do invalid math.

            <script>
              console.log('text' / 5);
            </script>
- underfined. 
  - represent that something does not have a value. the below can only be used with let.

            <script>
              let variable1;
              console.log(variable1);
            </script>
  - The below can be used when using const

            <script>
              const variable1 = underfined;
              console.log(variable1);
            </script>
- null
- any value that is not in this list is a truthy value

## Shortcuts for if-Statments

- Ternary Operator `?:`

        <script>
          true ? 'truthy' : 'falsy';
        </script>
  - Ternary operator is similar to an if-else statement.
  - The first value `true` is like the condition.
  - the value after the question mark `?` will be returned if the condition is true/truthy
  - if the condition is false/falsy the value after the colon `:` is returned.

            <script>
              if(true) {
                'truthy'
              } else {
                'falsy'
              };
            </script>
- the advantage to using a Ternary Operator over an if-else statement is that a Ternary Operator can be save into a variable and returned as a result.

        <script>
        const result = 0 ? 'truthy' : 'falsy';
        console.log(result);
        </script>


- Guard Operator `&&`

        <script>
          false && console.log('hello');
        </script>

  - The `&&` operator we previously learnt check if both side are true. if the first value is false the code short circuits and does not run the code on the right.
  - So we can use the condition/code on the write to make sure the code on the right does not run. This is called the guard Operator.
  - it is a shortcut for the below if statement.
  - just like the ternary operator we can save the guard operator in a variable.

            <script>
              if (condition) {
                console.log('hello');
              };
            </script>

### Default Operator `||` 

- OR operator we previous learned about is use if one or the other boolean values are true
- the default operator will short circut if the first value is true
- it is use to set a default value

<script>
  let currency;

  if(!condition) {
    currency = 'USD';
  };
</script>