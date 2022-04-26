let faqItem = document.querySelectorAll('.faqItem');

if(faqItem) {
    for (let i = 0; i < faqItem.length; i++) {
        const elm = faqItem[i];
        elm.addEventListener('click', e => {
            let curTarget = e.currentTarget;
            for (let i = 0; i < faqItem.length; i++) {
                faqItem[i].classList.remove('active');
            }
            curTarget.classList.add('active');
        })
    }
}

const reviewSlider = new Swiper('.reviewSlider', {
    slidesPerView: 2.3,
    spaceBetween: 30,
});