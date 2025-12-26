import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  Users, 
  MessageSquare,
  MapPin,
  Briefcase,
  GraduationCap,
  Globe,
  Plus,
  Check
} from "lucide-react";

const groups = [
  {
    id: 1,
    name: "Tech Professionals Network",
    description: "Connect with alumni working in technology, share insights, and explore opportunities.",
    members: 1250,
    posts: 342,
    category: "Industry",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Class of 2015",
    description: "Stay connected with your classmates, share updates, and plan reunions.",
    members: 456,
    posts: 128,
    category: "Class Year",
    icon: GraduationCap,
    color: "bg-primary",
  },
  {
    id: 3,
    name: "Lagos Alumni Chapter",
    description: "For alumni based in Lagos. Local events, networking, and community support.",
    members: 2100,
    posts: 567,
    category: "Location",
    icon: MapPin,
    color: "bg-gold",
  },
  {
    id: 4,
    name: "Healthcare Professionals",
    description: "Doctors, nurses, pharmacists, and healthcare workers building better health outcomes.",
    members: 890,
    posts: 234,
    category: "Industry",
    icon: Briefcase,
    color: "bg-red-500",
  },
  {
    id: 5,
    name: "Abuja Alumni Chapter",
    description: "Connect with fellow alumni in the Federal Capital Territory.",
    members: 1450,
    posts: 389,
    category: "Location",
    icon: MapPin,
    color: "bg-green-500",
  },
  {
    id: 6,
    name: "International Alumni",
    description: "For alumni living and working outside Nigeria. Global perspectives and opportunities.",
    members: 780,
    posts: 156,
    category: "Location",
    icon: Globe,
    color: "bg-purple-500",
  },
  {
    id: 7,
    name: "Entrepreneurs Hub",
    description: "Business owners, founders, and aspiring entrepreneurs sharing experiences.",
    members: 1680,
    posts: 478,
    category: "Industry",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    id: 8,
    name: "Benin Alumni Chapter",
    description: "Connect with alumni in Benin City. Local events, networking, and community support.",
    members: 523,
    posts: 201,
    category: "Location",
    icon: MapPin,
    color: "bg-teal-500",
  },
];

const categories = ["All", "Industry", "Class Year", "Location"];

export default function Groups() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [joinedGroups, setJoinedGroups] = useState<number[]>([]);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDescription, setNewGroupDescription] = useState("");
  const [newGroupCategory, setNewGroupCategory] = useState("");
  const { toast } = useToast();

  const handleJoinGroup = (groupId: number, groupName: string) => {
    if (joinedGroups.includes(groupId)) {
      setJoinedGroups(joinedGroups.filter(id => id !== groupId));
      toast({
        title: "Left Group",
        description: `You have left ${groupName}`,
      });
    } else {
      setJoinedGroups([...joinedGroups, groupId]);
      toast({
        title: "Joined Group!",
        description: `You are now a member of ${groupName}`,
      });
    }
  };

  const handleCreateGroup = () => {
    if (!newGroupName.trim() || !newGroupDescription.trim() || !newGroupCategory) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to create a group",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Group Created!",
      description: `${newGroupName} has been created successfully. It will be reviewed and published soon.`,
    });
    
    setNewGroupName("");
    setNewGroupDescription("");
    setNewGroupCategory("");
    setCreateDialogOpen(false);
  };

  const filteredGroups = groups.filter((group) => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-forest-dark">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Community Groups
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join groups based on your interests, industry, class year, or location. 
              Connect with like-minded alumni and grow together.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/95 border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="gold">
                  <Plus className="w-4 h-4" />
                  Create Group
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create a New Group</DialogTitle>
                  <DialogDescription>
                    Start a community for alumni with shared interests, industries, or locations.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="group-name">Group Name</Label>
                    <Input
                      id="group-name"
                      placeholder="e.g., Class of 2010"
                      value={newGroupName}
                      onChange={(e) => setNewGroupName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="group-category">Category</Label>
                    <Select value={newGroupCategory} onValueChange={setNewGroupCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Industry">Industry</SelectItem>
                        <SelectItem value="Class Year">Class Year</SelectItem>
                        <SelectItem value="Location">Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="group-description">Description</Label>
                    <Textarea
                      id="group-description"
                      placeholder="Describe what this group is about..."
                      value={newGroupDescription}
                      onChange={(e) => setNewGroupDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
                <Button variant="gold" onClick={handleCreateGroup} className="w-full">
                  Create Group
                </Button>
              </DialogContent>
            </Dialog>
          </div>

          {/* Groups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGroups.map((group, index) => (
              <motion.article
                key={group.id}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Group Header */}
                <div className={`h-20 ${group.color} relative`}>
                  <div className="absolute -bottom-6 left-6">
                    <div className="w-12 h-12 rounded-xl bg-card border-2 border-card flex items-center justify-center shadow-md">
                      <group.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Group Details */}
                <div className="p-6 pt-10">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {group.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {group.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {group.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {group.members.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {group.posts}
                    </div>
                  </div>

                  <Button 
                    variant={joinedGroups.includes(group.id) ? "default" : "outline"} 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleJoinGroup(group.id, group.name)}
                  >
                    {joinedGroups.includes(group.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        Joined
                      </>
                    ) : (
                      "Join Group"
                    )}
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No groups found matching your criteria.</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Can't Find Your Group?
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a new group for your class year, industry, or interest. 
              Bring together alumni who share your passions.
            </p>
            <Button variant="gold" size="lg" onClick={() => setCreateDialogOpen(true)}>
              <Plus className="w-5 h-5" />
              Start a New Group
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
