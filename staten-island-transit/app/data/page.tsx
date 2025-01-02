import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IncomeTransitCorrelation } from '@/components/charts/income-transit-correlation'
import { TransitStats } from '@/components/stats/transit-stats'

export default function DataAnalysis() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Data Analysis</h1>
        <p className="text-muted-foreground">
          Explore transportation patterns and crime statistics in Staten Island
        </p>
      </div>

      <Tabs defaultValue="transportation">
        <TabsList>
          <TabsTrigger value="transportation">Transportation</TabsTrigger>
          <TabsTrigger value="crime">Crime</TabsTrigger>
          <TabsTrigger value="correlation">Correlation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transportation" className="space-y-4">
          <TransitStats />
          <Card>
            <CardHeader>
              <CardTitle>Income & Transit Correlation</CardTitle>
              <CardDescription>Analysis of public transit accessibility and income levels</CardDescription>
            </CardHeader>
            <CardContent>
              <IncomeTransitCorrelation />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crime" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Crime Statistics</CardTitle>
              <CardDescription>Analysis of crime rates and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
                Crime data visualization placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="correlation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Correlation Analysis</CardTitle>
              <CardDescription>Relationship between transportation and crime data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg">
                Correlation visualization placeholder
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

