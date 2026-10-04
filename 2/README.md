# Looking up a minecraft profile
The goal of this project is to be able to search minecraft accounts and see their skin!

First of all, visit this link to see for yourself what is possible: https://mc-api.io/

As you can see, you can type in a player name and see a lot of information about it. It is very cool, but also a lot.

---

We will only do a small part. Open this html file in the browser to see how it looks right now.
As you can see, there is an input element you can type into. It is a html element. We want to be able to type a player name into this input element and then display information about that player.

But how will we know that something was written into it?
We have to execute code as soon as that happens!

Luckily, in html, this can be done easily :)
Whenever the value of the input element changes, we can tell it to give us a call!

In our case, the input element was told to call the function "displayUserInformation" as soon as someone writes something into it. Can you see how this was done in the html file?

Your task is to program the function displayUserInformation.

---

The first step to achieve that, is to research how to *read the value of an input element*.
Hint: You can use the id of the input.

---

The second step is to somehow get information about the username.

Often, programmers get data from the internet using so called APIs. You can make a request to an API and it will give you structured data based on your request. Your browser also makes similar requests to websites, to receive the data to display the website.

For example, visiting https://mc-api.io/render/FACE/ByteException_/JAVA?size=256 gives you the face of the user ByteException_ on java.

Visiting https://mc-api.io/profile/ByteException_/JAVA will give you a lot of profile information, most importantly the UUID of the profile. It is typical structured data returned from an API.

Now we want to get this data in our code. In other words, we want code that sends a request to the mc-api.io API and receives the data response. Luckily, the website already has code examples for us.

Your task is to:
1. Find the code on the website (https://mc-api.io/docs), that receives the profile information using javascript.
2. Find the code on the website, that receives the face picture using javascript.

Once you have the profile information, you will be able to access the variable `profile.uuid`.
Your task is to display this UUID in the browser.
Hint: Use the html element with the id "result" like in project 1.

Once you have inserted the code for getting the face picture, it should be displayed automatically. (Because the example code on their website already does that work for you)
