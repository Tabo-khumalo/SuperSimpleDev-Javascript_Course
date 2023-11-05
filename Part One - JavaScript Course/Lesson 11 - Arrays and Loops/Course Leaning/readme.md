# Arrays and Loops

JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed. The Javascript Arrays are not associative in nature. Arrays are used when we have a list of items.

## Syntax rules for arrays

- To create an array you use an opening square bracket `[` and followed by closed square bracket `]`

- inside the open and closed sqaure brackets, you create a list of items you want in your array and separate them with a comma `[10, 20, 30]` 

- you can also assign your array to a varialble. `let myArray = [10, 20, 30]`

        <script>
          const myArray = [
            10,
            20,
            30
          ];
        </script>

- To access the items in the array you can use a square brack and a number called an index `[0]`. To access the first value in the array the index number is zero, then to access the second item in the array the index number is one.

        <script>
          const myArray = [
            10,
            20,
            30
          ];

          console.log[0];
        </script>

### Loops

Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false

## While Loop

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

### syntax rules

- To create a loop type `while` followed by round brakets `( )` and curly brakets `{}`

- the code inside the round brackets `(i <= 5>)` is called the loop condition. The code inside the curly brackets `{i = i + 1}` is called the loop body.

- the code on top `let i = 1` is called the loop variable.

- everytime we loop we are going to increase the loop variable `i` by 1 `i = i + 1`. this is called the increment step. the increment step makes sure the loop comes to an end at some point, otherwise it would go on forever.

- each time the loop runs it is called an iteration.

- loops create a scope

        <script>

          let i = 1;

          while (1 <= 5) {
            console.log(i);
            i++;
          }
        </script>

## For loop

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop. A for statement looks as follows: js Copy to Clipboard for (initialization; condition; afterthought) statement.

### syntax rules

- first type `for` followed by round brackets `()` and then curly bracket `{}`

- in the round bracket we will type the condition for the loop `(let i = 0)` this will create the index (i stand for index) for the iteration `(let i = 0; i < 0.5)` this will be argument for the iteration `(let i = 0; i < 0.5 ; i++)` this will be the increment by 1 to te index(i).

- in the curly bracket will will type the code to repeatedly runs as long as the condition is met `{console.log(i)}`

        <script>
          for (let i = 0; i < 0.5; i++) {
            console.log(i);
          };
        </script>


