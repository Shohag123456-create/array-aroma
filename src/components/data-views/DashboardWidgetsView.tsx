import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DataRecord } from "@/data/mockData";
import { TrendingUp, Users, Building2, Globe, Target, Award } from "lucide-react";

interface DashboardWidgetsViewProps {
  data: DataRecord[];
}

export const DashboardWidgetsView = ({ data }: DashboardWidgetsViewProps) => {
  const totalFirms = data.length;
  const avgEngagement = data.reduce((sum, record) => 
    sum + parseFloat(record.engagement_rate.replace('%', '')), 0) / totalFirms;
  const highPerformers = data.filter(record => 
    parseFloat(record.engagement_rate.replace('%', '')) > 60).length;
  const regions = [...new Set(data.map(record => record.region_name))].length;
  const avgScore = data.reduce((sum, record) => sum + record.total, 0) / totalFirms;

  const topPerformers = [...data]
    .sort((a, b) => parseFloat(b.engagement_rate.replace('%', '')) - parseFloat(a.engagement_rate.replace('%', '')))
    .slice(0, 5);

  const regionStats = [...new Set(data.map(record => record.region_name))]
    .map(region => {
      const regionData = data.filter(record => record.region_name === region);
      const avgEng = regionData.reduce((sum, record) => 
        sum + parseFloat(record.engagement_rate.replace('%', '')), 0) / regionData.length;
      return {
        region,
        count: regionData.length,
        avgEngagement: avgEng
      };
    })
    .sort((a, b) => b.avgEngagement - a.avgEngagement);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard Widgets</h2>
        <Badge variant="outline">{totalFirms} firms analyzed</Badge>
      </div>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-chart-1/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-chart-1" />
              Avg Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEngagement.toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground">Across all firms</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Award className="w-4 h-4 text-chart-2" />
              High Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highPerformers}</div>
            <div className="text-xs text-muted-foreground">{((highPerformers/totalFirms)*100).toFixed(0)}% of total</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="w-4 h-4 text-chart-3" />
              Regions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{regions}</div>
            <div className="text-xs text-muted-foreground">Global coverage</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4 text-chart-4" />
              Avg Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgScore.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Total score average</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-chart-1" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPerformers.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{record.member_firm_name}</div>
                    <div className="text-xs text-muted-foreground">{record.country}</div>
                  </div>
                </div>
                <Badge variant="default" className="text-xs">
                  {record.engagement_rate}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-chart-2" />
              Regional Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {regionStats.map((region, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-sm">{region.region}</span>
                    <Badge variant="outline" className="text-xs">{region.count} firms</Badge>
                  </div>
                  <span className="text-sm font-semibold">{region.avgEngagement.toFixed(1)}%</span>
                </div>
                <Progress value={region.avgEngagement} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-chart-3" />
            Recent Activity Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-chart-1">{data.filter(r => r.does_firm_participate_in_intranet).length}</div>
              <div className="text-sm text-muted-foreground">Intranet Active</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-chart-2">{data.filter(r => r.does_country_participate_in_groups_industry_specialty).length}</div>
              <div className="text-sm text-muted-foreground">Industry Groups</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-chart-3">{data.filter(r => r.does_firm_participate_with_affinity_tools).length}</div>
              <div className="text-sm text-muted-foreground">Using Tools</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};