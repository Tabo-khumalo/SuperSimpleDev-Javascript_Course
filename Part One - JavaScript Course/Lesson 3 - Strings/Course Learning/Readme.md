# Strings

## Whats is a string?

A string can be any text inside double or single quotes e.g _"Tabo"_, _'String'

## Syntax Rules for Strings

- To create a string you just need to type some text e.g Hello

- Then surround the string in single **' '** or Double **" "** quotes.

## Adding strings together

We can also add strings together, This is called _Concatenation_

  'some' + 'text'
  = 'sometext'

**What if we added a string to a number?**

  'hello' + 3
  = 'hello3'

Javascript will automatically convert the number to a string and return a string value. This is called _Type coercion_

### Practical Examples

**a**

  **1.a**

    Create text for Cost of the products in the cart?

      '$' + ((2095 + 799) / 100)
      = '$28.94'

  **2.a**

    Create text for the number of items and the cost of the items in the cart?

      'items(' + (1 + 1) + '): $' + ((2095 + 799) / 100)

      = 'items(2): $28.94' 

  **3.a**

    Create a Pop up on the screen to display your answer in 2.a?

      alert('items(' + (1 + 1) + '): $' + ((2095 + 799) / 100));

## Three ways to create a String

   - '...' e.g 'hello' 
   - "..." e.g "hello"
   - `...` e.g `Hello` - Backticks

It is advised to use single qoutes in JavaScript unless you have a single qoute inside the text you are creating e.g "I **'**m learning 
JavaScript."

There is another solution to this problem which is to use an _Escape Character_ ( \ ). e.g 'I\'m learning JavaScript' will return 'I'm learning JavaScript'

**Types of Escape Character**

  - single qoute (\')
  - Double qoute (\")
  - New line (\n)
  - Back ticks (``);


**Template String**

 Template literals (template strings) allow you to use strings or embedded expressions in the form of a string this is called interpolation. They are enclosed in backticks `` . You can also create Multi- line strings.

  `Items(${1 + 1}): $${((2095 + 799) / 100)}`

  = 'Items(2): $28.94'


