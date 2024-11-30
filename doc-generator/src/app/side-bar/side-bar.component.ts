import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isVisible:boolean=false;

  constructor() {
  }

  showSideBar(){
    this.isVisible=true;
  }


  hideSideBar(){
    this.isVisible=false;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (e.clientX < 50) {
      this.showSideBar();
    } else {
      this.hideSideBar();
    }
  }
}
