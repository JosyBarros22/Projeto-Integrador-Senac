// const menu = document.getElementById('act');
// const sizePixels = 50;


(function () {
    let menu = document.getElementById('menu'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            menu.classList.add('menuFixo')
        }   else {
         menu.classList.remove('menuFixo')
}
})
})();


