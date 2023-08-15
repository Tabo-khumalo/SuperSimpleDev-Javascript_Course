# Functions

## What is a Function?

A _function_ in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. It lets us reuse code.

### Syntax rules for functions

    <script>

      function function1() {
        console.log('hello');
        console.log(2 + 2);
      };

      function1();
    </script>

  - The fist line of the code is how to create a function. Type `function` and give your function a name like `function1` followed by brackets`()` and curly brackets `{}`.
  - Between the curly brackets is the code the funtion will run when it is call. This is called the function body.
  - To use the function or `call` the function, type the function name `function1` followed by brackets and a semi-colon `();`.
  - You can use the same function multiple times by calling th function name.

  ### Rules for function names

  - You can't use special words like `function`.
  - You can't start with a number `2Function`.
  - You can't use special characters `!@#%&` except `$` and `_`.
  - You can't have space between the names `function two words` use camel case for function names.

  ## return statment

  ### What is a return statement?

  The return statement ends function execution and specifies a value to be returned to the function caller.

  ### syntax rules for return statements

        <script>
          return 'hello'
        </script>

- We can return a calculation `return 2 + 2`
- we can return a variable `return variable1`
- this called returning a value or a return value
- We do not need to always return a value we can.
- if your type `return` with no value, it will return undefined
- return ends the funtion and returns to where the funtion is called. Any code after the return statement will not execute.


## Parameters

### What is a Parameter

The parameters, in a function call, are the function's arguments. JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value. it puts a value into the funtion.

### Rules for Parameter names

  - You can't use special words like `function`.
  - You can't start with a number `2Parameter`.
  - You can't use special characters `!@#%&` except `$` and `_`.
  - You can't have space between the names `function function1(two words) {}`. use camel case for function names.

### Syntax rules for Parameters

    <script>

      function calculateTax(cost) {
          console.log(cost * 0.1);
        };

        calculateTax(2000);
        calculateTax(5000)
        
    </script>

  - in the function `function calculateTax() {}` add the parameter name into the brackets `function calculateTax(cost) {}`.
  - add the code to be called in the curly brackets. `{console.log(cost * 0.1);};` and replace the value with a parameter.
  - call the function and parse in the value of the parameter `calculateTax(2000)`.
  - the value in the function call with be substituted in the the function and the calculation will calculate based on the value.

            <script>

              function calculateTax(cost, taxPercent = 0.1) {
                console.log(cost * taxPercent);
              };

                calculateTax(2000, 0.2);
                calculateTax(5000);

            </script>

  - You can have more than one parameter in the function `function calculateTax(cost, taxpercent)` by separating the names with a comma.
  - you can then use the parameter like a variable in the calculation `{console.log(cost * taxPercent)}`
  - You can separate the values being passed into the the different parameters by separating them with a comma when you call the function `calculateTax(2000 * 0.2)`.
  - if there is no value being passed for the parameter the code will result in undefined and Nan (Note a Number).
  - To avoid this, You can set a default value for the parameter in the case that no value has been passed. `function calculateTax(cost, taxPercentage = 0.1)`

  