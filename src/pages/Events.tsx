import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  Filter,
  Clock,
  ArrowRight
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Alumni Gala 2024",
    description: "Join us for an evening of celebration, networking, and recognition of outstanding alumni achievements.",
    date: "March 15, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Eko Hotels, Lagos",
    price: 25000,
    attendees: 450,
    category: "Gala",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Career Mentorship Workshop",
    description: "Connect with industry leaders and get personalized career guidance for your professional growth.",
    date: "February 20, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual Event",
    price: 0,
    attendees: 200,
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Class of 2014 Reunion",
    description: "Celebrate 10 years since graduation with your classmates. Relive memories and create new ones.",
    date: "April 5, 2024",
    time: "4:00 PM - 10:00 PM",
    location: "Transcorp Hilton, Abuja",
    price: 15000,
    attendees: 120,
    category: "Reunion",
    image: "https://images.unsplash.com/photo-1529543544277-750e09c60f93?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Tech Alumni Meetup",
    description: "Monthly gathering of alumni in the technology sector. Share insights, network, and collaborate.",
    date: "February 28, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Co-Creation Hub, Lagos",
    price: 5000,
    attendees: 75,
    category: "Networking",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Alumni Sports Day",
    description: "A fun-filled day of sports, games, and friendly competition among alumni and their families.",
    date: "March 30, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "University Sports Complex",
    price: 10000,
    attendees: 300,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934- voices-for-africa-a-african-american-woman-in-a-yellow-tank-top-holds-a-basketball?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Entrepreneurship Summit",
    description: "Learn from successful alumni entrepreneurs and discover opportunities for collaboration and investment.",
    date: "April 20, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Four Points by Sheraton, Lagos",
    price: 20000,
    attendees: 150,
    category: "Conference",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Gala", "Workshop", "Reunion", "Networking", "Sports", "Conference"];

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price: number) => {
    if (price === 0) return "Free";
    return `₦${price.toLocaleString()}`;
  };

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
              Upcoming Events
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Discover and register for exciting alumni events, reunions, and networking opportunities.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/95 border-0 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Events */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.article
                key={event.id}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-gold text-forest-dark text-xs font-bold">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-background/90 text-foreground text-sm font-bold">
                      {formatPrice(event.price)}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {event.attendees} attending
                    </div>
                  </div>

                  <Button className="w-full" variant="gold">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
