

function updateCollectDemandButtonsHTML(buttons) {

    var html = '';
    if (buttons.length > 0) {
        html += '<div class="floating-buttons__container">';
        html += '<div class="floating-buttons__links-box closed">';
        html += '<div class="floating-buttons__links-container">';
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            html += '<a class="floating-buttons__links-item" href="' + button.link + '">';
            html += '<p class="cta-' + i + ' sd_widget_text">' + button.text + '</p>';
            html += '<img id="cta-' + i + '"  src="' + button.icon + '">';
            html += '</a>';
        }
        html += '</div>';
        html += '</div>';
        html += '<div class="floating-buttons__plus-container">';
        html += '<div class="floating-buttons__plus-btn-item">';
        html += '<a class="floating-buttons__movil-plus" >';
        html += '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        html += '</div>';

    $('.floating-buttons__section').html(html);
    checkChatView();
    //Funcionalidad expandir/contraer
    loadButtonsAnimations();
    }

}

function checkChatView() {
    if ($('#ventanaChatLOPD').css('display') === 'block') {
        document.querySelector('.floating-buttons__section').style.bottom = "4rem";
    } else {
        document.querySelector('.floating-buttons__section').style.bottom = "3rem";
    }
}

function loadButtonsAnimations() {
    var plus_icon_box = document.querySelector('.floating-buttons__movil-plus');
    var box_links = document.querySelector('.floating-buttons__links-box');
    var box_section = document.querySelector('.floating-buttons__container');
    var box_links_container = document.querySelector('.floating-buttons__links-container');

    // *********** BEGIN FLOATING BUTTONS FUNCIONALITY *******************

    box_section.style.visibility = "visible";
    box_links_container.style.display = "flex";

    plus_icon_box.addEventListener("click", function() {
        plus_icon_box.classList.toggle("btn-active");
        plus_icon_box.classList.toggle("rotate-plus");
        box_links.classList.toggle("plus-button__movil-interaction");

    });

    plus_icon_box.classList.toggle("btn-active");
    plus_icon_box.classList.toggle("rotate-plus");

    /* Timer de mostrar elemento */
    setTimeout(expandCollectDemandButtons, 2000);
    setTimeout(contractCollectDemandButtons, 7000);
}

function expandCollectDemandButtons() {



    $('.floating-buttons__links-item').each(function(index) {
        $(this).addClass("hovered");


    });

    $('.floating-buttons__links-item p').each(function(index) {
        $(this).addClass("hovered");
    });

    $('floating-buttons__links-item img').each(function(index) {
        $(this).addClass("hovered");

    });



};

function contractCollectDemandButtons() {



    if (!window.matchMedia('(max-width: 768px)').matches) {
        /* La largeur minimum de l'affichage est 600 px inclus */
        $('.floating-buttons__links-item').each(function(index) {
            $(this).removeClass("hovered");

        });

        $('.floating-buttons__links-item p').each(function(index) {
            $(this).removeClass("hovered");
        });

        $('floating-buttons__links-item img').each(function(index) {
            $(this).removeClass("hovered");

        });
    }

};