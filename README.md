# character-manager-js

## Objectives

- Use best JS practices
- Read documentation and test a REST API
- Use a REST API with HTTP requests
- Create a typical asynchronous flow : send asynchronous (promises or async/await) requests to a remote server and process the results
  DOM manipulation: changing the DOM based on results of HTTP requests
  The job

- A Comics fan client would like to manage his favorites characters on a dashboard. He contacts you to create an app that will be able to view, edit, create all his favorites characters.

In this project, you will use the Character Database API to make/fetch a Character Manager. This project ask you to perform HTTP Request.

The root endpoint of the API is the following : https://character-database.becode.xyz/

This is a frontend project, you have to care about the appearance of your application and create a custom template.

## The features

## Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained inside the database. You can use a table or a list of cards to display them, at your convenience.

Make sure the following features will be present for each character:

- Name
- A short description. Be aware that the description field is in Markdown and, of course, we want to display it as HTML in your application.
- An image. Hint: Data URIs
- A button to create a new character
- A way to open the corresponding Character
  Single character

## This page should display:

- The name and image for the character.
  A full description of the character. Be aware that the description field is in Markdown and, of course, we want to display it as HTML in your application.
- A way to open the Character editor
- A way to delete the character (You must add some kind of confirmation, like "Are you sure you want to delete this character ?")
- Character creation

When we click on the character creation button in the Characters list page, we should get redirect to this page. This page should contain a form with an input for each of the following fields:

- name
- shortDescription
- image Hint: Reading local files in JavaScript
  description (You can just let the user enter Markdown but a Wysiwyg editor generating Markdown would be much cooler)
- When the form is completed create the character in the API and redirect to the character list page.

## Character editor

This part should be similar to the Character creation page except it allows to edit an existing character.
It should also contain a button to delete the character. When this deleting an item, display a modal asking for confirmation.

Search input (optionnal)

The client can search a character by name or by ID.

## Constraints

Your website must be deployed somewhere. We recommend Github Pages or Netlify, two great (and free) solutions.
You have to use the best practises in JS, as much as possible 👉 Read these instructions
You must Sass.
Tips

## Bundler

To help you to compile your SCSS files and your modern JavaScript files, we advise you to use a bundler.

One of the most easier to deal with is Parcel.js, have a look at the documentation.

.gitignore

If you use npm, don't forget to add node_modules in your .gitignore file before beginning.

## API REST

Explanations about what can do a REST API

## CSS frameworks

You can use a css frameworks like Bootstrap or Materialize. It will help you to design quickly your application.

Even more, you can search and use some free pre-made templates like this.

## HTTP requests

To help you to perfom HTTP Requests, use the Fetch API.

An another nice solution is a tool called axios. Axios is a promise based HTTP client for the browser and Node.js. You can install it with npm :

npm install --save axios
Then to import it in your JS files:

const axios = require('axios');
Using axios it is strongly recommended to use the async/await syntax when working with asynchronous operations.

## Postman

To test APIs rapidly before coding you can use Postman. To start using it today with the Character Database API you can import this Postman collection.

You can follow this serie of video to know how to manage it : Postman Tutorial

Good luck for this project and show us your favorite serie/movie/game characters!
