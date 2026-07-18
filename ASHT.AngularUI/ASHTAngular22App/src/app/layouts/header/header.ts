
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  notificationCount = 3;

  user = {
    name: 'Admin User',
    role: 'Administrator',
    image:'https://i.pravatar.cc/100'
    //image: 'assets/images/Ashraf.jpg'
  };

  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

}