import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataRecord } from "@/data/mockData";
import { Building2, MapPin, TrendingUp, Users, Star } from "lucide-react";

interface EnhancedListViewProps {
  data: DataRecord[];
}

export const EnhancedListView = ({ data }: EnhancedListViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Enhanced List View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="space-y-4">
        {data.map((record, index) => (
          <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-gradient-to-r from-card to-card/50 border-l-4 border-l-primary/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {record.member_firm_name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {record.member_firm_name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {record.country}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {record.firm_intranet_name}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{record.region_name}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Engagement Rate
                        </span>
                        <span className="font-medium">{record.engagement_rate}</span>
                      </div>
                      <Progress value={parseFloat(record.engagement_rate.replace('%', ''))} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-muted/30 rounded-md">
                        <div className="text-xs text-muted-foreground">Groups</div>
                        <div className="font-semibold text-sm">{record.groups}</div>
                      </div>
                      <div className="text-center p-2 bg-muted/30 rounded-md">
                        <div className="text-xs text-muted-foreground">Tools</div>
                        <div className="font-semibold text-sm">{record.tools}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Total Score:</span>
                      </div>
                      <Badge variant={record.total > 5 ? "default" : "secondary"} className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {record.total}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                    <span>Conference: {record.conference}</span>
                    <span>•</span>
                    <span>Results: {record.results}</span>
                    <span>•</span>
                    <span>Groups participation: {record.groups_1}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};