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
function headerLocation() {
  let locationButton = document.querySelector('.js-header-location-button');
  let locationItemsWrapper = document.querySelector('.js-header-sity-list-wrapper');
  let sityButtons = document.querySelectorAll('.js-header-sity-choose');
  document.querySelector('.js-form-sity').value = locationButton.querySelector('span').innerHTML.trim();
  if (locationButton) {
    locationButton.addEventListener('click', () => {
      locationButton.classList.toggle('active');
      locationItemsWrapper.classList.toggle('active');
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
      });
    });
  }
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
      console.log(mobileSortButton.parentNode);
      mobileSortButton.parentNode.classList.toggle('active');
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
  document.querySelector('body').setAttribute('style', "overflow:hidden");
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
  document.querySelector('body').setAttribute('style', "overflow:hidden");
  if (element.dataset.kitchenname != undefined) {
    popup.querySelector('form').insertAdjacentHTML('afterbegin', `<input type="text" name="kitchenName" value="${element.dataset.kitchenname}" class="hiddenInput">`);
  } else {
    if (popup.querySelector('.hiddenInput')) {
      popup.querySelector('.hiddenInput').remove();
    }
  }
}
function closePopupWindow() {
  if (document.querySelector('.js-kitchen-preview').classList.contains('active')) {
    document.querySelector('.js-kitchen-preview').classList.remove('active');
  }
  if (document.querySelector('.js-popup-wrapper.active')) {
    document.querySelector('.js-popup-wrapper.active').classList.remove('active');
  }
  document.querySelector('body').removeAttribute('style');
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
  document.querySelector('body').setAttribute('style', "overflow:hidden");
  let parentNode = elementNode.closest('.kitchen');
  let kitchenName = parentNode.querySelector('.js-kitchen-name').innerHTML;
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
  document.querySelector('.js-kitchen-preview-type').textContent = kitchenType;
  document.querySelector('.js-kitchen-preview-size').textContent = kitchenSize;
  document.querySelector('.js-kitchen-preview-frame').textContent = kitchenFrame;
  document.querySelector('.js-kitchen-preview-fasades').textContent = kitchenFurniture;
  document.querySelector('.js-kitchen-preview-furniture').textContent = kitchenFasades;
  document.querySelector('.js-kitchen-preview-tabletop').textContent = kitchenTableTop;
  document.querySelector('.js-kitchen-preview-guaranty').textContent = kitchenGuaranty;
  document.querySelector('.js-kitchen-preview-installment-plan-per-month').textContent = kitchenInstallmentPlanPerMonth;
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
document.addEventListener('DOMContentLoaded', function () {
  let desinerCallBackButtons = document.querySelectorAll('.js-consult-call-back-popup');
  let sizeCalculationButtons = document.querySelectorAll('.js-size-calculation-popup');
  let closePopupButtons = document.querySelectorAll('.js-popup-close');
  let slideButtons = document.querySelectorAll('.js-kitechen-preview');
  slideButtons.forEach(button => {
    button.addEventListener('click', () => {
      slideButton(button);
    });
  });
  headerMenu();
  headerLocation();
  heroAccessoriesFirmSlider();
  kitchensSort();
  kitchenCatalogLiders();
  kitchensSortMobile();
  howToContact();
  reviewsSwiper();
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
        console.log(calculationButton);
        sizeCalculationPopUp(calculationButton);
      });
    });
  }
  if (closePopupButtons.length) {
    closePopupButtons.forEach(closeButton => {
      closeButton.addEventListener('click', closePopupWindow);
    });
  }
  document.addEventListener("keydown", e => {
    if (e.code == "Escape") {
      console.log('esc');
      closePopupWindow();
    }
  });
});