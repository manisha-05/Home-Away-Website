Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
    item.onClick =() => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
