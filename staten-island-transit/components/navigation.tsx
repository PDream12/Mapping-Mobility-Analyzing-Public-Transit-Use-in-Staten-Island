'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BarChartIcon as ChartBarIcon, DatabaseIcon, FileTextIcon, HomeIcon } from 'lucide-react'

const routes = [
  {
    path: '/',
    label: 'Overview',
    icon: HomeIcon
  },
  {
    path: '/data',
    label: 'Data Analysis',
    icon: ChartBarIcon
  },
  {
    path: '/database',
    label: 'Database',
    icon: DatabaseIcon
  },
  {
    path: '/docs',
    label: 'Documentation',
    icon: FileTextIcon
  }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-muted/40 min-h-screen">
      <ScrollArea className="h-full py-6">
        <div className="px-3 py-2">
          <h2 className="mb-6 px-4 text-lg font-semibold">
            Mapping Mobility
          </h2>
          <div className="space-y-1">
            {routes.map((route) => {
              const Icon = route.icon
              return (
                <Button
                  key={route.path}
                  variant={pathname === route.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={route.path}>
                    <Icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

