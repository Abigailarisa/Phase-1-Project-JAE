const charName = document.querySelector("#char-name");
const voteLikes = document.querySelector("#like-button");
const voteDislikes = document.querySelector("#dislike-button");
const likesCount = document.querySelector("#like-count");
const dislikesCount = document.querySelector("#dislike-count");
const charCard = document.querySelector("#character-info");
const filterButton = document.querySelector("#anime-or-live-action");
const h2 = document.querySelector('#test');
const imgObj = document.createElement("img");
const media = document.createElement("span");
media.id = "media-name";
imgObj.id = "character-image";
charCard.append(imgObj, media);
filterButton.addEventListener('click', () => {
    if (h2.style.display !== 'none') {
        h2.style.display = 'none'
    } else {
        h2.style.display = ''
    }
})

fetch("https://api.disneyapi.dev/characters?page=128")
  .then((res) => res.json())
  .then((char) => renChar(char));

function renChar(chars) {
    console.log(chars)
  const charSlice = chars.data.slice(8, 15);
  charSlice.forEach((char) => {
    const charBar = document.querySelector("#character-bar");
    const spanName = document.createElement("span");
    spanName.textContent = char.name;
    charBar.append(spanName);
    const characterObj = {
      name: char.name,
      image: char.imageUrl,
      likes: 0,
      dislikes: 0,
      films: char.films,
      tvShows: char.tvShows,
      videoGames: char.videoGames,
    };
    spanName.addEventListener("click", () => {
      charName.textContent = characterObj.name;
      imgObj.src = characterObj.image;
      imgObj.style.display = 'none';
      imgObj.style.display = '';
      likesCount.textContent = characterObj.likes;
      dislikesCount.textContent = characterObj.dislikes;
    });
  });

}

function handleLikes() {
  voteLikes.addEventListener("click", () => {
    likesCount.textContent = parseInt(likesCount.textContent) + 1;
  });
}

function handleDislikes() {
  voteDislikes.addEventListener("click", () => {
    dislikesCount.textContent = parseInt(dislikesCount.textContent) - 1;
  });
}

function handleNewCharForm() {
  const charForm = document.querySelector("#character-form");
  charForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = e.target["name"].value;
    const newImg = e.target["image-url"].value;
    let newChar = {
      name: newName,
      image: newImg,
      likes: 0,
      dislikes: 0,
    };
    // console.log(newName)
    renderCharacters(newChar);
  });
}

function filterChar(characterObj) {
  const filterButton = document.querySelector("#anime-or-live-action");
  filterButton.addEventListener("click", () => {
    if (filterButton.textContent === "Filter Off") {
      filterButton.textContent = "Filter On";
      //console.log(characterObj)
      return (media.textContent = characterObj.films);
    } else {
      filterButton.textContent = "Filter Off";
    }
  });
}
handleLikes();
handleDislikes();
handleNewCharForm();