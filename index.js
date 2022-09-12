fetch('https://api.disneyapi.dev/characters')
.then(res => res.json())
.then(characters =>  {
    debugger
    console.log(characters.name)
})
