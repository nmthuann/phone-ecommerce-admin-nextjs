'use client'

import * as React from 'react'
import {
  AudioWaveform,
  Command,
  FileChartColumn,
  GalleryVerticalEnd,
  PackagePlus,
  PieChart,
  Settings,
  TabletSmartphone,
  UserCheck2,
  Warehouse
} from 'lucide-react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { TeamSwitcher } from './team-switcher'
import { NavProjects } from './nav-projects'
import { NavUser } from './nav-user'
import { NavMain } from './nav-main'

const data = {
  user: {
    name: 'Nguyen Minh Thuan',
    email: 'm@example.com',
    avatar: 'https://res.cloudinary.com/dhvwulfgc/image/upload/v1699110210/e0tc6lzq7cgx2lrbmzj5.jpg'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Products',
      url: '#',
      icon: TabletSmartphone,
      isActive: true,
      items: [
        {
          title: 'Product Management',
          url: '/products'
        },
        {
          title: 'Skus Management',
          url: '#'
        },
        {
          title: 'Brands Management',
          url: '#'
        },
        {
          title: 'Categories Management',
          url: '#'
        }
      ]
    },
    {
      title: 'Inventories',
      url: '#',
      icon: Warehouse,
      items: [
        {
          title: 'Purchase Orders',
          url: '/purchaseOrders'
        },
        {
          title: 'Warehouse Receipts',
          url: '#'
        },
        {
          title: 'Inventory',
          url: '#'
        },
        {
          title: 'Suppliers',
          url: '#'
        }
      ]
    },
    {
      title: 'Orders',
      url: '#',
      icon: PackagePlus,
      items: [
        {
          title: 'Orders Management',
          url: '/purchaseOrders'
        },
        {
          title: 'Invoices Management',
          url: '#'
        },
        {
          title: 'Warranties Management',
          url: '#'
        }
      ]
    },
    {
      title: 'User',
      url: '#',
      icon: UserCheck2,
      items: [
        {
          title: 'Customer Management',
          url: '#'
        },
        {
          title: 'Admin Management',
          url: '#'
        }
      ]
    }
  ],
  projects: [
    {
      name: 'Analyis',
      url: '#',
      icon: PieChart
    },
    {
      name: 'Statistical Report',
      url: '#',
      icon: FileChartColumn
    },
    {
      name: 'Setting',
      url: '#',
      icon: Settings
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
