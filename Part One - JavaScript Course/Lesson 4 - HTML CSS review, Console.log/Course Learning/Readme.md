# HTML CSS Review, Console.log

## What does HTML, CSS and JavaScript do in a website

  - HTML
    - creates the content and structure of the website

  - CSS
    - changes the appearance and layout of a website

  - JavaScipt
    - Makes the website interactive

## HTML & CSS Review

### HTML

  The _HyperText Markup Language_ or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.

**Syntax**

  - Type a Less `<` than symbol
  - Include an element name 
    `e.g <button`
  - End with a greater `>` than symbol
  - `<button>` this create an HTML tag called an opening tag
  - Each HTML tag needs a closing html tag that has a slash before the element name. e.g `</button>`.
  - Inbetween the tags you have the contents of the tag. `<button>Hello</button>`
  - We can also have a element is side another element e.g `<p>paragraph of <button>Hello</button> text</p>`. This is called nesting an element.
  - Multiple spaces between the code will count as a single space and newlines also count as spaces. This will help with making your code easier to read.
  - Put contents of a element on its on line. e.g.


### CSS

  Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

**Syntax**

  - To write CSS code you need to create a separate .css file or write in the HTML code using a special element called the style element `<style> </style>`
  - Inside the style element we can nest CSS code e.g `button {}`. _Create a new line between the two curly brackets by pressing enter_
  - inside the `button{}` we can then right code that tells the webpage how to change the appearance e.g
  `button { background-color: red; }`
  - The code above will change the background color of all the buttons in the webpage to red.
  - CSS selector `button` selects which elements to change
  - between the curly brackets `{...}` we have the CSS Styles. `{background-color: red}`. This dictates how to change the appearance.
  - for each style, The left side is called the CSS property `{Background-color: }` this tells the computer what we are changing.
  - On the right side we have the CSS value. `{ : red}`. this tells us what we are changing the property to.

### HTML Attributes

  HTML attributes are special words used inside the opening tag to control the element's behaviour. HTML attributes are a modifier of a HTML element type. e.g `<button title="good job"><button>`

**Syntax**

  - Always put the attribute in the opening tag
  - Always have a space between the element and the attribute
  - `<button title="">`this is the attribute name and it tells us what we are changing about the element.
  - `<button title="Good job">` this is the attribute value and it tells us what we are changing the element to.
  - Seperate the attribute name and value with an equal sign **=** and wrap the value in double qoutes.

### How do we style the same elements differently

  The HTML class attribute specifies one or more class names for an element. Classes are used by CSS and JavaScript to select and access specific elements.

  - go into the opening tag of your element and add `<.. class="">`
  - give class a name. ideally use descriptive language. `<.. class="red-button">`
  - go into your style tag and select the class by type period **.** then the name of the call **.red-button {...}**
  - You can now specify styles for the button that has the _red-button_ class in its element's attributes.

### HTML Structure

The two primary structural components in HTML are the body and the head. Both of these are used by all web browsers to render the structure and settings of a webpage.

Below is the structure every website uses for its html.

  ```<!DOCTYPE html>
  <html>
    <head>
      
    </head>

    <body>
    
    </body>
  </html>```

## Javascript

  The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user. When used to include dynamic scripts, the scripts may either be embedded inline or may be imported from an external file using the src attribute.

    - We user the script element in HTML to embed or write Javascript code. `<script></script>`.
    - We usually put the script element at the bottom of the body to allow the webpage to be create first and then use JavaScript to make the page interactive.
    - We can also use special HTML attribute to run javaScript. `onclick=" "`
    - You can add the _onclick_ attribute to the opening tag of your element `<button onclick=" "></button>` and type your JavaScript code between the double qoutes
    - The JavaScript code will now run when you click the button

### Console.log

  The `console.log()`is a function in JavaScript that is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user

    - _Console.log_ allow for us to see the result of the JavaScript code running on the webpage in the console

    - it redirects any JavaScript code between its bracket to the web browser's co



