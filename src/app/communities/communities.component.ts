import { Component, OnInit } from '@angular/core';
import { COMM } from '../commun-data';
import { SIG } from '../commun-sig';
import { MAILG } from '../commun-mail';
@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class CommunitiesComponent implements OnInit {
   currentOrientation = 'horizontal';
   currentJustify = 'fill';
   public myInterval: number = 300;
    public activeSlideIndex: number = 0;
    public noWrapSlides:boolean = false;

    activeSlideChange(){
        console.log(this.activeSlideIndex);
    }

    
    details = COMM;
    details_sig = SIG;
    detail_mail = MAILG


  constructor() { }

  ngOnInit() {
  }

}
