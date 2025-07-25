import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { BarChart3, Grid, Table, List, Kanban, Clock, SplitSquareHorizontal, Infinity, ImageIcon, ChevronDown, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Grid, title: "Card Grid", description: "Beautiful card layout with hover effects" },
    { icon: Table, title: "Interactive Table", description: "Sortable table with search and filters" },
    { icon: List, title: "Enhanced List", description: "Rich list view with detailed information" },
    { icon: Kanban, title: "Kanban Board", description: "Organize data by engagement levels" },
    { icon: Clock, title: "Timeline View", description: "Chronological data presentation" },
    { icon: SplitSquareHorizontal, title: "Split View", description: "Master-detail interface" },
    { icon: Infinity, title: "Infinite Feed", description: "Social media style infinite scroll" },
    { icon: BarChart3, title: "Dashboard", description: "Comprehensive analytics widgets" },
    { icon: ImageIcon, title: "Gallery View", description: "Visual card gallery with overlays" },
    { icon: ChevronDown, title: "Accordion Lists", description: "Collapsible grouped data view" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Data Visualization Dashboard
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore your data through 10 different beautiful and interactive view styles. 
            Each view offers a unique perspective on your firm engagement data.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={() => navigate('/data')} 
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow"
            >
              Explore Data Views
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Badge variant="secondary" className="text-sm">
              26+ Sample Records
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">10 Different View Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-primary/10">
                  <CardHeader className="text-center pb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-sm font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Preview Section */}
        <Card className="bg-card/30 backdrop-blur-sm border-primary/20 shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Interactive Data Experience</CardTitle>
            <p className="text-muted-foreground">
              Switch between different view styles with beautiful tab navigation. 
              Each view is designed to be responsive, accessible, and visually appealing.
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => navigate('/data')} 
              size="lg" 
              variant="outline"
              className="shadow-card"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
