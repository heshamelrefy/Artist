import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
 

  views
  elm
  viewed(){
     document.createElement("div");
   document.getElementById("viewOne").appendChild(document.createElement("div"));
   document.createElement("div").style.cssText="position:absolute;height:3px;width:30%;left:15%;background-color:#09c;top:110%;"
   
   
   
  }
   openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].classList.replace("d-block","d-none");  
    }
    
    
    document.getElementById(cityName).classList.replace("d-none","d-block"); 
    
  }
  slides = [
    {img: "../assets/images/2.jpg"},
    {img: "../assets/images/3.jpg"},
    {img: "../assets/images/02.jpg"},
    {img: "../assets/images/04.jpg"},
    {img: "../assets/images/testimonial-2.jpg"},
    {img: "../assets/images/testimonial-4.jpg"},
    {img: "../assets/images/10.jpg"},
    {img: "../assets/images/05.png"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  // addSlide() {
  //   this.slides.push({img: "../assets/images/05.png"})
  // }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  
  constructor() {
  
    
   }

  ngOnInit(): void {
    
  }

}
