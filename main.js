$(function() {

    $.ajax({
        type: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/' + pokeSearchInput,
        success: function(res) {
            console.log(res);
            alert(res);
        }
    });
});