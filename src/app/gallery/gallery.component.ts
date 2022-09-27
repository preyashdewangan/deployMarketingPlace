import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  

  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
  }
  set() 
  {
    this.commonService.cartValue+=1;
  }

}
