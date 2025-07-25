import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DataRecord } from "@/data/mockData";
import { Building2, MapPin, TrendingUp, Users, Target, BarChart } from "lucide-react";

interface AccordionListsViewProps {
  data: DataRecord[];
}

export const AccordionListsView = ({ data }: AccordionListsViewProps) => {
  const groupedByRegion = data.reduce((acc, record) => {
    if (!acc[record.region_name]) {
      acc[record.region_name] = [];
    }
    acc[record.region_name].push(record);
    return acc;
  }, {} as Record<string, DataRecord[]>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Accordion Lists View</h2>
        <Badge variant="outline">{data.length} firms across {Object.keys(groupedByRegion).length} regions</Badge>
      </div>
      
      <Accordion type="multiple" className="space-y-4">
        {Object.entries(groupedByRegion).map(([region, firms]) => {
          const avgEngagement = firms.reduce((sum, firm) => 
            sum + parseFloat(firm.engagement_rate.replace('%', '')), 0) / firms.length;
          
          return (
            <AccordionItem key={region} value={region} className="border-none">
              <Card className="overflow-hidden">
                <AccordionTrigger className="hover:no-underline p-0">
                  <div className="w-full bg-gradient-to-r from-primary/10 to-primary/5 p-6">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-semibold">{region}</h3>
                          <div className="text-sm text-muted-foreground">
                            {firms.length} firms • Avg engagement: {avgEngagement.toFixed(1)}%
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{avgEngagement.toFixed(0)}%</div>
                          <div className="text-xs text-muted-foreground">Regional Avg</div>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {firms.length}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="p-0">
                  <CardContent className="p-6 space-y-4">
                    {firms.map((firm, index) => (
                      <Card key={index} className="hover:shadow-card transition-all duration-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{firm.member_firm_name}</h4>
                                <div className="text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {firm.country}
                                </div>
                              </div>
                            </div>
                            <Badge variant={parseFloat(firm.engagement_rate.replace('%', '')) > avgEngagement ? "default" : "secondary"}>
                              {firm.engagement_rate}
                            </Badge>
                          </div>

                          <div className="space-y-3">
                            {/* Engagement Progress */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                  <TrendingUp className="w-3 h-3" />
                                  Engagement Rate
                                </span>
                                <span className="font-medium">{firm.engagement_rate}</span>
                              </div>
                              <Progress value={parseFloat(firm.engagement_rate.replace('%', ''))} className="h-2" />
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-4 gap-3">
                              <div className="text-center p-2 bg-muted/30 rounded">
                                <div className="text-xs text-muted-foreground">Groups</div>
                                <div className="font-semibold text-sm">{firm.groups}</div>
                              </div>
                              <div className="text-center p-2 bg-muted/30 rounded">
                                <div className="text-xs text-muted-foreground">Conference</div>
                                <div className="font-semibold text-sm">{firm.conference}</div>
                              </div>
                              <div className="text-center p-2 bg-muted/30 rounded">
                                <div className="text-xs text-muted-foreground">Tools</div>
                                <div className="font-semibold text-sm">{firm.tools}</div>
                              </div>
                              <div className="text-center p-2 bg-muted/30 rounded">
                                <div className="text-xs text-muted-foreground">Results</div>
                                <div className="font-semibold text-sm">{firm.results}</div>
                              </div>
                            </div>

                            {/* Participation Status */}
                            <div className="flex items-center justify-between pt-2 border-t border-border/50">
                              <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3 text-muted-foreground" />
                                  <span>Industry: </span>
                                  <Badge variant={firm.does_country_participate_in_groups_industry_specialty ? "default" : "secondary"} className="text-xs">
                                    {firm.does_country_participate_in_groups_industry_specialty ? "Active" : "Inactive"}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1">
                                  <BarChart className="w-3 h-3 text-muted-foreground" />
                                  <span>Intranet: </span>
                                  <Badge variant={firm.does_firm_participate_in_intranet ? "default" : "secondary"} className="text-xs">
                                    {firm.does_firm_participate_in_intranet ? "Active" : "Inactive"}
                                  </Badge>
                                </div>
                              </div>
                              <Badge variant={firm.total > 5 ? "default" : "secondary"} className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                {firm.total}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};