import { Component } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import {Router} from'@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // myimage:string="assets/images/library1.jfif";

  constructor(private router:Router){}
  // goToPage(signup:string):void{
  //        this.router.navigate([`${signup}`]);
  // }

  imgCollection:Array<object>=[
    {
    image: '/assets/images/img1.jfif',
    thumbImage: '/assets/images/img1.jfif'
  
    },
    {
      image: '/assets/images/img2.jfif',
      thumbImage: '/assets/images/img2.jfif'
      
      },
    {
      image: '/assets/images/img3.jfif',
      thumbImage: '/assets/images/img3.jfif'
        
      },
    {
      image: '/assets/images/img4.jfif',
      thumbImage: '/assets/images/img4.jfif'
        
        },
    {
      image: '/assets/images/img5.jfif',
      thumbImage: '/assets/images/img5.jfif'
      },
    {
      image: '/assets/images/img6.jfif',
      thumbImage: '/assets/images/img6.jfif'
      }
      
  ];


imgCollection1:Array<object>=[
  {
  image: '/assets/images/img7.jpg',
  thumbImage: '/assets/images/img7.jpg'

  },
  {
    image: '/assets/images/img8.jpg',
    thumbImage: '/assets/images/img8.jpg'
    
    },
  {
    image: '/assets/images/img9.jpg',
    thumbImage: '/assets/images/img9.jpg'
      
    },
  {
    image: '/assets/images/img10.jpg',
    thumbImage: '/assets/images/img10.jpg'
      
      },
  {
    image: '/assets/images/img11.jpg',
    thumbImage: '/assets/images/img11.jpg'
    },
  {
    image: '/assets/images/img6.jpg',
    thumbImage: '/assets/images/img12.jpg'
    }
    
];
}
