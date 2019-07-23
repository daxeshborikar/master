import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoginPage: boolean = false;
  public location = '';

  constructor(private _router : Router) { 
    this.location = _router.url;
  }

  ngOnInit() {
  }

}
