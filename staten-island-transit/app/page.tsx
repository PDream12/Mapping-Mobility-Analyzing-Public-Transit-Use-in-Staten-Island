import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChartIcon as ChartBarIcon, DatabaseIcon, FileTextIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Mapping Mobility Staten Island</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of public transportation, demographics, and crime rates in Staten Island
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartBarIcon className="h-5 w-5" />
              Data Analysis
            </CardTitle>
            <CardDescription>
              Explore transportation and crime statistics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Interactive visualizations and analysis of transportation patterns and crime rates.
            </p>
            <Button asChild>
              <Link href="/data">View Analysis</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DatabaseIcon className="h-5 w-5" />
              Database Schema
            </CardTitle>
            <CardDescription>
              Review database structure and queries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Complete database schema, sample data, and analysis queries.
            </p>
            <Button asChild>
              <Link href="/database">View Schema</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              Documentation
            </CardTitle>
            <CardDescription>
              Technical documentation and guides
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              Setup instructions, API documentation, and usage guides.
            </p>
            <Button asChild>
              <Link href="/docs">View Docs</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>Transportation access varies significantly by income level</li>
              <li>Strong correlation between vehicle availability and median household income</li>
              <li>Public transit usage patterns show distinct differences across neighborhoods</li>
              <li>Crime rates impact transportation choices in certain areas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">1. Database Setup</h3>
                <pre className="bg-muted p-2 rounded-md text-sm">
                  psql -d your_database -f sql/schema.sql
                </pre>
              </div>
              <div>
                <h3 className="font-medium mb-2">2. Install Dependencies</h3>
                <pre className="bg-muted p-2 rounded-md text-sm">
                  npm install csv-parse
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

