import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Documentation() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-muted-foreground">
          Technical documentation and guides
        </p>
      </div>

      <Tabs defaultValue="setup">
        <TabsList>
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="setup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Setup instructions and requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Requirements</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Node.js v18+</li>
                  <li>PostgreSQL 13+</li>
                  <li>4GB RAM minimum</li>
                  <li>10GB storage minimum</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Installation</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm">
{`# Create database and tables
psql -d your_database -f sql/schema.sql

# Load sample data
psql -d your_database -f sql/sample_data.sql

# Install dependencies
npm install csv-parse`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Available endpoints and usage</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`# Environment Variables
DB_CONNECTION_STRING=postgresql://user:password@localhost:5432/database
API_KEY=your_api_key
LOG_LEVEL=info`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Deployment Guide</CardTitle>
              <CardDescription>Production deployment instructions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Regular Maintenance</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Daily backup procedures</li>
                    <li>Weekly performance monitoring</li>
                    <li>Monthly data quality checks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

