import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataRecord } from "@/data/mockData";
import { Building2, MapPin, TrendingUp, Users, ChevronRight } from "lucide-react";

interface SplitViewProps {
  data: DataRecord[];
}

export const SplitView = ({ data }: SplitViewProps) => {
  const [selectedRecord, setSelectedRecord] = useState<DataRecord | null>(data[0] || null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Split View</h2>
        <Badge variant="outline">{data.length} firms</Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Left Panel - List */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">Firms List</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-y-auto h-[500px]">
              {data.map((record, index) => (
                <div
                  key={index}
                  className={`p-4 border-b border-border/50 cursor-pointer transition-all duration-200 hover:bg-muted/30 ${
                    selectedRecord === record ? 'bg-primary/10 border-l-4 border-l-primary' : ''
                  }`}
                  onClick={() => setSelectedRecord(record)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-medium">{record.member_firm_name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {record.country}
                        <span>•</span>
                        <span>{record.region_name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {record.engagement_rate}
                      </Badge>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Panel - Details */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg">Firm Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {selectedRecord ? (
              <>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{selectedRecord.member_firm_name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4" />
                        <span>{selectedRecord.firm_intranet_name}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{selectedRecord.region_name}</Badge>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{selectedRecord.country}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-chart-1" />
                      <span className="font-medium">Engagement Metrics</span>
                    </div>
                    <div className="space-y-2 pl-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Engagement Rate</span>
                        <Badge variant="outline">{selectedRecord.engagement_rate}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Groups</span>
                        <span className="text-sm font-medium">{selectedRecord.groups}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Conference</span>
                        <span className="text-sm font-medium">{selectedRecord.conference}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Tools</span>
                        <span className="text-sm font-medium">{selectedRecord.tools}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-chart-2" />
                      <span className="font-medium">Performance</span>
                    </div>
                    <div className="space-y-2 pl-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Score</span>
                        <Badge variant={selectedRecord.total > 5 ? "default" : "secondary"}>
                          {selectedRecord.total}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Results</span>
                        <span className="text-sm font-medium">{selectedRecord.results}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Groups Participation</span>
                        <span className="text-sm font-medium">{selectedRecord.groups_1}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-medium mb-3">Participation Status</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-xs">Industry Specialty</span>
                      <Badge variant={selectedRecord.does_country_participate_in_groups_industry_specialty ? "default" : "secondary"} className="text-xs">
                        {selectedRecord.does_country_participate_in_groups_industry_specialty ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                      <span className="text-xs">Intranet</span>
                      <Badge variant={selectedRecord.does_firm_participate_in_intranet ? "default" : "secondary"} className="text-xs">
                        {selectedRecord.does_firm_participate_in_intranet ? "Yes" : "No"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-muted-foreground">
                Select a firm from the list to view details
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};