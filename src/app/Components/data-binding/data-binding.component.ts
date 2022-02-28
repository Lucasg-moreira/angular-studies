import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  image:string = "https://picsum.photos/300/300"
  verdade:boolean = true;
  curtirCurso(){
    return true
  }
  url:string = "http://www.spotify.com";
  constructor() { }

  ngOnInit(): void {
  }

}
