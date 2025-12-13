import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Heart, 
  MessageSquare, 
  ArrowRight, 
  GraduationCap,
  Globe,
  Award,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const stats = [
  { value: "5,000+", label: "Alumni Members", icon: Users },
  { value: "200+", label: "Events Hosted", icon: Calendar },
  { value: "₦50M+", label: "Donations Raised", icon: Heart },
  { value: "50+", label: "Active Groups", icon: MessageSquare },
];

const features = [
  {
    icon: Users,
    title: "Alumni Directory",
    description: "Find and connect with fellow alumni across industries and locations.",
  },
  {
    icon: Calendar,
    title: "Events & Reunions",
    description: "Discover upcoming events, book tickets, and relive cherished memories.",
  },
  {
    icon: Heart,
    title: "Give Back",
    description: "Support scholarships, projects, and causes that matter to our community.",
  },
  {
    icon: MessageSquare,
    title: "Community Groups",
    description: "Join interest-based groups, share experiences, and grow together.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Celebrate alumni achievements and milestones with our community.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access a worldwide network of professionals and opportunities.",
  },
];

const testimonials = [
  {
    quote: "ECOBA CONNECT helped me find my business partner. The networking opportunities are incredible!",
    author: "Adaobi Nwankwo",
    role: "Class of 2015, Entrepreneur",
    avatar: "AN",
  },
  {
    quote: "The platform made it so easy to donate to the scholarship fund. Love seeing my contribution make a difference.",
    author: "Chukwuemeka Obi",
    role: "Class of 2008, Software Engineer",
    avatar: "CO",
  },
  {
    quote: "Reconnecting with classmates after 10 years through this platform was life-changing.",
    author: "Fatima Bello",
    role: "Class of 2012, Medical Doctor",
    avatar: "FB",
  },
];

const upcomingEvents = [
  {
    title: "Annual Alumni Gala 2024",
    date: "March 15, 2024",
    location: "Lagos, Nigeria",
    price: "₦25,000",
  },
  {
    title: "Career Mentorship Workshop",
    date: "February 20, 2024",
    location: "Virtual Event",
    price: "Free",
  },
  {
    title: "Class of 2014 Reunion",
    date: "April 5, 2024",
    location: "Abuja, Nigeria",
    price: "₦15,000",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Alumni networking" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/80 to-forest-dark/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                <GraduationCap className="w-4 h-4" />
                Welcome to Your Alumni Community
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Connect. Engage.{" "}
              <span className="text-gold">Grow Together.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of alumni building meaningful connections, 
              attending exclusive events, and giving back to our community. 
              Your journey with us continues here.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/register">
                <Button variant="gold" size="xl">
                  Join the Community
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="hero-outline" size="xl">
                  Explore Events
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Stay Connected
            </h2>
            <p className="text-muted-foreground">
              Our platform provides all the tools you need to engage with your alumni community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
                Don't Miss Out
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </motion.div>
            <Link to="/events">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All Events
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-2 bg-gradient-to-r from-primary to-gold" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{event.price}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Alumni Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="p-6 rounded-2xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Reconnect?
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Join thousands of alumni who are already part of our growing community. 
              Register today and start making meaningful connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button variant="gold" size="xl">
                  Create Your Profile
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="hero-outline" size="xl">
                  Support Our Cause
                  <Heart className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
