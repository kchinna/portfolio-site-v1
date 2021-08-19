history.scrollRestoration = "manual";
console.log("working")

$(window).on('beforeunload', function(){
      $(window).scrollTop();
});

function parallax_height() {
    let scroll_top = $(this).scrollTop();
    let sample_section_top = $('.main-content').offset().top;
    // let header_height = $('.header-section').outerHeight() - scroll_top;
    $('.main-content').css({ 'margin-top': window.innerHeight + 10});
    // $('.title-header').css({ height: header_height - scroll_top + 24});
    $('.title-header').css({ height: window.innerHeight});
}
parallax_height()


//Back to Top Button
const toTop = document.getElementById('top');
window.addEventListener('scroll', function(event) {
    if (window.pageYOffset > 500) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }
})

function topFunction() {
    let isChrome = navigator.userAgent.indexOf('Chrome')
    if (isChrome <= -1) {
        console.log("home clicked")
        window.scrollTo(0,0);
        // $('body').scrollTop(0);
        // document.body.scrollTop = 0;
    }
    else {
        document.documentElement.scrollTop = 0;
    }
}


window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

$(document).ready(function(){
    let isChrome = navigator.userAgent.indexOf('Chrome')
    console.log(isChrome)
    if (isChrome <= -1) {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
    
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
        
                // Store hash
                var hash = this.hash;
        
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
            
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                });
            }
        });
    }
});

window.onload = function() {
    document.getElementById('contact').addEventListener('submit', function(event) {
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


