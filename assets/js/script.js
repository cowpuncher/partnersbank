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

// --------- Fixed top menu 
let topPanel = document.querySelector('.topPanel');
let mainWrapper = document.querySelector('.mainWrapper');

const fixedMenu = () => {
    let height = topPanel.offsetHeight;
    if(pageYOffset > topPanel.offsetHeight) {
        topPanel.classList.add('active');
        mainWrapper.setAttribute('style', 'padding-top: ' + height+ 'px;' ); 
        topPanel.setAttribute('style', 'transform: translate(0px, 0px);' );  
    } else if(pageYOffset < topPanel.offsetHeight) {
        topPanel.classList.remove('active');
        topPanel.removeAttribute('style', 'transform: translate(0px, 0px);' );
        mainWrapper.removeAttribute('style', 'padding-top: ' + height + 'px;' ); 
    }
}
fixedMenu();
window.addEventListener('scroll', function() {
    fixedMenu();
});