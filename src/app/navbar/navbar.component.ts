import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  lastScrollTop: number = 0;
  isTopbarVisible: boolean = true;
  toggleTopbar() {
    this.isTopbarVisible = !this.isTopbarVisible;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      // Scrolling down
      this.isTopbarVisible = false;
    } else {
      // Scrolling up
      this.isTopbarVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  }
}
