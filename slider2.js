var showPrevBtm = document.getElementById("prev-img");
var showNextBtm = document.getElementById("next-img");
var sliderShowImg = document.getElementById("slider-img");

class Slider {
    constructor() {
        this.current = 0;

        this.onShowPrevBtnClic = () => {
            this.current = this.current + 250;
            if (this.current >= 250){
                this.current = -1000;
            }
            sliderShowImg.style.left = this.current + 'px';
        }
    
        this.onShowNextBtnClic = () => {
            this.current = this.current - 250;
            if (this.current < -1000){
                this.current=0;
            }
            sliderShowImg.style.left = this.current + 'px';
        }
    }  
}

const slider = new Slider();

showNextBtm.addEventListener('click', slider.onShowNextBtnClic);
showPrevBtm.addEventListener('click', slider.onShowPrevBtnClic);



