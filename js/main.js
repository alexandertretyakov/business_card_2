window.addEventListener('load', function() {
    document.querySelector('.module--faq').addEventListener('click', function (event) {
        if (event.target.tagName === 'DT') {
            event.target.classList.toggle('active');
        }
    });
});