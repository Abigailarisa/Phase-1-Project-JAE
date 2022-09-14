
const charName = document.querySelector("#char-name");
const voteLikes = document.querySelector("#like-button");
const voteDislikes = document.querySelector("#dislike-button");
const likesCount = document.querySelector("#like-count");
const dislikesCount = document.querySelector("#dislike-count");
const charCard = document.querySelector("#character-info");
const toggleButton = document.querySelector("#anime-or-live-action");
const media = document.querySelector('.media-title');
const movie = document.querySelector("#movie");
const tv = document.querySelector("#tv-shows");
const videoGame = document.querySelector("#video-games");
const nostalgia = document.querySelector("#nostalgia");
const imgObj = document.createElement("img");
imgObj.id = "character-image";
charCard.append(imgObj);


fetch("https://api.disneyapi.dev/characters?page=128")
  .then((res) => res.json())
  .then((char) => renChar(char));

function renChar(chars) {
  const charSlice = chars.data.slice(8, 15);
  charSlice.forEach((char) => {
    renCharCard(char); 
  });   
}

function renCharCard(char){ 
    const charBar = document.querySelector("#character-bar");
    const spanName = document.createElement("span");
    spanName.textContent = char.name;
    charBar.append(spanName);
    const characterObj = {
      id: char._id,
      likes: 0,
      dislikes: 0,
      films: char.films,
      tvShows: char.tvShows,
      videoGames: char.videoGames,
    };
    console.log(characterObj.id)
    spanName.addEventListener("click", () => {
      charName.textContent = char.name;
      imgObj.src = char.imageUrl;
      imgObj.style.display = 'none';
      imgObj.style.display = '';
      likesCount.textContent = characterObj.likes;
      dislikesCount.textContent = characterObj.dislikes;
      movie.textContent = characterObj.films.join(', ');
      tv.textContent = characterObj.tvShows.join(', ');
      videoGame.textContent = characterObj.videoGames.join(', ');

      handleLikes(characterObj);
      handleDislikes(characterObj);
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
    renCharCard(newChar)
  });
}

toggleButton.addEventListener('click', () => {
    if (media.style.display !== 'none') {
        media.style.display = 'none'
    } else {
        media.style.display = ''
    }
})

function toggleMedia() {
  const filterButton = document.querySelector("#anime-or-live-action");
  filterButton.addEventListener("click", () => {
    if (filterButton.textContent === "Less Information") {
      filterButton.textContent = "More Information ";
    } else {
      filterButton.textContent = "Less Information";
    }
  });
}
handleLikes();
handleDislikes();
handleNewCharForm();
toggleMedia();
