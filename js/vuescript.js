new Vue({
  el: '#main',
  data: {
      opinion: 'Ты попал в самую точку!',
      slide1 : true,
      slide2 : false,
      slide3 : false,
      slide4 : false,
      slide5 : false,
      slide6 : false,
      slide7 : false,
  },
  methods: {
    slider: function() {
      if (this.slide1 == true){
        this.slide1 = !this.slide1;
        setTimeout(() => this.slide2 = !this.slide2, 1050);
      }
      else if (this.slide2 == true) {
        this.slide2 = !this.slide2;
        setTimeout(() => this.slide3 = !this.slide3, 1050);
      }
      else if (this.slide3 == true) {
        this.slide3 = !this.slide3;
        setTimeout(() => this.slide4 = !this.slide4, 1050);
      }
      else if (this.slide4 == true) {
        this.slide4 = !this.slide4;
        setTimeout(() => this.slide5 = !this.slide5, 1050);
      }
      else if (this.slide5 == true) {
        this.slide5 = !this.slide5;
        setTimeout(() => this.slide6 = !this.slide6, 1050);
      }
    },
    exslider: function(){
      this.opinion = 'Жаль, но ты попался...';
      let fontstyle = document.getElementById("choice");
      fontstyle.style.color = 'red';
      this.slider();

    }
  }
})
