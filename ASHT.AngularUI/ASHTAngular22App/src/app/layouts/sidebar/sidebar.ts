
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
          route: '/role-privileges'
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
          route: '/categories'
        },
        {
          title: 'Sub Category',
          icon: 'bi-folder2-open',
          route: '/subcategories'
        },
        {
          title: 'Products',
          icon: 'bi-box',
          route: '/products'
        },
        {
          title: 'Product Pricing',
          icon: 'bi-currency-dollar',
          route: '/product-pricing'
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
          route: '/doctors'
        },
        {
          title: 'Patients',
          icon: 'bi-person-heart',
          route: '/patients'
        },
        {
          title: 'Appointments',
          icon: 'bi-calendar-check',
          route: '/appointments'
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