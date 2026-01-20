import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Mail, Heart, Package, Clock } from "lucide-react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface Activity {
  email: string;
  productId: string;
  productName: string;
  action: "view" | "add_to_cart" | "purchase";
  timestamp: string;
}

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(JSON.parse(storedUser));
    fetchActivities(JSON.parse(storedUser).email);
  }, [navigate]);

  const fetchActivities = async (email: string) => {
    try {
      const response = await fetch("/api/activity/all");
      const allActivities = await response.json();
      const userActivities = allActivities.filter(
        (activity: Activity) => activity.email === email
      );
      setActivities(userActivities);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return null;
  }

  const getActionLabel = (action: string) => {
    switch (action) {
      case "view":
        return "Viewed";
      case "add_to_cart":
        return "Added to cart";
      case "purchase":
        return "Purchased";
      default:
        return action;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case "view":
        return <Heart className="w-4 h-4" />;
      case "add_to_cart":
        return <Package className="w-4 h-4" />;
      case "purchase":
        return <Heart className="w-4 h-4 fill-red-500 text-red-500" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Profile Header */}
          <div className="bg-card rounded-2xl p-6 border border-border mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                  {user.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-xl">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          {/* Activity History */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">
              Activity History
            </h2>

            {loading ? (
              <p className="text-muted-foreground">Loading activities...</p>
            ) : activities.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No activity yet. Start exploring our products!
              </p>
            ) : (
              <div className="space-y-3">
                {activities.reverse().map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {getActionIcon(activity.action)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">
                          {activity.productName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {getActionLabel(activity.action)}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(activity.timestamp).toLocaleDateString()} at{" "}
                      {new Date(activity.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
