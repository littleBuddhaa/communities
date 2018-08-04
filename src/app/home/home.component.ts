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
  constructor() { }

  ngOnInit() {
  }

}
