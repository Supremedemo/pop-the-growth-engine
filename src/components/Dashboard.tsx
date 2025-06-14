
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, BarChart3, Users, Zap, Eye, MousePointer, TrendingUp, DollarSign, Target, Lightbulb } from "lucide-react";

interface DashboardProps {
  onNavigate: (view: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  const stats = [
    {
      title: "Total Impressions",
      value: "127,432",
      change: "+12.5%",
      icon: Eye,
      changeType: "positive" as const
    },
    {
      title: "Conversions", 
      value: "3,847",
      change: "+8.2%",
      icon: MousePointer,
      changeType: "positive" as const
    },
    {
      title: "Conversion Rate",
      value: "3.02%",
      change: "+0.4%",
      icon: TrendingUp,
      changeType: "positive" as const
    },
    {
      title: "Revenue Attributed",
      value: "$23,156",
      change: "+15.7%",
      icon: DollarSign,
      changeType: "positive" as const
    }
  ];

  const quickActions = [
    {
      title: "Create Popup",
      description: "Build a new popup from scratch or use a template",
      icon: Plus,
      action: () => onNavigate("builder"),
      color: "blue"
    },
    {
      title: "Browse Templates",
      description: "Choose from 50+ professional popup templates",
      icon: Lightbulb,
      action: () => onNavigate("templates"),
      color: "purple"
    },
    {
      title: "View Analytics",
      description: "Deep dive into your campaign performance",
      icon: BarChart3,
      action: () => onNavigate("analytics"),
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2 flex items-center">
                    Welcome back! 👋
                  </h1>
                  <p className="text-blue-100 text-lg mb-6">
                    Your campaigns have generated $23,156 in attributed revenue this month.
                  </p>
                  <Button 
                    onClick={() => onNavigate("campaigns")}
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Campaign
                  </Button>
                </div>
                <div className="hidden lg:block">
                  <TrendingUp className="w-24 h-24 text-white/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      stat.changeType === 'positive' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }`}
                  >
                    {stat.change}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="bg-card border-border cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={action.action}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    action.color === 'blue' ? 'bg-blue-600' :
                    action.color === 'purple' ? 'bg-purple-600' :
                    'bg-green-600'
                  }`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Campaigns Section */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-foreground">Recent Campaigns</CardTitle>
              <CardDescription className="text-muted-foreground">
                Monitor your active and recent popup campaigns
              </CardDescription>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="border-border text-muted-foreground hover:bg-accent"
              onClick={() => onNavigate("campaigns")}
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Summer Sale Campaign</h4>
                    <p className="text-sm text-muted-foreground">Active • 2,341 impressions today</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">4.2% CTR</p>
                  <p className="text-xs text-muted-foreground">$1,234 revenue</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Newsletter Signup</h4>
                    <p className="text-sm text-muted-foreground">Active • 1,823 impressions today</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">6.8% CTR</p>
                  <p className="text-xs text-muted-foreground">234 signups</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Exit Intent Offer</h4>
                    <p className="text-sm text-muted-foreground">Paused • Last active 2 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-muted-foreground">2.1% CTR</p>
                  <p className="text-xs text-muted-foreground">$567 revenue</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
