const express = require('express');
const app = express();
const fetch = require('node-fetch');

//app.get('/api/images', async (req, res) => {

app.get('/api/:word', async (req, res) => {

  const API_KEY = 'BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs';
  const word = req.params.word;
  console.log(word);
   
  // res.json(customers);
 // const imageURL = await fetch(`https://api.unsplash.com/search/photos?query=${word}&client_id=BgwLpezqvGtqHU5Q23sXjv0kJSebWvOoG_3fKA6ALOs`); 
  const imageURL = await fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${word}&client_id=${API_KEY}`); 

   const data = await imageURL.json();
   res.json(data)
  //console.log(images)


});

const port = 5004;

app.listen(port, () => `Server running on port ${port}`);

console.log(process.env.PORT)
  // const customers = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  // ];

