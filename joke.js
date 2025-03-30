// This will give a random joke
fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
  .then(response => response.json())
  .then(data => {
    // to show joke
    if (data.type === "single") {
      joke.textContent = data.joke; 
    } else if (data.type === "twopart") {
      joke.textContent = `${data.setup} ... ${data.delivery}`; 
    }
  });



function fetchJoke(category = "Any") {
  const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // this will show the joke
      if (data.type === "single") {
        joke.textContent = data.joke;
      } else if (data.type === "twopart") {
        joke.textContent = `${data.setup} ... ${data.delivery}`;
      }

      // This changes the title based on the category
      if (category === "Pun") {
        title.textContent = "A Random Pun";
      } else {
        title.textContent = `A Random ${category} Joke`;
      }
    });
}