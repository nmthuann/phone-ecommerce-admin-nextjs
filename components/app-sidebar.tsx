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
import { NavMain } from './nav-main'
import { SignInButton, useUser } from '@clerk/nextjs'
import { NavUser } from './nav-user'

const data = {
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
          title: 'Brands Management',
          url: '/brands'
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
          url: '/warehouseReceipts'
        },

        {
          title: 'Suppliers',
          url: '/suppliers'
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
          url: '/orders'
        },
        {
          title: 'Invoices Management',
          url: '/invoices'
        },
        {
          title: 'Warranties Management',
          url: '/warranties'
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
  const { user } = useUser()

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
        {user ? (
          <NavUser
            user={{
              name: `${user?.firstName} ${user?.lastName}`,
              email: `${user?.primaryEmailAddress?.emailAddress}`,
              avatar: `${user?.imageUrl}`
            }}
          />
        ) : (
          <div>
            <SignInButton />
          </div>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
