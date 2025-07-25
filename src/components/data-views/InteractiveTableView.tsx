import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataRecord } from "@/data/mockData";
import { Search, Filter, ArrowUpDown } from "lucide-react";

interface InteractiveTableViewProps {
  data: DataRecord[];
}

export const InteractiveTableView = ({ data }: InteractiveTableViewProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof DataRecord | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const filteredData = data.filter(
    (record) =>
      record.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.member_firm_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.region_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    
    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }
    
    return 0;
  });

  const handleSort = (field: keyof DataRecord) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Interactive Table View</h2>
        <Badge variant="outline">{sortedData.length} of {data.length} records</Badge>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search firms, countries, regions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden bg-card">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("country")}
                  className="h-auto p-0 font-semibold"
                >
                  Country
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("member_firm_name")}
                  className="h-auto p-0 font-semibold"
                >
                  Firm Name
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold">Region</TableHead>
              <TableHead className="font-semibold text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("engagement_rate")}
                  className="h-auto p-0 font-semibold"
                >
                  Engagement Rate
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold text-center">Groups</TableHead>
              <TableHead className="font-semibold text-center">Tools</TableHead>
              <TableHead className="font-semibold text-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("total")}
                  className="h-auto p-0 font-semibold"
                >
                  Total Score
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((record, index) => (
              <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{record.country}</TableCell>
                <TableCell>{record.member_firm_name}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    {record.region_name}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge 
                    variant={parseFloat(record.engagement_rate.replace('%', '')) > 50 ? "default" : "outline"}
                    className="text-xs"
                  >
                    {record.engagement_rate}
                  </Badge>
                </TableCell>
                <TableCell className="text-center text-sm">{record.groups}</TableCell>
                <TableCell className="text-center text-sm">{record.tools}</TableCell>
                <TableCell className="text-center">
                  <Badge 
                    variant={record.total > 5 ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {record.total}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};