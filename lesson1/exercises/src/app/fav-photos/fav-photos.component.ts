import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Gallery';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b';
  image3 = 'https://www.hakaimagazine.com/wp-content/uploads/header-gulf-birds.jpg';

  constructor() { }

  ngOnInit() {
  }

}