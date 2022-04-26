let faqItem = document.querySelectorAll('.faqItem');

if(faqItem) {
    for (let i = 0; i < faqItem.length; i++) {
        const elm = faqItem[i];
        elm.addEventListener('click', e => {
            let curTarget = e.currentTarget;            
            if (!curTarget.classList.contains('active')) {
                for (let i = 0; i < faqItem.length; i++) {
                    faqItem[i].classList.remove('active');
                }
                curTarget.classList.add('active');
            } else {
                curTarget.classList.remove('active');
            }
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


// ANCHOR --- Pop-ups
let popup = document.querySelectorAll('.popup');
let popupClose = document.querySelectorAll('.popupClose');
let popupOverlay = document.querySelectorAll('.popupOverlay');

if (popup) {
    const closePopup = (el, timer = 0) => {
        setTimeout(() => {
            for(elem of el) {
                elem.addEventListener('click', e => {
                    e.currentTarget.parentNode.classList.remove('active');
                })
            }
            
        }, timer);
    }
    closePopup(popupOverlay);
    closePopup(popupClose);
    
    const activePopup = (btn, modal) => {
        btnCollection =  document.querySelectorAll(btn);
        for(popupBtn of btnCollection) {
            popupBtn.addEventListener('click', e => {
                e.preventDefault();
                for(var i = 0; i < popup.length; i++) {
                    popup[i].id === modal ? popup[i].classList.add('active') : '';
                }
            })
        }
    }
    activePopup('.popupBtnOrder', 'popupOrder');
}