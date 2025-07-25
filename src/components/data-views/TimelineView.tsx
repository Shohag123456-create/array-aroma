import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DataRecord } from "@/data/mockData";
import { Calendar, Building2, TrendingUp, MapPin } from "lucide-react";

interface TimelineViewProps {
  data: DataRecord[];
}

export const TimelineView = ({ data }: TimelineViewProps) => {
  const sortedData = [...data].sort((a, b) => 
    parseFloat(b.engagement_rate.replace('%', '')) - parseFloat(a.engagement_rate.replace('%', ''))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Timeline View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
        
        <div className="space-y-6">
          {sortedData.map((record, index) => (
            <div key={index} className="relative flex items-start gap-6">
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-primary rounded-full border-4 border-background shadow-glow">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <Card className="flex-1 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{record.member_firm_name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {record.country}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {record.firm_intranet_name}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{record.region_name}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <div className="text-xs text-muted-foreground">Engagement</div>
                        <div className="font-semibold">{record.engagement_rate}</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-muted-foreground">Groups</div>
                      <div className="font-semibold">{record.groups}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-muted-foreground">Conference</div>
                      <div className="font-semibold">{record.conference}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-muted-foreground">Tools</div>
                      <div className="font-semibold">{record.tools}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <div className="text-sm text-muted-foreground">
                      Results: {record.results}
                    </div>
                    <Badge variant={record.total > 5 ? "default" : "secondary"}>
                      Score: {record.total}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};