# Document Object Model (DOM)

The Document Object Model is a cross-platform and language-independent interface that treats an HTML or XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.

    <script>

      document.body.innerHTML = 'Hello';
          
    </script>


- The DOM combine JavaScript and HTML and give JavaScript control of the Html elements.
- `Document` in the code above is a build it object that javaScript offers. other build in objects include
  - `console.log()`
  - `JSON.stringify()` 
  - `localStorage.getItem()`
- We use dot notation `.` to get to the `body` property of the document object, which is also an object with properties inside.
- we us dot notation again to reach the `InnerHTML` property that is inside the `body` object inside the `document` object.
- we assigned a value to the `innerHTML` property using an equals sign `=` followed by the value.
- Because the `document` object is linked to the webpage When you assign a value to the `innerHTML` property it overides all the HTML that is previously in the `body` HTML tag.

## Properties and Method we can use.

### Properties

`document.title`

    <script>
      document.title = 'changed';
    </script>

- gives us access to the webpage title and we can change it by assigning a value to it like the above code

`document.body`

    <script>
      document.body
    </script>

- this code gets the `<body> </body>` HTML tag and brings it into JavaScript. We can now have HTML elements inside JavaScript.
- When an HTML element is brought into Javascript the HTML element is converted into a JavaScript Object.

`document.body.innerHTML`

    <script>
      document.body.innerHTML = '<button>Hello</button>'
    </script>

- `innerHTML` is a proper that gets all the HTML in the body tag into JavaScript and give us control to them.
- You can use it to change the HTML in the body like in the code above.

### Method

`document.querySelector()`

    <script>
      document.querySelector('button')
    </script>

- The `document` method `querySelector` helps us get a specific html element and bring it into JavaScript
- in the code above, we use a string to specify which element to target in the brackets `(button)`. This will target the first button element in the body tag.

        <script>
          document.querySelector('button')
            .innerHTML = 'changed';
        </script>
- the `querySelector` will get the element describe in the brackets and put it in the JavaScript and we can use `innerHTML` to control the HTML in the element.
- since the `querySelector` will select the first element you describe, to select a specific element you need to use the elements class name `<button class = "js-button>Hello</button>`.

        <script>
          document.querySelector('js-button');
        <script>

- this will give you control to all the element with the class name. it is common practive to have `js-` in the class name to show it is now a js element.
- since javaScript turn HTML elements to JavaScript objects, the become values and values can be save in a variable for use later

        <script>
          document.querySelector('js-button');

          const buttonElement = document.querySelector('js-button);

          console.log(buttonElement);
        <script>

- it is common practice to have `Element` or `Elem` in the variable name to show it is a HTML element. YOu can now reuse the element like shown above.