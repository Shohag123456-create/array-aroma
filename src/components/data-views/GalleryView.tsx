import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataRecord } from "@/data/mockData";
import { Building2, MapPin, TrendingUp, Star } from "lucide-react";

interface GalleryViewProps {
  data: DataRecord[];
}

export const GalleryView = ({ data }: GalleryViewProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gallery View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((record, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden bg-gradient-to-br from-card via-card/80 to-primary/5"
          >
            <CardContent className="p-0">
              {/* Header with Avatar */}
              <div className="relative bg-gradient-primary p-4 text-primary-foreground">
                <div className="flex items-center justify-between mb-2">
                  <Avatar className="w-12 h-12 border-2 border-primary-foreground/20">
                    <AvatarFallback className="bg-primary-foreground/10 text-primary-foreground font-bold">
                      {record.member_firm_name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Badge variant="secondary" className="text-xs bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                    {record.region_name}
                  </Badge>
                </div>
                <h3 className="font-semibold text-sm truncate">{record.member_firm_name}</h3>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <MapPin className="w-3 h-3" />
                  {record.country}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Engagement Rate */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {record.engagement_rate}
                  </div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Engagement Rate
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted/30 rounded p-2 text-center">
                    <div className="font-semibold">{record.groups}</div>
                    <div className="text-muted-foreground">Groups</div>
                  </div>
                  <div className="bg-muted/30 rounded p-2 text-center">
                    <div className="font-semibold">{record.tools}</div>
                    <div className="text-muted-foreground">Tools</div>
                  </div>
                </div>

                {/* Score Badge */}
                <div className="flex items-center justify-center">
                  <Badge 
                    variant={record.total > 5 ? "default" : "secondary"}
                    className="flex items-center gap-1"
                  >
                    <Star className="w-3 h-3" />
                    {record.total}
                  </Badge>
                </div>

                {/* Additional Info */}
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">
                    Results: {record.results}
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-center space-y-1">
                    <Building2 className="w-6 h-6 mx-auto text-primary" />
                    <div className="text-xs font-medium">View Details</div>
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