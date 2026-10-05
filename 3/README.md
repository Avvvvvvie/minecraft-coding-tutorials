# Creating a tool that sets up a new datapack

The goal of this project is to have a command in the console of your computer, that creates commonly used files like pack.mcmeta, data/minecraft/tags/tick.json and many more for you at the start of a new datapack project. If we want to create a slightly different setup depending on the name, description and namespace for the datapack, the command could look like this: `datapack-init "My Datapack" "This is an example datapack" "mydatapack"` To do this, we have to learn three things:
1. How to run code from the console
2. How to receive arguments from a console command
3. How to interact with the file system of the computer

### How to run code from the console
To run javascript on your computer / from the console, you have to install node. Node will execute the code for you. In other scripting languages, you would have to install something similar. In lower level languages, you would have to learn how to compile the code into binary, so your computer can execute it.

Node can be downloaded here: https://nodejs.org/en/download. If you have installed it, you should be able to type `node --version` in your console and it will tell you what version is installed. If you have downloaded the javascript file in this folder, and run `node datapackInitializer.js` from a console that is opened in the same folder, you should get a message. Alternatively, the name of the file can be the full path of the file datapackInitializer.js.

### How to receive arguments from a console command
When node executes code, there will be a variable called `process.argv` that holds all arguments of the command that you wrote. Use console.log to find out what the current arguments are. Try to execute it again with more (fictional) arguments.

### How to interact with the file system of the computer
The type of file system on your computer depends on your operating system and your storage device. There can be multiple different file systems on one device even. Without the file system, there would just be memory spaces that have no specific meaning. The file system manages memory in the form of files and folders. It also manages which users have the right to access which file. But still, interacting with the file system directly can be complicated. We don't want to deal with it every day. Because of this, there are libraries that do the complicated part for us. If we want to use the code of such a library, we have to declare that in our code. In javascript, this library is called "fs". Looking at the javascript file, you can probably already see how it is added to your code. There is one important thing you have to know: You can create a file relative from where you executed the command that runs the code. Wherever you executed it, is called the "working directory". If you start a file path with "./", it will be relative to that directory. For example, "./data" will be a folder inside the current folder.

---

The rest is up to you. You have to research how to create files and folders using fs. There are some hints in the provided javascript file.

When you are finished, there is one last thing to do. If you want to run this code from anywhere on your computer, you dont want to remember where you put it. For example, on my computer, the command looks like this: 

`node C:\Users\anima\Documents\GitHub\minecraft-coding-tutorials\3\datapackInitializer.js "My Datapack" "This is an example datapack" "mydatapack"`

But actually we wanted something like `datapack-init`. How you do that depends on your operating system. On linux, you can create an alias. On windows, you can create a batch file with the command and add it to a folder that is in your PATH list.