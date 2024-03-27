import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  
  @Input() sidemenuActive: boolean = false;
  
  // list = [
  //   {
  //     number: '1',
  //     name: 'home',
  //     icon: 'fa-solid fa-house fa-2x'
  //   },

  //   {
  //     number: '2',
  //     name: 'Analytics',
  //     icon: 'fa-solid fa-chart-line fa-2x'
  //   },

  //   {
  //     number: '3',
  //     name: 'Products',
  //     icon: 'fa-solid fa-box fa-2x'
  //   },

  //   {
  //     number: '4',
  //     name: 'Order',
  //     icon: 'fa-solid fa-shop fa-2x'
  //   },
  //   {
  //     number: '5',
  //     name: 'Settings',
  //     icon: 'fa-solid fa-gear fa-2x'
  //   },
  //   {
  //     number: '6',
  //     name: 'About',
  //     icon: 'fa-solid fa-circle-info fa-2x'
  //   },
  //   {
  //     number: '7',
  //     name: 'contact',
  //     icon: 'fa-solid fa-phone fa-2x'
  //   },

  // ];




  activeItem: string = '';
  activeSubItem: string = '';

  itemClick(itemName: string): void {
   
    if (this.activeItem === itemName) {
      this.activeItem = '';
      this.activeSubItem = '';
    } 
    else {
      this.activeItem = itemName;
    }
  }

  subItemClick(subItemName: string, itemName: string,event:Event): void {
    event.stopPropagation();
    this.activeSubItem = subItemName;
    // Check if the parent item is not already active
    if (this.activeItem !== itemName) {
      this.activeItem = itemName;
    }
  }

  isItemActive(itemName: string): boolean {
    return this.activeItem === itemName;
  }

  isSubItemActive(subItemName: string): boolean {
    return this.activeSubItem === subItemName;
  }
}
