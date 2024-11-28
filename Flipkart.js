let slider_img = document.querySelectorAll('.slider-slides');

let counter = 0;
slider_img.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    counter++
    slider(); 
}
const goPrev = () => {
    counter--
    slider();
}
const slider = () => {
    slider_img.forEach((slides)=>{
        slides.style.transform = `translateX(-${counter * 100}%)`;
    })
}