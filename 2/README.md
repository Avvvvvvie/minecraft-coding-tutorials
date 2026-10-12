# Looking up a minecraft profile
The goal of this project is to be able to search minecraft accounts and see their skin!

First of all, visit this link to see for yourself what is possible: https://mc-api.io/

As you can see, you can type in a player name and see a lot of information about it. It is very cool, but also a lot.

---

We will only do a small part. Open [this html file](https://github.com/Avvvvvvie/minecraft-coding-tutorials/blob/main/2/profiles.html) in the browser to see how it looks right now. 

In contrast to the first project, this html file is a bit more complete, as it would be for a good website.
This means that there are more html tags, which give your browser more information about your page. For example, in the `<html>` tag, you can tell your browser what language your page is written in.

In the `<head>` tag, we provide even more meta information about the page.
This information is either used by your browser, bots or search engines like google.
On our page, there are 4 such tags that define:
What the encoding of the text is, how large the page should be displayed
and what title and icon should be displayed in the browser tab.
There exist many more meta tags. Knowing the details of every tag in the head is not important, you just need to be familiar with the concept.

In the `<body>` tag, we put everything that will be displayed on the page.
Here it is more important to be familiar with the meaning of tags, as they can drastically change how something is displayed.
As you can see, there is an `<input>` element you can type into. We want to be able to type a player name into this input element and then display information about that player. There are also a few other html elements: `<h1>` for large text, a `<div>` where we will display the user information text, and an `<img>` where we will be able to display the image of the player's skin.

But how will we know that something was written into the input element?
We have to execute code as soon as that happens!

Luckily, in html, this can be done easily :)
Whenever the value of the input element changes, we can tell it to give us a call!

In our case, the input element was told to call the function "displayUserInformation" as soon as someone writes something into it. Can you see how this was done in the html file?

Your task is to program the function displayUserInformation.

---

The first step to achieve that, is to research how to *read the value of a html input element*.
Hint: You can use the id of the input. Verify that you have gotten the value by using console.log(your value).

---

The second step is to somehow get information about the username.

Often, programmers get data from the internet using so called APIs. You can make a request to an API and it will give you structured data based on your request. Your browser also makes similar requests to websites, to receive the data to display the website.

For example, visiting https://mc-api.io/render/FACE/ByteException_/JAVA?size=256 gives you the face of the user ByteException_ on java. You can change the username in that link to get any players face. You can also get the HEAD, BUST or FULL.

Visiting https://mc-api.io/profile/ByteException_/JAVA will give you a lot of profile information, most importantly the UUID of the profile. It is typical structured data returned from an API.

Now we want to get this data in our code. In other words, we want to write code that sends a request to the mc-api.io API and receives the data response. Luckily, the website already has code examples that show how this is done. You don't have to understand the code in detail.

Your task is to:
1. Find the code on the website (https://mc-api.io/docs), that receives the profile information using javascript.
2. Find the code on the website, that receives the face picture using javascript.

Hint: Search for "javascript" and look for the correct URL

---

Once you have the profile information, you will be able to access the variable `profile.uuid`.
Your task is to display this UUID in the browser.
Hint: Use the html element with the id "result" like in project 1.

Once you have inserted the code for getting the face picture, it should be displayed automatically. (Because the example code on their website already does that work for you)

Lastly, in the code that was given, replace the username ByteException_ in the URL with the input value from step 1. Can you look up your own account?
