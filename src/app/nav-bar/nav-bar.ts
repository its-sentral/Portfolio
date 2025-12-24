import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})

export class NavBar {
  isMenuOpen: boolean = false;
  screenWidth: number = window.innerWidth;
  widthBeforeShrink: number = 1000


  menuOnClick() {
    if (window.innerWidth < this.widthBeforeShrink) {
      this.isMenuOpen = !this.isMenuOpen
    }
  }


  // Update screenWidth whenever window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;

    // Reset menu state when resizing back to desktop
    if (this.screenWidth > this.widthBeforeShrink) {
      this.isMenuOpen = false;
    }
  }

}
