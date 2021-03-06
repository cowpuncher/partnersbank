// --------- FAQ tabs
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

// Ширина прокрутки страницы и ширины экрана
const sizeWindow = (screen) => {
    let scrollBar = window.innerWidth - screen;
    return screen + scrollBar;
}

// --------- Sliders
if(sizeWindow(document.body.clientWidth) > 767) { 
    const reviewSlider = new Swiper('.reviewSlider', {
        slidesPerView: 2.3,
        spaceBetween: 30,
    });
}
const partnersSlider = new Swiper('.partnersSlider', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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
    
    // const activePopup = (btn, modal) => {
    //     btnCollection =  document.querySelectorAll(btn);
    //     for(popupBtn of btnCollection) {
    //         popupBtn.addEventListener('click', e => {
    //             e.preventDefault();
    //             for(var i = 0; i < popup.length; i++) {
    //                 popup[i].id === modal ? popup[i].classList.add('active') : '';
    //             }
    //         })
    //     }
    // }
    
    const activePopup = (btn, modal) => {
        btnCollection =  document.querySelectorAll(btn);
        for(popupBtn of btnCollection) {
            popupBtn.addEventListener('click', e => {                
                e.preventDefault();
                for(var i = 0; i < popup.length; i++) {
                    popup[i].id === modal ? popup[i].classList.add('active') : ''; 
                }
                if (e.target.nextElementSibling) {
                    if (e.target.nextElementSibling.classList.contains('popup')) {
                        e.target.nextElementSibling.classList.add('active');
                    }
                }
            })
        }
    }
    activePopup('.popupBtnOrder', 'popupOrder');    
    activePopup('.tariffCard .btn', 'popupTariff');
    activePopup('.btnPopup', 'popupOrder');
}

// --------- Select

/* Look for any elements with the class "custom-select": */
const customSelect = (select, count) => {
    x = document.getElementsByClassName(select);
    /*ДОбавиление флагов*/
    flag = document.querySelectorAll('.flag');
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("div");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        a.setAttribute("value", selElmnt.options[selElmnt.selectedIndex].value);
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("div");
        b.setAttribute("class", "select-items select-hide");
        for (j = count; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("div");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");                        
                        /*Если флаги есть, то перебираем и подставляем их*/
                        if (flag) {
                            if (this.parentElement.parentElement.classList.contains('selectGeo')) {
                                for(var i = 0; i < flag.length; i++) {
                                    flag[i].classList.remove('active' );   
                                }                                 
                                flag[s.selectedIndex].classList.add('active' );
                            } 
                        }
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

}

customSelect("selectGeo", 0);
customSelect("fullSelect", 1);

// ANCHOR (Burger) 
let burger =document.querySelector('.burger'),
    menu = document.querySelector('.mobileNav');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// ANCHOR (Share button) 
let shareInput = document.querySelectorAll('.shareRef input');
let shareBtn = document.querySelectorAll('.shareRef button');

for (let i = 0; i < shareInput.length; i++) {
    const element = shareInput[i];
    shareBtn[i].addEventListener('click', e => {
        element.select();
        document.execCommand("copy");      
        element.classList.add('add');
    })
}

/* ANCHOR (Tabs) */

let tabsWrap = document.querySelector('.tabsContainer .tabs');
let tabs = document.querySelectorAll('.tabsContainer .tab');
let activeTab = document.querySelector('.tabsContainer .activeElement');
let contentTab = document.querySelectorAll('.tabsContainer .content');

if (tabs) {
    window.onload = () => {
        for(var i = 0; i < tabs.length; i++) {
           if (tabs[i].classList.contains('active')) {
                activeTab.setAttribute('style', 'height: ' + tabs[i].offsetHeight + 'px; width: ' + tabs[i].clientWidth + 'px; transform: translate( ' + tabs[i].offsetLeft+'px, 0)');
           }
           tabs[i].addEventListener('click', e => {
                let elm = e.target;
                for(var i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                 }
                elm.classList.add('active');
                activeTab.setAttribute('style', 'height: '+elm.offsetHeight+'px; width: '+elm.clientWidth+'px; transform: translate( '+elm.offsetLeft+'px, 0)');
                for(var i = 0; i < tabs.length; i++) {
                    contentTab[i].classList.remove('active');
                    if(tabs[i].classList.contains('active')) {
                        contentTab[i].classList.add('active');
                    }
                }
           });
        }
    };
};

