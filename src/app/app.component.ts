import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lightsOn = true;
  currentRoute : string = "";

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        this.currentRoute = e.url;
      }
    })

    //default lightsOn true
    // if(this.lightsOn && window.matchMedia('(prefers-color-scheme: dark)').matches){
    //   this.switchLight();
    // }
  }

  switchLight(){
    this.lightsOn = !this.lightsOn;

    if(this.lightsOn){
      document.getElementsByTagName("html")[0].className =
        document.getElementsByTagName("html")[0].className.replace("dark", "");
    } else {
      document.getElementsByTagName("html")[0].className =
        document.getElementsByTagName("html")[0].className + " dark";
    }
  }

  onClickMiniLogo(){
    this.router.navigate(['/']);
  }
}
