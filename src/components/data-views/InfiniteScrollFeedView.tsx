import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataRecord } from "@/data/mockData";
import { Building2, MapPin, TrendingUp, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InfiniteScrollFeedViewProps {
  data: DataRecord[];
}

export const InfiniteScrollFeedView = ({ data }: InfiniteScrollFeedViewProps) => {
  const [displayedItems, setDisplayedItems] = useState(10);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedItems(prev => Math.min(prev + 10, data.length));
      setLoading(false);
    }, 1000);
  };

  const visibleData = data.slice(0, displayedItems);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Infinite Scroll Feed</h2>
        <Badge variant="outline">{displayedItems} of {data.length} firms</Badge>
      </div>
      
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {visibleData.map((record, index) => (
          <Card key={index} className="hover:shadow-card transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                    {record.member_firm_name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{record.member_firm_name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {record.country}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building2 className="w-3 h-3" />
                          {record.region_name}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Just updated
                    </Badge>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-chart-1" />
                      <span className="font-medium text-sm">Engagement Update</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {record.member_firm_name} has achieved an engagement rate of {record.engagement_rate} 
                      with strong performance in groups ({record.groups}) and tools ({record.tools}).
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="bg-background/50 rounded p-2">
                        <div className="text-xs text-muted-foreground">Groups</div>
                        <div className="font-semibold text-sm">{record.groups}</div>
                      </div>
                      <div className="bg-background/50 rounded p-2">
                        <div className="text-xs text-muted-foreground">Conference</div>
                        <div className="font-semibold text-sm">{record.conference}</div>
                      </div>
                      <div className="bg-background/50 rounded p-2">
                        <div className="text-xs text-muted-foreground">Results</div>
                        <div className="font-semibold text-sm">{record.results}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{Math.floor(Math.random() * 20) + 1}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{Math.floor(Math.random() * 10)}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <Share2 className="w-4 h-4" />
                        <span className="text-xs">Share</span>
                      </Button>
                    </div>
                    <Badge variant={record.total > 5 ? "default" : "secondary"} className="text-xs">
                      Score: {record.total}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {displayedItems < data.length && (
          <div className="text-center py-4">
            <Button onClick={loadMore} disabled={loading} variant="outline">
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};