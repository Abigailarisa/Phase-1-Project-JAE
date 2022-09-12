fetch('https://api.disneyapi.dev/characters')
.then(res => res.json())
.then(characters => characters.data.forEach(character => renderCharacters(character)))
//.catch(e => console.error)

function renderCharacters(character){
    const charBar = document.querySelector('#character-bar');
    const spanName = document.createElement('span');
    spanName.textContent = character.name;
    //console.log(character)
    charBar.append(spanName);
}