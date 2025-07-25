import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataRecord } from "@/data/mockData";
import { Building2, TrendingUp } from "lucide-react";

interface KanbanBoardViewProps {
  data: DataRecord[];
}

export const KanbanBoardView = ({ data }: KanbanBoardViewProps) => {
  const getEngagementLevel = (rate: string) => {
    const value = parseFloat(rate.replace('%', ''));
    if (value >= 70) return 'high';
    if (value >= 40) return 'medium';
    return 'low';
  };

  const groupedData = {
    high: data.filter(record => getEngagementLevel(record.engagement_rate) === 'high'),
    medium: data.filter(record => getEngagementLevel(record.engagement_rate) === 'medium'),
    low: data.filter(record => getEngagementLevel(record.engagement_rate) === 'low'),
  };

  const columns = [
    { key: 'high', title: 'High Engagement', color: 'bg-chart-1', count: groupedData.high.length },
    { key: 'medium', title: 'Medium Engagement', color: 'bg-chart-3', count: groupedData.medium.length },
    { key: 'low', title: 'Low Engagement', color: 'bg-chart-2', count: groupedData.low.length },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kanban Board View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.key} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${column.color}`} />
              <h3 className="font-semibold">{column.title}</h3>
              <Badge variant="secondary" className="text-xs">{column.count}</Badge>
            </div>
            
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {groupedData[column.key as keyof typeof groupedData].map((record, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-200 cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {record.member_firm_name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Building2 className="w-3 h-3" />
                      {record.country}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <TrendingUp className="w-3 h-3 text-muted-foreground" />
                      <Badge variant="outline" className="text-xs">
                        {record.engagement_rate}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>Groups: {record.groups}</div>
                      <div>Tools: {record.tools}</div>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {record.region_name}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};