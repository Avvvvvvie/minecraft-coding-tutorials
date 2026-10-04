# Generating particles commands

The goal of this project is to generate minecraft particle commands so that we don't have to write a million lines by hand.

There is a HTML file in this folder that can be displayed by any browser. An HTML file is what defines what should be displayed on a website.
Try downloading it and opening it with your browser to see how it looks like right now.
You will not see much, because we didn't code anything yet. It will also look ugly, because we don't care about that for now.
But you will see what `<h1>Result:</h1>` does. It makes the text inside of it very big. The h stands for "heading". All things in `<>` brackets are called HTML elements. They are the building blocks of a HTML file. Each element does something different based on the stuff inside it. Most elements display the text inside of them.

Inside the `<script>` element, we can code using javascript! When you open/reload a HTML file with your browser, it will execute this code. The code can manipulate and change what is displayed in the browser. This is very powerful!

For this project, we will generate commands with such code, and then we will display the commands in a HTML element. There is already a HTML element that has the id "result". This element is a `<div>` and just displays the text inside of it. In our javascript code, we can use the id of the result element to put text into it.

Now onto our project. Imagine you want to make many particle circles and you don't want to calculate each circle yourself. Oh no math... Good thing that math people on the internet can do that work for you. In the HTML file, the calculation for the relative coordinates of a circle has already been written :D The function returns a list of points, based on the radius and the numberOfPoints.

The rest of the code has not been written yet.
Your task is to research how to:
1. call a function in javascript
2. save the result of a function in a variable
3. how to iterate a list
4. how to create a new string variable
5. how to combine strings (=text) with other strings and numbers

With that knowledge, you will be able to finish the TODOs that are in the HTML file. It is best done step by step. Don't worry if it doesn't work right away. You might have to google around a bit. If you use AI, only do it to explain the concepts that you don't understand. (You will not learn much if you use it to get the solution)

If you have done all the TODOs, opening the HTML file in the browser will execute it and you should see the desired result.

Another hint: You can use console.log to output something to the console. This is useful for debugging.
The console can be opened in the browser by pressing F12 or shift+ctrl+i and then clicking on the "Console" tab. It should say "start of code execution".
