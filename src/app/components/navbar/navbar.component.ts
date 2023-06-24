import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
document.addEventListener("DOMContentLoaded", ()=> {
  let navEl = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
      navEl?.classList.add("navbar-scrolled");
    } else if (window.scrollY < 56) {
      navEl?.classList.remove("navbar-scrolled");
    }
  });
});