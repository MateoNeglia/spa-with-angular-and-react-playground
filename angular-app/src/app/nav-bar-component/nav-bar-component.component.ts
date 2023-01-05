import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})
export class NavBarComponentComponent implements OnInit {

  @Input() title: string;
  checked = false;

  constructor() { }

  ngOnInit(): void {
    if(this.checked) {
      this.toggleNightMode();
    }
    console.log('checked is ', this.checked);

  }

  showFiller = false;

  toggleNightMode() {
    console.log('entered is ', this.checked);
    let angularSectionElement = document.getElementById('angular-main-section');
    let navbar = document.getElementById('nav-bar');
    let angularTitle = document.getElementById('angular-section-title');
    let materialTable = document.getElementById('material-table');
    let tableElements = document.querySelectorAll(".mat-cell-default");

    if(this.checked) {
      angularSectionElement?.classList.remove("light-blue-primary-bg");
      angularSectionElement?.classList.add("light-gray-bg");

      navbar?.classList.remove('dark-blue-primary-bg');
      navbar?.classList.add('dark-navbar-bg');

      angularTitle?.classList.remove('dark-blue-primary-color');
      angularTitle?.classList.add('dark-theme-title-color');

      materialTable?.classList.add('lighter-gray-bg');
      materialTable?.classList.add('dark-theme-title-color');
      
      tableElements.forEach(element => {
        element.classList.add('dark-theme-title-color');
      });

      window.dispatchEvent(new Event('activateDarkMode'));

    } else {
      angularSectionElement?.classList.add("light-blue-primary-bg");
      angularSectionElement?.classList.remove("light-gray-bg");

      navbar?.classList.add('dark-blue-primary-bg');
      navbar?.classList.remove('dark-navbar-bg');

      angularTitle?.classList.add('dark-blue-primary-color');
      angularTitle?.classList.remove('dark-theme-title-color');

      materialTable?.classList.remove('lighter-gray-bg');
      materialTable?.classList.remove('dark-theme-title-color');
      tableElements.forEach(element => {
        element.classList.remove('dark-theme-title-color');
      });

      window.dispatchEvent(new Event('deactivateDarkMode'));
    }
    
  }
}
