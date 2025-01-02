"use client"

import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const transitData = [
  { neighborhood: "St. George", medianIncome: 75000, avgWaitTime: 12, transitScore: 85 },
  { neighborhood: "New Dorp", medianIncome: 95000, avgWaitTime: 18, transitScore: 72 },
  { neighborhood: "Tottenville", medianIncome: 110000, avgWaitTime: 25, transitScore: 65 },
  { neighborhood: "Port Richmond", medianIncome: 65000, avgWaitTime: 15, transitScore: 78 },
  { neighborhood: "Great Kills", medianIncome: 88000, avgWaitTime: 20, transitScore: 70 },
  { neighborhood: "Stapleton", medianIncome: 58000, avgWaitTime: 10, transitScore: 82 }
]

export function IncomeTransitCorrelation() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Income vs Transit Wait Times</CardTitle>
          <CardDescription>Average wait time (minutes) by median household income</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              waitTime: {
                label: "Average Wait Time",
                color: "hsl(var(--chart-1))",
              }
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="medianIncome" 
                  tickFormatter={(value) => `$${value/1000}k`}
                  label={{ value: 'Median Income', position: 'bottom', offset: 0 }}
                />
                <YAxis
                  label={{ value: 'Wait Time (min)', angle: -90, position: 'left', offset: 10 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="avgWaitTime"
                  stroke="var(--color-waitTime)"
                  name="Wait Time"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transit Accessibility Score</CardTitle>
          <CardDescription>Transit score by neighborhood and income level</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              score: {
                label: "Transit Score",
                color: "hsl(var(--chart-2))",
              }
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="neighborhood"
                  tickFormatter={(value) => value.split(' ')[0]}
                />
                <YAxis
                  label={{ value: 'Transit Score', angle: -90, position: 'left', offset: 10 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="transitScore"
                  fill="var(--color-score)"
                  radius={[4, 4, 0, 0]}
                  name="Transit Score"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

