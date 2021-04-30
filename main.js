fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => {
        dataObj = data;
        console.log(dataObj)
    });