history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop();
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

function parallax_height() {
    let scroll_top = $(this).scrollTop();
    let sample_section_top = $('.main-content').offset().top;
    let header_height = $('.header-section').outerHeight() - scroll_top;
    $('.main-content').css({ 'margin-top': header_height});
    // $('.title-header').css({ height: header_height - scroll_top + 24});
    $('.title-header').css({ height: window.innerHeight});
}
parallax_height()


//Back to Top Button
const toTop = document.getElementById('top');
window.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
        console.log("hello")
    }
    else {
        toTop.classList.remove('active');
    }
})


window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }


