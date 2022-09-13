function pullCharacters(id){
fetch(`https://api.disneyapi.dev/characters/${id}`)
.then(res => res.json())
.then(characters =>  renderCharacters(characters))
}
pullCharacters('6160')
pullCharacters('6448')
pullCharacters('4244')
pullCharacters('1870')
pullCharacters('4400')
pullCharacters('4282')
pullCharacters('4278')


const charName = document.querySelector('#char-name');
const voteLikes = document.querySelector('#like-count');
const voteDislikes = document.querySelector('#dislike-count');
const charCard = document.querySelector('#character-info');
const imgObj = document.createElement('img');
imgObj.id = "character-image"
charCard.append(imgObj);

function renderCharacters(character){
    const charBar = document.querySelector('#character-bar');
    const spanName = document.createElement('span');
    spanName.textContent = character.name;
    charBar.append(spanName);
    
    //console.log(characterObj.name)

    spanName.addEventListener('click', () => {
        charName.textContent = character.name;
        const characterObj = {
            name: character.name,
            image: character.imageUrl,
            likes: 0,
            dislikes: 0,
            films: character.films,
            tvShows: character.tvShows,
            videoGames: character.videoGames
        }

        imgObj.src = characterObj.image;

    })
}