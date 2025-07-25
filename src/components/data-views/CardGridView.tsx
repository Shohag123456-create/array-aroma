import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DataRecord } from "@/data/mockData";
import { Building2, Globe, TrendingUp, Users } from "lucide-react";

interface CardGridViewProps {
  data: DataRecord[];
}

export const CardGridView = ({ data }: CardGridViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Card Grid View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((record, index) => (
          <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-primary/10">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {record.member_firm_name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Globe className="w-3 h-3" />
                    {record.country}
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {record.region_name}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Engagement Rate
                  </span>
                  <span className="font-medium">{record.engagement_rate}</span>
                </div>
                <Progress 
                  value={parseFloat(record.engagement_rate.replace('%', ''))} 
                  className="h-2"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-1">
                  <div className="text-muted-foreground">Groups</div>
                  <div className="font-medium">{record.groups}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-muted-foreground">Tools</div>
                  <div className="font-medium">{record.tools}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  Total Score
                </div>
                <Badge 
                  variant={record.total > 5 ? "default" : "secondary"}
                  className="text-xs"
                >
                  {record.total}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};