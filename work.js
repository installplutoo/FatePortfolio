const buttonElements = document.querySelectorAll('.buttons');


buttonElements.forEach(function (button) {
    button.addEventListener('click', function (event) {
      
        const clickbutton = event.target.closest('[data-link]');
        console.log(clickbutton)
        if (clickbutton) {
           const link = clickbutton.getAttribute('data-link');

            window.open(link, '_blank');
        }
    });
});