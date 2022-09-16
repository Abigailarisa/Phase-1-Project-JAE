fetch("https://api.disneyapi.dev/characters?page=128")
  .then((res) => res.json())
  .then((char) => renChar(char));

fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then(char => {
    renderCharLocalApi(char)
  })

const charName = document.querySelector("#char-name");
const voteLikes = document.querySelector("#like-button");
const voteDislikes = document.querySelector("#dislike-button");
const likesCount = document.querySelector("#like-count");
const dislikesCount = document.querySelector("#dislike-count");
const charCard = document.querySelector("#character-info");
const toggleButton = document.querySelector("#toggle-button");
const media = document.querySelector('.media-title');
const movie = document.querySelector("#movie");
const tv = document.querySelector("#tv-shows");
const videoGame = document.querySelector("#video-games");
const imgObj = document.createElement("img");
imgObj.id = "character-image";
charCard.append(imgObj);

function renChar(chars) {
  const charSlice = chars.data.slice(10, 15);
  charSlice.forEach((char) => {
    renCharCard(char); 
  });   
}
function renderCharLocalApi(chars){
  chars.forEach((char) => {
    renCharCard(char); 
  });   
}
function renCharCard(char){ 
    const charBar = document.querySelector("#character-bar");
    const spanName = document.createElement("span");
    const spanImg = document.createElement("img");
    spanImg.id = "span-image";
    spanName.textContent = char.name;
    spanImg.src = char.imageUrl;
    charBar.append(spanName);
    spanName.append(spanImg);
    
    const characterObj = {
      id: char.id,
      image: char.imageUrl,
      likes: 0,
      dislikes: 0,
      films: char.films,
      tvShows: char.tvShows,
      videoGames: char.videoGames,
    };

    spanName.addEventListener("click", () => {
      charName.textContent = char.name;
      imgObj.src = characterObj.image;
      likesCount.textContent = characterObj.likes;
      dislikesCount.textContent = characterObj.dislikes;
      movie.textContent = characterObj.films.join(', ');
      tv.textContent = characterObj.tvShows.join(', ');
      videoGame.textContent = characterObj.videoGames.join(', ');

      // handleLikes(characterObj);
      // handleDislikes(characterObj);
    }); 
  }

function handleLikes() {
  voteLikes.addEventListener("click", () => {
    likesCount.textContent = parseInt(likesCount.textContent) + 1;
    // console.log(char)
    // fetch(`http://localhost:3000/characters/${char.id}`,{
    //   method: 'PATCH', 
    //   headers:{
    //     'Content-Type': 'application/json',
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify({
    //     likes: parseInt(likesCount.textContent)
    //   })
    // })
    // .then(res => res.json())
    // .then(likes => console.log(likes))
  });
}

function handleDislikes() {
  voteDislikes.addEventListener("click", () => {
    dislikesCount.textContent = parseInt(dislikesCount.textContent) - 1;

    // fetch(`http://localhost:3000/characters/${char.id}`,{
    //   method: 'PATCH', 
    //   headers:{
    //     'Content-Type': 'application/json',
    //     Accept: "application/json"
    //   },
    //   body: JSON.stringify({
    //     dislikes: parseInt(dislikesCount.textContent)
    //   })
    // })
    // .then(res => res.json())
    // .then(dislikes => console.log(dislikes))
  });
}

function handleNewCharForm() {
  const charForm = document.querySelector("#character-form");
  charForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = e.target["name"].value;
    const newImg = e.target["image-url"].value;
    const newFilm = e.target["character-movies"].value;
    const newShow = e.target["character-shows"].value;
    const newGame = e.target["character-game"].value;
    
    let newChar = {
      name: newName,
      imageUrl: newImg,
      likes: 0,
      dislikes: 0,
      films: [newFilm],
      tvShows: [newShow],
      videoGames: [newGame],
    };
    renCharCard(newChar)
    e.target.reset()

    fetch('http://localhost:3000/characters',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
         Accept: "application/json"
       },
      body: JSON.stringify(newChar)
      })
      .then(res => res.json())
  })
  }

function toggleMedia() {
  toggleButton.addEventListener("click", () => {
    if (toggleButton.textContent === "Less Information") {
      toggleButton.textContent = "More Information ";
    } else {
      toggleButton.textContent = "Less Information";
    }
  });

  toggleButton.addEventListener('click', () => {
    if (media.style.display !== 'none') {
        media.style.display = 'none'
    } else {
        media.style.display = ''
    }
})
}

handleDislikes();
handleLikes();
handleNewCharForm();
toggleMedia();
