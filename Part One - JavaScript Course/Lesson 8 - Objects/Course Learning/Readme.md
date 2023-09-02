# Objects

## What is a object?

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

## Syntax rules for Objects

    <script>
      const product = {
        name: 'socks',
        price: 1090
      }
    </script>

- To create an object we start with an open curly bracket `{` and end with a close curly bracket `}`.
- Inside the object we can add values `'socks'` and the code on the right is the property `name`. We use the properties to access the corresponding value in the object `name: 'socks'`.
- We separate the property and the value with a colon `:` and this is called a Property-Value Pair `price: 1090`
- We can have more than one property value pair and we separate them using a comma `,` `name: 'Socks', price: 1090`
- To access the object, we type the name of the object `product` followed by a `.` and then the property name `price`. This will give us the value `1090`. This is call _Dot notation_ `product.price`.
- if we access a property that doesnt exist the value will be  `undefined`.
- To change the value of a property, we can use Dot notation and an equals sign. `product.name = 'Cotton Socks';`
- We can add a value to the object by creating a new property using dot notation and assigning a value to it using the equals sign. `product.newProperty = true;` 
- We can also delete a property from the object by typing `delete` followed by `product.newProperty;` this will remove the property and value from the object. `delete product.newProperty;`
- You can save and object in a variable and you can also `console.log();` an object

## Why do we use objects

1. It makes our code more organized

2. it lets us group multiple value together and let us use use multiple values together

## how to access objects 

### Dot notation

Dot notation is the most common way to access elements in JavaScript. To use dot notation, you simply write the name of the object followed by a dot and the name of the property you want to access.

    <script>
      const car = {
        name: 'BMW',
        Year: 2023
      }

      console.log(car.name);
    </script>

### Bracket notation

The Bracket Notation approach involves using square brackets, in which you have an expression that evaluates to a value. That value serves as a key for accessing the property.

    <script>
      const car = {
        name: 'BMW',
        Year: 2023
      }

      console.log(car.['name']);
    </script>

### Which one should we use

- we use dot notation by default because it's easier to read and type.
- we use bracket notation when we have value we can use dot notation with e.g `delivery-time`. if we use dot notation here JavaScript will think the dash is a minus sign, so we use bracket notation to counter this.

## Object method

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

      <script>
        value = {
          name: test,
          functionMethod: function function1() {
            console.log('method');
          }
        }
        value.functionMethod();
      </script>

## built-in Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

### JSON Built-in Object

JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).

- JSON Stands for JavaScript Object Notation
- It is a type of syntax similar to JavaScript Object but with less features
- all properties and strings must use double qoutes
- It does not support functions
- JSON is more universal than JavaScript objects
- we use JSON When we send data between computers
- We use JSON When we store data


        <script>
          {
            "name": "shirt",
            "delivery-time": "1 day",
            "rating": {
              "stars": 4.5,
              "count": 87
            }
          }

        </script>

- The built in JSON Object help us conve  JSON objects back to JavaScript Object.

### Local Storage

localStorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. This means the data stored persists even after the user closes the browser or restarts the computer.

- Local storage only support string, If you have an object to save convert it to a string using JSON.








