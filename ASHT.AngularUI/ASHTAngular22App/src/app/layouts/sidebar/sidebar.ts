
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  route?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {

  menuItems: MenuItem[] = [

    {
      title: 'Dashboard',
      icon: 'bi-speedometer2',
      route: '/dashboard'
    },

    {
      title: 'HRM',
      icon: 'bi-people',
      expanded: true,
      children: [
        {
          title: 'Users',
          icon: 'bi-person',
          route: '/users'
        },
        {
          title: 'Roles',
          icon: 'bi-shield-lock',
          route: '/roles'
        },
        {
          title: 'Role Privileges',
          icon: 'bi-key',
          route: '/role-privilege'
        }
      ]
    },

    {
      title: 'Inventory',
      icon: 'bi-box-seam',
      children: [
        {
          title: 'Category',
          icon: 'bi-folder',
          route: '/category'
        },
        {
          title: 'Sub Category',
          icon: 'bi-folder2-open',
          route: '/subcategory'
        },
        {
          title: 'Products',
          icon: 'bi-box',
          route: '/product'
        },
        {
          title: 'Product Pricing',
          icon: 'bi-currency-dollar',
          route: '/product-price'
        }
      ]
    },

    {
      title: 'Medical',
      icon: 'bi-hospital',
      children: [
        {
          title: 'Doctors',
          icon: 'bi-person-badge',
          route: '/doctor'
        },
        {
          title: 'Patients',
          icon: 'bi-person-heart',
          route: '/patient'
        },
        {
          title: 'Appointments',
          icon: 'bi-calendar-check',
          route: '/appointment'
        },
        {
          title: 'Prescription',
          icon: 'bi-file-earmark-medical',
          route: '/prescription-details'
        }
      ]
    }

  ];

  toggle(item: MenuItem): void {
    item.expanded = !item.expanded;
  }

}