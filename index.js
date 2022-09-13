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

function renderCharacters(character){
    const charBar = document.querySelector('#character-bar');
    const spanName = document.createElement('span');
    spanName.textContent = character.name;
    //console.log(character)
    charBar.append(spanName);

    spanName.addEventListener('click', () => {
        charName.textContent = character.name;
    })
}