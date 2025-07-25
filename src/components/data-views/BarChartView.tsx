import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataRecord } from "@/data/mockData";
import { BarChart3, TrendingUp, Activity, Target } from "lucide-react";

interface BarChartViewProps {
  data: DataRecord[];
}

export const BarChartView = ({ data }: BarChartViewProps) => {
  // Prepare data for regional comparison
  const regionalData = data.reduce((acc, record) => {
    const region = record.region_name;
    if (!acc[region]) {
      acc[region] = {
        region: region,
        totalFirms: 0,
        avgEngagement: 0,
        avgGroups: 0,
        avgTools: 0,
        avgTotal: 0,
        engagementSum: 0,
        groupsSum: 0,
        toolsSum: 0,
        totalSum: 0
      };
    }
    
    acc[region].totalFirms += 1;
    acc[region].engagementSum += parseFloat(record.engagement_rate.replace('%', ''));
    acc[region].groupsSum += parseFloat(record.groups.replace('%', ''));
    acc[region].toolsSum += parseFloat(record.tools.replace('%', ''));
    acc[region].totalSum += record.total;
    
    return acc;
  }, {} as Record<string, any>);

  // Calculate averages
  const chartData = Object.values(regionalData).map((region: any) => ({
    region: region.region,
    engagement: Number((region.engagementSum / region.totalFirms).toFixed(1)),
    groups: Number((region.groupsSum / region.totalFirms).toFixed(1)),
    tools: Number((region.toolsSum / region.totalFirms).toFixed(1)),
    total: Number((region.totalSum / region.totalFirms).toFixed(1)),
    firms: region.totalFirms
  }));

  // Top performers data
  const topPerformers = data
    .sort((a, b) => parseFloat(b.engagement_rate.replace('%', '')) - parseFloat(a.engagement_rate.replace('%', '')))
    .slice(0, 10)
    .map(record => ({
      name: record.member_firm_name.length > 15 
        ? record.member_firm_name.substring(0, 15) + '...' 
        : record.member_firm_name,
      engagement: parseFloat(record.engagement_rate.replace('%', '')),
      total: record.total,
      country: record.country
    }));

  // Trend data (simulated based on total scores)
  const trendData = data
    .sort((a, b) => a.total - b.total)
    .map((record, index) => ({
      index: index + 1,
      engagement: parseFloat(record.engagement_rate.replace('%', '')),
      total: record.total,
      name: record.member_firm_name
    }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-glass backdrop-blur-glass border-glass shadow-glass rounded-lg p-3">
          <p className="font-medium mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.dataKey === 'engagement' || entry.dataKey === 'groups' || entry.dataKey === 'tools' ? '%' : ''}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Advanced Charts Analytics</h2>
        <Badge variant="outline" className="gap-2">
          <BarChart3 className="w-3 h-3" />
          Multi-dimensional Analysis
        </Badge>
      </div>

      <Tabs defaultValue="regional" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-glass backdrop-blur-glass border-glass shadow-glass">
          <TabsTrigger value="regional" className="gap-2">
            <Target className="w-4 h-4" />
            Regional Metrics
          </TabsTrigger>
          <TabsTrigger value="performers" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Top Performers
          </TabsTrigger>
          <TabsTrigger value="trends" className="gap-2">
            <Activity className="w-4 h-4" />
            Performance Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="regional" className="space-y-6">
          <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
            <CardHeader>
              <CardTitle>Regional Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="region" 
                      stroke="hsl(var(--foreground))"
                      fontSize={12}
                    />
                    <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="engagement" fill="hsl(var(--chart-1))" name="Engagement %" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="groups" fill="hsl(var(--chart-2))" name="Groups %" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="tools" fill="hsl(var(--chart-3))" name="Tools %" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="total" fill="hsl(var(--chart-4))" name="Total Score" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performers" className="space-y-6">
          <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
            <CardHeader>
              <CardTitle>Top 10 Performing Firms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topPerformers} layout="horizontal" margin={{ top: 20, right: 30, left: 80, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--foreground))" fontSize={12} />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      stroke="hsl(var(--foreground))"
                      fontSize={10}
                      width={80}
                    />
                    <Tooltip 
                      content={({ active, payload, label }: any) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-glass backdrop-blur-glass border-glass shadow-glass rounded-lg p-3">
                              <p className="font-medium">{data.name}</p>
                              <p className="text-sm text-muted-foreground">{data.country}</p>
                              <p className="text-sm">Engagement: {data.engagement}%</p>
                              <p className="text-sm">Total Score: {data.total}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="engagement" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
              <CardHeader>
                <CardTitle>Engagement Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData.slice(0, 20)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="index" 
                        stroke="hsl(var(--foreground))"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area 
                        type="monotone" 
                        dataKey="engagement" 
                        stroke="hsl(var(--chart-1))" 
                        fill="hsl(var(--chart-1))"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
              <CardHeader>
                <CardTitle>Score Distribution Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trendData.slice(0, 20)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="index" 
                        stroke="hsl(var(--foreground))"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(var(--foreground))" fontSize={12} />
                      <Tooltip content={<CustomTooltip />} />
                      <Line 
                        type="monotone" 
                        dataKey="total" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};