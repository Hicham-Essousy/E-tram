import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider,fader} from '../../shared/route-animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations :[fader]
})
export class AdminComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  prepareRoute(outlet:RouterOutlet)
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public logOut()
  {
    localStorage.clear();
    this.router.navigateByUrl("/gestion");
  }


}
