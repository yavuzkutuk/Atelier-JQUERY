// Fonction Ajouter ligne
function ajouterEl(node){
    // J'initialise l'objet id="yavuz"
    $ol = $('#yavuz');
    //Je construis mon bouton et le sauvegarde dans une variable pour l'insérer
    var $li = $('<li></li>').append(node);
    // Ajout de mon bouton UP
    ajoutBTN($li, 'up', 'https://cdn2.iconfinder.com/data/icons/splashyIcons/arrow_large_up.png');
    ajoutBTN($li, 'down', 'https://cdn2.iconfinder.com/data/icons/splashyIcons/arrow_large_down.png');
    ajoutBTN($li, 'delete','https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/trash-delete-16x16.gif');
    // J'affiche ma ligne
    $ol.append($li);
}

// Fonction Ajout
function ajoutBTN(node, direction, image){
    // Je construis mon bouton et le sauvegarde dans la variable btn
    var $btn = $('<a><img src="' + image + '"></a>');
    // Je rajoute une classe CSS supplémentaire
    $btn.addClass(direction);
    //J'affiche mon bouton
    $(node).append($btn);
}



// Interaction avec le formulaire
$(document).ready(function(){

    //A l'écoute du bouton ADD
    $('form').submit(function(evt){
        evt.preventDefault();
        ajouterEl($('#inputText').val() + ' ');
        });

    $(document).on('click', '.up', function(){
        node = $(this).parent();
        $(node).insertBefore($(node).prev());
    });

    $(document).on('click', '.down', function(){
        node = $(this).parent();
        $(node).insertAfter($(node).next());
    });


    $(document).on('click', '.delete', function(){
        node = $(this).parent().remove();
    });

});