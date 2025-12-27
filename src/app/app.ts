import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { BgItem } from './bg-item/bg-item';
import { FgItem } from './fg-item/fg-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet
    , NavBar, BgItem, FgItem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
  screenWidth: number = window.innerWidth;
  widthBeforeShrink: number = 1280;
  shrink: boolean = this.screenWidth > this.widthBeforeShrink;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.shrink = this.screenWidth > this.widthBeforeShrink;
  }
}
