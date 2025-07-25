import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataRecord } from "@/data/mockData";
import { TrendingUp, Globe } from "lucide-react";

interface PieChartViewProps {
  data: DataRecord[];
}

export const PieChartView = ({ data }: PieChartViewProps) => {
  // Prepare data for region distribution
  const regionData = data.reduce((acc, record) => {
    const region = record.region_name;
    if (!acc[region]) {
      acc[region] = { name: region, value: 0, firms: [] };
    }
    acc[region].value += 1;
    acc[region].firms.push(record.member_firm_name);
    return acc;
  }, {} as Record<string, { name: string; value: number; firms: string[] }>);

  const chartData = Object.values(regionData);

  // Prepare engagement rate distribution
  const engagementRanges = data.reduce((acc, record) => {
    const rate = parseFloat(record.engagement_rate.replace('%', ''));
    let range = '';
    if (rate < 20) range = '0-20%';
    else if (rate < 40) range = '20-40%';
    else if (rate < 60) range = '40-60%';
    else if (rate < 80) range = '60-80%';
    else range = '80-100%';

    if (!acc[range]) {
      acc[range] = { name: range, value: 0 };
    }
    acc[range].value += 1;
    return acc;
  }, {} as Record<string, { name: string; value: number }>);

  const engagementData = Object.values(engagementRanges);

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-glass backdrop-blur-glass border-glass shadow-glass rounded-lg p-3">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {data.value} firms ({((data.value / chartData.reduce((sum, item) => sum + item.value, 0)) * 100).toFixed(1)}%)
          </p>
          {data.firms && (
            <div className="mt-2 max-h-20 overflow-y-auto">
              <p className="text-xs text-muted-foreground mb-1">Firms:</p>
              {data.firms.slice(0, 3).map((firm: string, idx: number) => (
                <Badge key={idx} variant="outline" className="text-xs mr-1 mb-1">
                  {firm}
                </Badge>
              ))}
              {data.firms.length > 3 && (
                <span className="text-xs text-muted-foreground">+{data.firms.length - 3} more</span>
              )}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pie Chart Analytics</h2>
        <Badge variant="outline" className="gap-2">
          <TrendingUp className="w-3 h-3" />
          Distribution Analysis
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Distribution */}
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Regional Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Rate Distribution */}
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Engagement Rate Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="none"
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{chartData.length}</div>
            <div className="text-sm text-muted-foreground">Total Regions</div>
          </CardContent>
        </Card>
        
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{data.length}</div>
            <div className="text-sm text-muted-foreground">Total Firms</div>
          </CardContent>
        </Card>
        
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {(data.reduce((sum, item) => sum + parseFloat(item.engagement_rate.replace('%', '')), 0) / data.length).toFixed(1)}%
            </div>
            <div className="text-sm text-muted-foreground">Avg Engagement</div>
          </CardContent>
        </Card>
        
        <Card className="bg-glass backdrop-blur-glass border-glass shadow-glass">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">
              {Math.max(...data.map(item => parseFloat(item.engagement_rate.replace('%', ''))))}%
            </div>
            <div className="text-sm text-muted-foreground">Peak Engagement</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};