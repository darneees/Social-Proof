// alert email

document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var emailValue = document.getElementById('email').value;

    setTimeout(function () {
        alert('Um email de confirmação será enviado em breve para ' + emailValue);
        document.getElementById('email').value = '';

    }, 2000);
});


// top button

let myButton = document.getElementById('scrollTop');
window.onscroll = function() { scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = 'flex';
    } else {
        myButton.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
