fetch('https://api.disneyapi.dev/characters')
.then(res => res.json())
.then(characters =>  {
    console.log(characters.data[10].name)
})
