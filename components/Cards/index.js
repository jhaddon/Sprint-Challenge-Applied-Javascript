// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles", {
    method: "get"
  })
  .then(res => {
    console.log("Artic", res.data.articles);
    res.data.articles.javascript.forEach(art => cardComponent(art));
    res.data.articles.bootstrap.forEach(art => cardComponent(art));
    res.data.articles.technology.forEach(art => cardComponent(art));
    res.data.articles.jquery.forEach(art => cardComponent(art));
    res.data.articles.node.forEach(art => cardComponent(art));
    res.data.articles.javascript.forEach(art => cardComponent(art));
  })
  .catch(err => {
    console.log(err);
  });

function cardComponent(data) {
  console.log(data);

  // Create Elements
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imgCont = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");

  // Assign Classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  // Children find your parents!
  cardsContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(span);

  // Data
  headline.textContent = data.headline;
  img.setAttribute("src", data.authorPhoto);
  span.textContent = `By ${data.authorName}`;
};