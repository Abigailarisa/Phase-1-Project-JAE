function pullCharacters(id){
fetch(`https://api.disneyapi.dev/characters/${id}`)
.then(res => res.json())
.then(characters =>  renderCharacters(characters))
}
pullCharacters('6160')
pullCharacters('6000')
pullCharacters('5080')
pullCharacters('7088')
pullCharacters('4408')
pullCharacters('2267')


const charName = document.querySelector('#char-name');
const voteLikes = document.querySelector('#like-count');
const voteDislikes = document.querySelector('#dislike-count');
const charCard = document.querySelector('#character-info');

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
        const imgObj = document.createElement('img');
        imgObj.src = characterObj.image;
        charCard.append(imgObj);
    })
}