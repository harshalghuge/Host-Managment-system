import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "rishikesh92003@gmail.com";
  userName = "rishikeshgadge";
  
  constructor() { }

  ngOnInit(): void {
  }

}
