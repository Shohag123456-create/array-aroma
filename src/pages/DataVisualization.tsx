import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CardGridView } from "@/components/data-views/CardGridView";
import { InteractiveTableView } from "@/components/data-views/InteractiveTableView";
import { EnhancedListView } from "@/components/data-views/EnhancedListView";
import { KanbanBoardView } from "@/components/data-views/KanbanBoardView";
import { TimelineView } from "@/components/data-views/TimelineView";
import { SplitView } from "@/components/data-views/SplitView";
import { InfiniteScrollFeedView } from "@/components/data-views/InfiniteScrollFeedView";
import { DashboardWidgetsView } from "@/components/data-views/DashboardWidgetsView";
import { GalleryView } from "@/components/data-views/GalleryView";
import { AccordionListsView } from "@/components/data-views/AccordionListsView";
import { PieChartView } from "@/components/data-views/PieChartView";
import { BarChartView } from "@/components/data-views/BarChartView";
import { useSupabaseData } from "@/hooks/useSupabaseData";
import { mockData } from "@/data/mockData";
import { 
  Grid, 
  Table, 
  List, 
  Kanban, 
  Clock, 
  SplitSquareHorizontal, 
  Infinity, 
  BarChart3, 
  ImageIcon, 
  ChevronDown,
  PieChart,
  TrendingUp
} from "lucide-react";

const viewTabs = [
  { id: "card-grid", label: "Card Grid", icon: Grid, component: CardGridView },
  { id: "table", label: "Interactive Table", icon: Table, component: InteractiveTableView },
  { id: "list", label: "Enhanced List", icon: List, component: EnhancedListView },
  { id: "kanban", label: "Kanban Board", icon: Kanban, component: KanbanBoardView },
  { id: "timeline", label: "Timeline View", icon: Clock, component: TimelineView },
  { id: "split", label: "Split View", icon: SplitSquareHorizontal, component: SplitView },
  { id: "feed", label: "Infinite Feed", icon: Infinity, component: InfiniteScrollFeedView },
  { id: "dashboard", label: "Dashboard", icon: BarChart3, component: DashboardWidgetsView },
  { id: "gallery", label: "Gallery View", icon: ImageIcon, component: GalleryView },
  { id: "accordion", label: "Accordion Lists", icon: ChevronDown, component: AccordionListsView },
  { id: "pie-chart", label: "Pie Charts", icon: PieChart, component: PieChartView },
  { id: "bar-chart", label: "Bar Charts", icon: TrendingUp, component: BarChartView },
];

const availableTables = [
  { value: "mock", label: "Mock Data (Demo)" },
  { value: "all_engagement_jcm", label: "All Engagement JCM" },
  { value: "conf_feedbacks", label: "Conference Feedbacks" },
  { value: "conferences", label: "Conferences" },
  { value: "hlb-firms", label: "HLB Firms" },
  { value: "impact_matrix", label: "Impact Matrix" },
  { value: "success_new_refs_rec", label: "Success New Refs (Received)" },
  { value: "success_new_refs_refs", label: "Success New Refs (Referrals)" },
  { value: "turnover_refarrals_2023", label: "Turnover Referrals 2023" },
  { value: "group_membership_by_firm", label: "Group Membership by Firm" },
];

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState("card-grid");
  const [selectedTable, setSelectedTable] = useState("mock");
  
  const { data: supabaseData, loading, error, pagination, goToPage } = useSupabaseData(
    selectedTable === "mock" ? "" : selectedTable,
    50
  );
  
  const currentData = selectedTable === "mock" ? mockData : supabaseData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 relative">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Data Visualization Dashboard
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Explore your data through 12 different beautiful view styles
          </p>
          
          {/* Table Selection */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex items-center gap-4">
              <Select value={selectedTable} onValueChange={setSelectedTable}>
                <SelectTrigger className="w-[280px] bg-glass backdrop-blur-glass border-glass">
                  <SelectValue placeholder="Select a data table" />
                </SelectTrigger>
                <SelectContent>
                  {availableTables.map((table) => (
                    <SelectItem key={table.value} value={table.value}>
                      {table.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-sm bg-glass backdrop-blur-glass border-glass shadow-glass">
                {loading ? "Loading..." : `${currentData.length} Records Available`}
              </Badge>
              {selectedTable !== "mock" && pagination && (
                <Badge variant="outline" className="text-sm">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </Badge>
              )}
            </div>
            
            {error && (
              <Card className="p-4 border-destructive bg-destructive/10">
                <p className="text-destructive text-sm">Error loading data: {error}</p>
              </Card>
            )}
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-6 lg:grid-cols-12 gap-2 h-auto p-2 bg-glass backdrop-blur-glass border-glass shadow-glass mb-8">
            {viewTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center gap-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-glow transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-xs font-medium hidden lg:block">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Tab Content */}
          {viewTabs.map((tab) => {
            const Component = tab.component;
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="bg-glass backdrop-blur-glass rounded-lg border-glass shadow-glass p-6">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <Component 
                      data={currentData} 
                      pagination={selectedTable !== "mock" ? pagination : undefined}
                      onPageChange={selectedTable !== "mock" ? goToPage : undefined}
                    />
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default DataVisualization;