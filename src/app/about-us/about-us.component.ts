import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchName:string = ''

  products =[
    {
      srno : 1,
      name : 'Mobile(Apple iPhone-Starlight 128 GB)',
      price : 72999,
      availability : 'Available'
    },
    {
      srno : 2,
      name : 'Mobile(OnePlus 10R 5G )',
      price : 38999,
      availability : 'Available'
    },
    {
      srno : 3,
      name : 'Television(Samsung 65 inch)',
      price : 174990,
      availability : 'Not Available'
    },
    {
      srno : 4,
      name : 'Washing Machine(Whirlpool 7.5 kg)',
      price : 21740,
      availability : 'Available'
    },
    {
      srno : 5,
      name : 'Laptop(Lenovo i5)',
      price : 84990,
      availability : 'Available'
    },
    {
      srno : 6,
      name : 'Mobile(Apple iPhone-Starlight 128 GB)',
      price : 72999,
      availability : 'Not Available'
    },
    {
      srno : 7,
      name : 'Air Conditioners(Hitachi 1 ton)',
      price : 29990,
      availability : 'Available'
    },
    {
      srno : 8,
      name : 'Laptop(HP)',
      price : 29990,
      availability : 'Not Available'
    },
    {
      srno : 9,
      name : 'Laptop(ASUS)',
      price : 32990,
      availability : 'Available'
    },
    {
      srno : 10,
      name : 'Air Conditioners(Carrier 1.2 Ton 5 star )',
      price : 33499 ,
      availability : 'Not Available'
    },

  ]
}
