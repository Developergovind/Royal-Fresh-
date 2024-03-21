import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showSpinner: boolean = false
  constructor() {
    this.showSpinner = true
    this.hideSpiner()
  }
  hideSpiner = () =>{
    setTimeout(() => {
      this.showSpinner = false
    }, 1000);
  }
}
