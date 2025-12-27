import { Component } from '@angular/core';

@Component({
  selector: 'app-fg-item',
  imports: [],
  templateUrl: './fg-item.html',
  styleUrl: './fg-item.scss',
})
export class FgItem {
  screenWidth: number = window.innerWidth;
}
