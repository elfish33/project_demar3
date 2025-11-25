const mainSwiper = new Swiper ('#main_swiper', {
    loop: true,
    autoplay: {delay: 5000},
    pagination: {
        el: '.main_bnr_nav .swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.main_bnr_nav .swiper-button-prev',
        nextEl: '.main_bnr_nav .swiper-button-next',
    },
})

const newPrdSwiper = new Swiper ('#swiper_new_prd',{
    loop: false,
    autoplay: {delay: 3000},
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        prevEl: '#swiper_new_prd .swiper-button-prev',
        nextEl: '#swiper_new_prd .swiper-button-next',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
    },
})
const EssentialSwiper = new Swiper ('#essential_swiper',{
    loop: true,
    autoplay: {delay: 3000},
    slidesPerView: 1,
    spaceBetween: 5,
    scrollbar: {
        el: '#essential_swiper .swiper-scrollbar',
    },
    breakpoints: {
        768: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
})

const reviewSwiper = new Swiper('#review_swiper',{
    slidesPerView: 1,
    loop: true,
    /* autoplay: {delay:3000}, */
    centeredSlides: true,
    navigation: {
        prevEl: '#review_swiper .swiper-button-prev',
        nextEl: '#review_swiper .swiper-button-next',
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 4.5,
            spaceBetween: 10,
        },
    },
})