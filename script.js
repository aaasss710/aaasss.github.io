document.querySelectorAll('h2').forEach(item => {
    item.addEventListener('click', function () {
        const nextElement = this.nextElementSibling;
        if (nextElement.style.display === 'none') {
            nextElement.style.display = 'block';
        } else {
            nextElement.style.display = 'none';
        }
    });
});
