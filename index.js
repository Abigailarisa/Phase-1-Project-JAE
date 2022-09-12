fetch('https://api.disneyapi.dev/characters')
.then(res => res.json())
.then(characters => characters.forEach(renderCharacters))

function renderCharacters(character){
    const charBar = document.querySelector('.character-bar');
    const spanName = document.createElement('span');
    spanName.textContent = character.data[11].name;
    charBar.append(spanName);
}