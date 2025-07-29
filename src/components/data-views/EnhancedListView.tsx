import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DataPagination } from "@/components/ui/data-pagination";
import { PaginationInfo } from "@/hooks/useSupabaseData";
import { Building2, MapPin, TrendingUp, Users, Star } from "lucide-react";

interface EnhancedListViewProps {
  data: any[];
  pagination?: PaginationInfo;
  onPageChange?: (page: number) => void;
}

export const EnhancedListView = ({ data, pagination, onPageChange }: EnhancedListViewProps) => {
  const getDisplayValue = (item: any, key: string) => {
    const value = item[key];
    if (value === null || value === undefined) return 'N/A';
    return String(value);
  };

  const getKeyFields = (item: any) => {
    const keys = Object.keys(item || {});
    return keys.slice(0, 4); // Show first 4 fields
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Enhanced List View</h2>
        <Badge variant="outline">{data.length} records</Badge>
      </div>
      
      <div className="space-y-4">
        {data.map((record, index) => {
          const keyFields = getKeyFields(record);
          const primaryField = keyFields[0];
          const secondaryField = keyFields[1];
          
          return (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-gradient-to-r from-card to-card/50 border-l-4 border-l-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getDisplayValue(record, primaryField).charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {getDisplayValue(record, primaryField)}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          {secondaryField && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {getDisplayValue(record, secondaryField)}
                            </div>
                          )}
                          {keyFields[2] && (
                            <div className="flex items-center gap-1">
                              <Building2 className="w-3 h-3" />
                              {getDisplayValue(record, keyFields[2])}
                            </div>
                          )}
                        </div>
                      </div>
                      {keyFields[3] && (
                        <Badge variant="secondary">{getDisplayValue(record, keyFields[3])}</Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {keyFields.slice(4, 7).map((field, idx) => {
                        const value = getDisplayValue(record, field);
                        const isNumeric = !isNaN(parseFloat(value));
                        
                        return (
                          <div key={field} className="text-center p-2 bg-muted/30 rounded-md">
                            <div className="text-xs text-muted-foreground capitalize">
                              {field.replace(/_/g, ' ')}
                            </div>
                            <div className="font-semibold text-sm">{value}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-4 pt-2 border-t border-border/50 text-xs text-muted-foreground">
                      {Object.entries(record).slice(7, 10).map(([key, value], idx) => (
                        <span key={key}>
                          {key.replace(/_/g, ' ')}: {getDisplayValue(record, key)}
                          {idx < 2 && <span className="ml-2">•</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {pagination && onPageChange && (
        <DataPagination pagination={pagination} onPageChange={onPageChange} />
      )}
    </div>
  );
};