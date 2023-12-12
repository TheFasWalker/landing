function headerMenu() {
  let menuButton = document.querySelector('.js-header-mobile-menu');
  let headerNavMenu = document.querySelector('.js-header-navigation-menu');
  if (menuButton) {
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      headerNavMenu.classList.toggle('active');
    });
  }
}
function addSityToForms() {
  let sityButton = document.querySelector('.js-header-location-button_dextop');
  let sityName = sityButton.querySelector('span').innerHTML.trim();
  let formSityInputs = document.querySelectorAll('.js-form-sity');
  formSityInputs.forEach(input => {
    input.value = sityName;
  });
}
function headerLocation() {
  let locationButton = document.querySelector('.js-header-location-button_dextop');
  let locationItemsWrapper = document.querySelector('.js-header-sity-list-wrapper_dextop');
  let locationItemsWrapperHeight = locationItemsWrapper.querySelector('.header__sity').offsetHeight;
  let sityButtons = document.querySelectorAll('.js-header-sity-choose_dextop');
  let locationButtonMobile = document.querySelector('.js-header-location-button_mobile');
  let locationItemsWrapperMobile = document.querySelector('.js-header-sity-list-wrapper_mobile');
  let locationItemsWrapperHeightMobile = locationItemsWrapper.querySelector('.header__sity').offsetHeight;
  let sityButtonsMobile = document.querySelectorAll('.js-header-sity-choose_mobile');
  if (locationButton) {
    locationButton.addEventListener('click', () => {
      if (locationButton.classList.contains('active')) {
        locationButton.classList.remove('active');
        locationItemsWrapper.classList.remove('active');
        locationItemsWrapper.setAttribute('style', `max-height:0`);
      } else {
        locationItemsWrapper.setAttribute('style', `max-height:${locationItemsWrapperHeight}px`);
        locationButton.classList.add('active');
        locationItemsWrapper.classList.add('active');
      }
    });
  }
  if (sityButtons) {
    sityButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.header__sity-button_active').classList.remove('header__sity-button_active');
        locationButton.querySelector('span').innerHTML = button.textContent.trim();
        locationItemsWrapper.classList.remove('active');
        locationButton.classList.remove('active');
        button.classList.add('header__sity-button_active');
        addSityToForms();
      });
    });
  }
  if (locationButtonMobile) {
    locationButtonMobile.addEventListener('click', () => {
      if (locationButtonMobile.classList.contains('active')) {
        locationButtonMobile.classList.remove('active');
        locationItemsWrapperMobile.classList.remove('active');
        locationItemsWrapperMobile.setAttribute('style', `max-height:0`);
      } else {
        locationItemsWrapperMobile.setAttribute('style', `max-height:${locationItemsWrapperHeight}px`);
        locationButtonMobile.classList.add('active');
        locationItemsWrapperMobile.classList.add('active');
      }
    });
  }
  if (sityButtonsMobile) {
    sityButtonsMobile.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.header__sity-button_active').classList.remove('header__sity-button_active');
        locationButtonMobile.querySelector('span').innerHTML = button.textContent.trim();
        locationItemsWrapperMobile.classList.remove('active');
        locationButtonMobile.classList.remove('active');
        button.classList.add('header__sity-button_active');
        addSityToForms();
      });
    });
  }
  addSityToForms();
}
function heroAccessoriesFirmSlider() {
  let heroSlider = document.querySelector('.js-hero-slider');
  if (heroSlider) {
    const heroSlider = new Swiper('.js-hero-slider', {
      loop: true,
      autoplay: {
        delay: 2500
      },
      allowTouchMove: false
    });
  }
}
function kitchenCatalogLiders() {
  let kitchenSliders = document.querySelectorAll('.js-kitchen-slider');
  if (kitchenSliders) {
    kitchenSliders.forEach((slider, index) => {
      slider.classList.add(`js-kitchen-slider-number-${index}`);
      slider.nextElementSibling.querySelector('.js-kitchen-nav-button-prev').classList.add(`js-kitchen-nav-button-prev-${index}`);
      slider.nextElementSibling.querySelector('.js-kitchen-nav-button-next').classList.add(`js-kitchen-nav-button-next-${index}`);
      new Swiper(`.js-kitchen-slider-number-${index}`, {
        navigation: {
          nextEl: `.js-kitchen-nav-button-next-${index}`,
          prevEl: `.js-kitchen-nav-button-prev-${index}`
        },
        loop: true
      });
    });
  }
}
function changeKitchensVisibility() {
  let sortType = document.querySelector('.js-kitchens-sort.active').dataset.type;
  let moduleKitchens = document.querySelectorAll('.js-module-kitchen');
  let orderKitchens = document.querySelectorAll('.js-headset-to-order');
  if (sortType == 'module') {
    orderKitchens.forEach(orderKitchen => {
      orderKitchen.classList.add('hidden');
    });
    moduleKitchens.forEach(moduleKitchen => {
      if (moduleKitchen.classList.contains('hidden')) {
        moduleKitchen.classList.remove('hidden');
      }
    });
  } else if (sortType == 'preOrder') {
    orderKitchens.forEach(orderKitchen => {
      if (orderKitchen.classList.contains('hidden')) {
        orderKitchen.classList.remove('hidden');
      }
    });
    moduleKitchens.forEach(moduleKitchen => {
      moduleKitchen.classList.add('hidden');
    });
  } else {
    orderKitchens.forEach(orderKitchen => {
      if (orderKitchen.classList.contains('hidden')) {
        orderKitchen.classList.remove('hidden');
      }
    });
    moduleKitchens.forEach(moduleKitchen => {
      if (moduleKitchen.classList.contains('hidden')) {
        moduleKitchen.classList.remove('hidden');
      }
    });
  }
}
function kitchensSort() {
  let sortButtons = document.querySelectorAll('.js-kitchens-sort');
  if (sortButtons) {
    sortButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.js-kitchens-sort.active').classList.remove('active');
        button.classList.add('active');
        document.querySelector('.js-sort-mobile-button[data-type="' + button.dataset.type + '"]').click();
        changeKitchensVisibility();
      });
    });
  }
}
function kitchensSortMobile() {
  let mobileSortButton = document.querySelector('.js-kitchens-sort-mobile-menu');
  let mobileTypeSort = document.querySelectorAll('.js-sort-mobile-button');
  if (mobileSortButton) {
    mobileSortButton.addEventListener('click', () => {
      mobileSortButton.parentNode.classList.toggle('active');
      changeKitchensVisibility();
    });
  }
  if (mobileTypeSort) {
    mobileTypeSort.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.js-sort-mobile-button.active').classList.remove('active');
        button.classList.add('active');
        mobileSortButton.querySelector('span').innerHTML = button.innerHTML;
        if (mobileSortButton.parentNode.classList.contains('active')) {
          mobileSortButton.parentNode.classList.remove('active');
        }
        // console.log(button.dataset.type)
        document.querySelector('.js-kitchens-sort[data-type="' + button.dataset.type + '"]').click();
        changeKitchensVisibility();
      });
    });
  }
}
function howToContact() {
  let howToContactButtons = document.querySelectorAll('.js-quize-how-to-contact');
  howToContactButtons.forEach(contactButton => {
    contactButton.addEventListener('click', () => {
      if (contactButton.classList.contains('active')) {
        contactButton.nextElementSibling.value = 'WhatsApp';
      } else {
        contactButton.nextElementSibling.value = 'tel';
      }
      contactButton.classList.toggle('active');
    });
  });
}
function reviewsSwiper() {
  if (document.querySelector('.js-reviews-swiper')) {
    const reviewSwiper = new Swiper('.js-reviews-swiper', {
      navigation: {
        nextEl: '.js-reviews-button-next',
        prevEl: '.js-reviews-button-prev'
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        1400: {
          spaceBetween: 20
        },
        900: {
          slidesPerView: 2.3
        },
        760: {
          slidesPerView: 2.1,
          spaceBetween: 20
        },
        0: {
          slidesPerView: 1
        }
      }
    });
  }
}
function callDesinerPopup(element) {
  let popup = document.querySelector('.js-consult-popup');
  popup.classList.add('active');
  blockBodyScroll();
  missckick(element);
  if (element.dataset.kitchenname != undefined) {
    popup.querySelector('form').insertAdjacentHTML('afterbegin', `<input type="text" name="kitchenName" value="${element.dataset.kitchenname}" class="hiddenInput">`);
  } else {
    if (popup.querySelector('.hiddenInput')) {
      popup.querySelector('.hiddenInput').remove();
    }
  }
}
function sizeCalculationPopUp(element) {
  let popup = document.querySelector('.js-calculation-popup');
  popup.classList.add('active');
  blockBodyScroll();
  missckick();
  if (element.dataset.kitchenname != undefined) {
    popup.querySelector('form').insertAdjacentHTML('afterbegin', `<input type="text" name="kitchenName" value="${element.dataset.kitchenname}" class="hiddenInput">`);
  } else {
    if (popup.querySelector('.hiddenInput')) {
      popup.querySelector('.hiddenInput').remove();
    }
  }
}
function closePopupWindow() {
  let kitchenPreview = document.querySelector('.js-kitchen-preview');
  let formPopup = document.querySelector('.js-popup-wrapper.active');
  let videoPopup = document.querySelector('.js-popup-wrapper-single-video');
  if (kitchenPreview.classList.contains('active') && formPopup) {
    formPopup.classList.remove('active');
    return;
  }
  if (kitchenPreview.classList.contains('active')) {
    kitchenPreview.classList.remove('active');
  }
  if (formPopup) {
    formPopup.classList.remove('active');
  }
  if (videoPopup.classList.contains('active')) {
    document.querySelector('.js-popup-wrapper-single-video.active').querySelector('video').src = '';
    document.querySelector('.js-popup-wrapper-single-video.active').classList.remove('active');
  }
  removeBodyScroll();
}
function slideButton(elementNode) {
  function closePopup() {
    document.querySelector('.js-close-kitchen-info-popup').addEventListener('click', () => {
      kitchenPreviewSlider.destroy();
      let slider = document.querySelector('.js-kitchen-info-slider-wrapper');
      slider.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.remove();
      });
    });
  }
  document.querySelector('.js-kitchen-preview').classList.add('active');
  // document.querySelector('body').setAttribute('style', "overflow:hidden")
  blockBodyScroll();
  let parentNode = elementNode.closest('.kitchen');
  let kitchenName = parentNode.querySelector('.js-kitchen-name').innerHTML;
  let kitchenCost = parentNode.querySelector('.js-kitchen-cost').innerHTML;
  let kitchenType = parentNode.querySelector('.js-kitchen-type').innerHTML;
  let kitchenSize = parentNode.querySelector('.js-kitchen-size').innerHTML;
  let kitchenGuaranty = parentNode.querySelector('.js-kitchen-guaranty').innerHTML;
  let kitchenInstallmentPlan = parentNode.querySelector('.js-kitchen-kitchen-installment-plan').innerHTML;
  let kitchenInstallmentPlanPerMonth = parentNode.querySelector('.js-kitchen-kitchen-installment-plan-per-month').innerHTML;
  let kitchenFurniture = parentNode.dataset.furniture;
  let kitchenTableTop = parentNode.dataset.tabletop;
  let kitchenFasades = parentNode.dataset.fasades;
  let kitchenFrame = parentNode.dataset.frame;
  let kitchenPhotosUrls = [];
  let kitchenPhotos = parentNode.querySelectorAll('img');
  let kitchenSliderWrapper = document.querySelector('.js-kitchen-info-slider-wrapper');
  kitchenPhotos.forEach(photo => {
    kitchenSliderWrapper.insertAdjacentHTML('afterbegin', `<div class="swiper-slide ">
        <img src="${photo.getAttribute('src')}" alt="">
    </div>`);
    // kitchenPhotosUrls.push(photo.getAttribute('src'))
  });

  const kitchenPreviewSlider = new Swiper('.js-kitchen-info-slider', {
    loop: true,
    navigation: {
      nextEl: '.js-kitchen-info-button-next',
      prevEl: '.js-kitchen-info-button-prev'
    }
  });
  document.querySelector('.js-kitchen-preview-name').textContent = kitchenName;
  document.querySelector('.js-kitchen-preview-cost').textContent = kitchenCost;
  document.querySelector('.js-kitchen-preview-type').textContent = kitchenType;
  document.querySelector('.js-kitchen-preview-size').textContent = kitchenSize;
  document.querySelector('.js-kitchen-preview-frame').textContent = kitchenFrame;
  document.querySelector('.js-kitchen-preview-fasades').textContent = kitchenFurniture;
  document.querySelector('.js-kitchen-preview-furniture').textContent = kitchenFasades;
  document.querySelector('.js-kitchen-preview-tabletop').textContent = kitchenTableTop;
  document.querySelector('.js-kitchen-preview-guaranty').textContent = kitchenGuaranty;
  if (kitchenInstallmentPlanPerMonth === "от 0 Р/мес.") {
    document.querySelector('.js-kitchen-preview-installment-plan-per-month').parentElement.style.display = "none";
  } else {
    document.querySelector('.js-kitchen-preview-installment-plan-per-month').parentElement.style.display = "flex";
    document.querySelector('.js-kitchen-preview-installment-plan-per-month').textContent = kitchenInstallmentPlanPerMonth;
  }
  document.querySelector('.js-kitchen-kitchen-installment-plan').textContent = kitchenInstallmentPlan;
  document.querySelectorAll('.js-kitchen-preview-buttons').forEach(button => {
    button.dataset.kitchenname = `${kitchenName}`;
  });
  closePopup();
  document.addEventListener("keydown", e => {
    if (e.code == "Escape") {
      closePopup();
    }
  });
}
function validateQuizeItem() {
  let quizeLabels = document.querySelectorAll('.quize-form__inputs label');
  quizeLabels.forEach(label => {
    label.onchange = () => {
      label.closest('.quize-form__wrapper').querySelector('.js-quize-next').removeAttribute('disabled');
    };
  });
}
function quizeSlider(quiseNode) {
  let quizeNextButtons = quiseNode.querySelectorAll('.js-quize-next');
  quizeNextButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.quize-form__wrapper').classList.add('quize-form__wrapper_passed');
      button.closest('.quize-form__wrapper').nextElementSibling.classList.add('quize-form__wrapper_active');
    });
  });
}
function videoSlider() {
  if (document.querySelector('.js-video-slider')) {
    new Swiper('.js-video-slider', {
      breakpoints: {
        800: {
          slidesPerView: 3.2,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2.2,
          spaceBetween: 15
        },
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10
        }
      },
      navigation: {
        nextEl: '.js-videos-button_next',
        prevEl: '.js-videos-button_prev'
      }
    });
  }
}
function openSingleVideoInPopUp() {
  let singleVideoButtons = document.querySelectorAll('.js-single-video');
  let singleVideoPopup = document.querySelector('.js-popup-wrapper-single-video');
  if (singleVideoButtons.length) {
    singleVideoButtons.forEach(singleVideoButton => {
      singleVideoButton.addEventListener('click', function () {
        let videoUrl = singleVideoButton.dataset.url;
        singleVideoPopup.querySelector('video').src = videoUrl;
        singleVideoPopup.classList.add('active');
        blockBodyScroll();
        missckick();
      });
    });
  }
}
function popUpVideoSlider() {
  let videoPopUpButtons = document.querySelectorAll('.js-video-button');
  let videoSliderPopup = document.querySelector('.js-popup-wrapper-slider-video');
  videoPopUpButtons.forEach(videoButton => {
    videoButton.addEventListener('click', function () {
      videoSliderPopup.classList.add('active');
      // document.querySelector('body').setAttribute('style', "overflow:hidden")
      blockBodyScroll(scrollWidth);
      videoPopUpButtons.forEach(videoPopUpButton => {
        videoSliderPopup.querySelector('.swiper-wrapper').insertAdjacentHTML('afterbegin', ` <div class="swiper-slide"> <video controls="controls" src="${videoPopUpButton.dataset.url}"></video></div>`);
        // console.log(videoPopUpButton.dataset.url)
      });
    });
  });

  new Swiper('.js-popup-video-slider', {
    navigator: {
      nextEl: '.js-popup-swiper-next',
      ptevEl: '.js-popup-swiper-prev'
    },
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 10
  });
}
function blockBodyScroll() {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  document.querySelector('body').setAttribute('style', `overflow:hidden; padding-right:${scrollWidth}px`);
  document.querySelector('.header').setAttribute('style', `padding-right:${scrollWidth}px`);
  document.querySelector('.js-close-kitchen-info-popup.js-popup-close').setAttribute('style', `right:${scrollWidth}px`);
}
function removeBodyScroll() {
  console.log('remove');
  document.querySelector('body').removeAttribute('style');
  document.querySelector('.header').removeAttribute('style');
}
function missckick() {
  const div = document.querySelector('.popup__wrapper.active .popup__container');
  div && document.querySelector('.popup__wrapper.active').addEventListener('click', e => {
    if (!e.composedPath().includes(div)) {
      closePopupWindow();
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  let desinerCallBackButtons = document.querySelectorAll('.js-consult-call-back-popup');
  let sizeCalculationButtons = document.querySelectorAll('.js-size-calculation-popup');
  let closePopupButtons = document.querySelectorAll('.js-popup-close');
  let slideButtons = document.querySelectorAll('.js-kitechen-preview');
  let quzeForms = document.querySelectorAll('.js-quize-form');
  document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  slideButtons.forEach(button => {
    button.addEventListener('click', () => {
      slideButton(button);
    });
  });
  // popUpVideoSlider()
  openSingleVideoInPopUp();
  videoSlider();
  headerMenu();
  headerLocation();
  heroAccessoriesFirmSlider();
  kitchensSort();
  kitchenCatalogLiders();
  kitchensSortMobile();
  howToContact();
  reviewsSwiper();
  validateQuizeItem();
  if (desinerCallBackButtons.length) {
    desinerCallBackButtons.forEach(desinerButton => {
      desinerButton.addEventListener('click', () => {
        callDesinerPopup(desinerButton);
      });
    });
  }
  if (sizeCalculationButtons.length) {
    sizeCalculationButtons.forEach(calculationButton => {
      calculationButton.addEventListener('click', () => {
        // console.log(calculationButton)
        sizeCalculationPopUp(calculationButton);
      });
    });
  }
  if (closePopupButtons.length) {
    closePopupButtons.forEach(closeButton => {
      closeButton.addEventListener('click', closePopupWindow);
    });
  }
  if (quzeForms) {
    quzeForms.forEach(quzeForm => {
      quizeSlider(quzeForm);
    });
  }
  document.addEventListener("keydown", e => {
    if (e.code == "Escape") {
      // console.log('esc')
      closePopupWindow();
    }
  });
});