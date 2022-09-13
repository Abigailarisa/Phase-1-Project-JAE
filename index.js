function pullCharacters(id){
fetch(`https://api.disneyapi.dev/characters/${id}`)
.then(res => res.json())
.then(characters =>  renderCharacters(characters))
}
pullCharacters('6160')


function renderCharacters(character){
    const charBar = document.querySelector('#character-bar');
    const spanName = document.createElement('span');
    spanName.textContent = character.name;
    //console.log(character)
    charBar.append(spanName);

}