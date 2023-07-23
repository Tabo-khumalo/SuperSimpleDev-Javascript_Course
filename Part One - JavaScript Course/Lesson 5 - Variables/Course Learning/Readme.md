# Varibles

Link to project https://supersimple.dev/projects/variables/ 

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data. It is like a container, we can store numbers or names like **3**, **Tabo** and then we can use them later.

## Syntax rules for variables

In the script tag in your HTML file type the word `let` and then give your variable a name Like `variable1`. Give your variable a value using the equals to  sign `=` and assign a value like `3`.

    <script>
    let variable1 = 3;
    </script>

- **let** creates a new variable
- **Variable1** is the name you have given to the variable you created.
- **3** is the value you have given to **variable1**
- we can save a value in side a variable and use that variable with a value later one.

The code below will print 3 in the console.

    <script>
    let variable1 = 3;
    console.log(variable1);
    </script>

### variable name restictions

- Can't user special words like `let` as varible names `let let = 3`. but we can use the name `let1 or let2` as variable name `let let1 = 7`.
- You can start with a number `let 2name = 3` but you can use a number in the middle `let na2me = 3` or in the end `let name2 = 3`.
- You can use special character or space in a variable name, except `$`and `_`.

## How to change the value saved in a variable

Type the name of the variable you want to assign a new value to and use the equal sign to assign a new value to it

    <script>
      variable1 = 7;
      console.log(variable1);
    </script>

**The value of variable one will now change from 3 to 7**

### Syntax rules for Re-assigning a variable

- When re-assigning a value to a variable do not use the word let to re- assign it.
- That is because let is used to create a new variable.
- We can not create two variable's with the same name this will cause an error.
- so to re-assign a variable just type the variable name and assign it to something else.

## Shortcute for reassignin variables

- `variable = variable + 2;` shortcut `variable += 2;`
- `variable = variable - 2;` shortcut `variable -= 2;`
- `variable = variable * 2;` shortcut `variable *= 2;`
- `variable = variable / 2;` shortcut `variable /= 2;`
- `variable = variable + 1;` shortcut `variable++;`
- `variable = variable - 1;` shortcut `variable--;`

## Best practices to name variables

  **Use Javascript naming convention`.**

  **Camel Case**
  - In camel case we capitilize the first letter of the word expect for the first word. `camelCase`
  
  **Pascal Case**
  - Just like Camel case but you capitalize the first let of every word. `PascalCase`

  **Kebab Case**
  - Keep the all the words in lowercase and combine them with a dash(-). `kebab-case`
  - Kebab case does not work in JavaScript because we use the dash as a minus sign but we can use kebab case in our file names.

  **Snake Case**
  - Keep all the letter in lowercase and combine them using an underscore(_). `snake_case`

  ## Three way to create variable

  - Let
    - Creates a variable with a value that can be changed at any point in time
  - const
    - creates a variable like `let`but we can not change it's value later, the value is constant.
    - using `const` to create variables in JavaScript is considered best practice as it is safer and makes code easier to read.
    - Use `const` if you know that the value will no need to be change otherwise use `let`

  - var
    - `var` works the same way as `let` and is consider the original way to create a variable in JavaScript.
  - Because of certain issue `var` has, we don't use var in our code anymore.


