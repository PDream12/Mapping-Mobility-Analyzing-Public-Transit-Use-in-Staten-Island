import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Database() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Database Schema</h1>
        <p className="text-muted-foreground">
          Database structure and sample queries
        </p>
      </div>

      <Tabs defaultValue="schema">
        <TabsList>
          <TabsTrigger value="schema">Schema</TabsTrigger>
          <TabsTrigger value="queries">Queries</TabsTrigger>
          <TabsTrigger value="sample-data">Sample Data</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schema" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transit Stops</CardTitle>
              <CardDescription>Structure of transit_stops table</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`CREATE TABLE transit_stops (
    stop_id VARCHAR(50) PRIMARY KEY,
    stop_name VARCHAR(100),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    location_type SMALLINT,
    wheelchair_accessible BOOLEAN,
    census_tract VARCHAR(20)
);`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Census Income</CardTitle>
              <CardDescription>Structure of census_income table</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`CREATE TABLE census_income (
    census_tract VARCHAR(20) PRIMARY KEY,
    median_household_income DECIMAL(10,2),
    avg_household_income DECIMAL(10,2),
    total_households INTEGER,
    neighborhood VARCHAR(100)
);`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="queries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Queries</CardTitle>
              <CardDescription>Common analysis queries</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`-- Transit service frequency by income level
SELECT 
    c.neighborhood,
    c.median_household_income,
    COUNT(DISTINCT r.route_id) as num_routes,
    AVG(f.headway_secs)/60 as avg_wait_minutes
FROM census_income c
JOIN transit_stops t ON c.census_tract = t.census_tract
GROUP BY c.neighborhood, c.median_household_income;`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sample-data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sample Data</CardTitle>
              <CardDescription>Example records from tables</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg text-sm">
{`-- Sample transit stops data
INSERT INTO transit_stops VALUES
('S40001', 'St George Ferry Terminal', 40.643748, -74.073643, 1, true, '36085017100'),
('S40002', 'New Dorp', 40.573399, -74.117699, 1, true, '36085027900');

-- Sample census income data
INSERT INTO census_income VALUES
('36085017100', 75000.00, 82000.00, 2500, 'St. George'),
('36085027900', 95000.00, 98000.00, 3200, 'New Dorp');`}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

