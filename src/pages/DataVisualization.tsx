import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState("card-grid");

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
          <Badge variant="secondary" className="text-sm bg-glass backdrop-blur-glass border-glass shadow-glass">
            {mockData.length} Records Available
          </Badge>
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
                  <Component data={mockData} />
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