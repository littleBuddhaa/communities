import { Component, OnInit } from '@angular/core';
import word from '../caldata';
import { COMM } from '../commun-data';
let arr = [];
var _i=0;
while(word[_i]) {
    var num = word[_i];
    var today = new Date();
    if(new Date(num.start)>=today){
      arr.push({
      start:new Date(num.start),
      end:new Date(num.end),
      title:num.title,
      location:num.location,
      description:num.description
    });

    }
    _i++;
    
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  events = arr;
  details=COMM;
  currentOrientation = 'horizontal';
   currentJustify = 'fill';
   public myInterval: number = 300;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(){
        console.log(this.activeSlideIndex);
    }

    public slides:Array<Object> = [
        {"image":"../assets/img/AsianWiC.jpg"},
        {"image":"../assets/img/AfricanWiC-stolen.jpg"},
        {"image":"../assets/img/women3.jpg"},
    ];
     public slide_text:Array<Object> = [
        {"text":"Asian Women in Computing"},
        {"text":"African Women in Computing"},
        {"text":"Women in Computing"},
    ];
  constructor() { }

  ngOnInit() {
  }

}
