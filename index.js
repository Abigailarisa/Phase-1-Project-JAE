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
    const voteLikes = document.querySelector('#like-button');
    const voteDislikes = document.querySelector('#dislike-button');
    const likesCount = document.querySelector('#like-count');
    const dislikesCount = document.querySelector('#dislike-count');
    const charCard = document.querySelector('#character-info');
    const imgObj = document.createElement('img');
    imgObj.id = "character-image"
    charCard.append(imgObj);
    
    function renderCharacters(character){
        const charBar = document.querySelector('#character-bar');
        const spanName = document.createElement('span');
        spanName.textContent = character.name;
        charBar.append(spanName);
        const characterObj = {
                name: character.name,
                image: character.imageUrl,
                likes: 0,
                dislikes: 0,
                films: character.films,
                tvShows: character.tvShows,
                videoGames: character.videoGames
            }
        //console.log(characterObj.name)
    
        spanName.addEventListener('click', () => {
            charName.textContent = characterObj.name;
            imgObj.src = characterObj.image;
            likesCount.textContent = characterObj.likes
            dislikesCount.textContent = characterObj.dislikes
    
        })
        
    }
    function handleLikes(){
        voteLikes.addEventListener('click', () => {
            likesCount.textContent = parseInt(likesCount.textContent) + 1;
        })
    }
    
    function handleDislikes(){
            voteDislikes.addEventListener('click', () => {
            dislikesCount.textContent = parseInt(dislikesCount.textContent) - 1;
        })
    }

    function handleNewCharForm(){
        const charForm = document.querySelector('#character-form')
        charForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = e.target['name'].value;
            const newImg = e.target['image-url'].value;
            let newChar = {
                name: newName,
                image: newImg,
                likes: 0,
                dislikes: 0
            }
            console.log(newName)
        renderCharacters(newChar)
        })
    }
    handleLikes();
    handleDislikes();
    handleNewCharForm();
