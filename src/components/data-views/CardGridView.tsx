import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DataPagination } from "@/components/ui/data-pagination";
import { PaginationInfo } from "@/hooks/useSupabaseData";
import { Building2, Globe, TrendingUp, Users } from "lucide-react";

interface CardGridViewProps {
  data: any[];
  pagination?: PaginationInfo;
  onPageChange?: (page: number) => void;
}

export const CardGridView = ({ data, pagination, onPageChange }: CardGridViewProps) => {
  const getDisplayValue = (item: any, key: string) => {
    const value = item[key];
    if (value === null || value === undefined) return 'N/A';
    return String(value);
  };

  const getKeyFields = (item: any) => {
    const keys = Object.keys(item || {});
    return keys.slice(0, 6); // Show first 6 fields
  };

  const getNumericValue = (value: any) => {
    if (typeof value === 'string' && value.includes('%')) {
      return parseFloat(value.replace('%', ''));
    }
    return parseFloat(value) || 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Card Grid View</h2>
        <Badge variant="outline">{data.length} records</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((record, index) => {
          const keyFields = getKeyFields(record);
          const primaryField = keyFields[0];
          const secondaryField = keyFields[1];
          
          return (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-glass backdrop-blur-glass border-glass shadow-glass">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {getDisplayValue(record, primaryField)}
                    </CardTitle>
                    {secondaryField && (
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Globe className="w-3 h-3" />
                        {getDisplayValue(record, secondaryField)}
                      </div>
                    )}
                  </div>
                  {keyFields[2] && (
                    <Badge variant="secondary" className="text-xs">
                      {getDisplayValue(record, keyFields[2])}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {keyFields.slice(3, 5).map((field, idx) => {
                  const value = getDisplayValue(record, field);
                  const numericValue = getNumericValue(value);
                  const isPercentage = typeof value === 'string' && value.includes('%');
                  
                  return (
                    <div key={field} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1 capitalize">
                          <TrendingUp className="w-3 h-3" />
                          {field.replace(/_/g, ' ')}
                        </span>
                        <span className="font-medium">{value}</span>
                      </div>
                      {isPercentage && numericValue > 0 && (
                        <Progress value={numericValue} className="h-2" />
                      )}
                    </div>
                  );
                })}
                
                {keyFields[5] && (
                  <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground capitalize">
                      <Users className="w-3 h-3" />
                      {keyFields[5].replace(/_/g, ' ')}
                    </div>
                    <Badge 
                      variant={getNumericValue(record[keyFields[5]]) > 5 ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {getDisplayValue(record, keyFields[5])}
                    </Badge>
                  </div>
                )}
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