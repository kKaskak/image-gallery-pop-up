const modal = document.querySelector('.modal')
const img = document.querySelectorAll('.gallery img');
const imgFull = document.querySelector('.full-img')

img.forEach((img) => {
    img.addEventListener('click', ()  => {
        // dynamic change
        const quality = img.getAttribute('alt');
        imgFull.src = `img/full/${quality}.jpg`

        // state
        setTimeout(() => {
            imgFull.classList.add('full-img-open');
            modal.classList.add('modal-open');
        }, 50);
    });
});
 
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        imgFull.classList.remove('full-img-open');
        modal.classList.remove('modal-open');
    }
});