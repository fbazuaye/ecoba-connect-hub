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
  ShoppingBag,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import merchPolo from "@/assets/merch-polo.jpg";
import merchHoodie from "@/assets/merch-hoodie.jpg";
import merchCap from "@/assets/merch-cap.jpg";
import merchMug from "@/assets/merch-mug.jpg";
import sponsorStarsz from "@/assets/sponsor-starsz.png";
import sponsorZane from "@/assets/sponsor-zane.jpg";

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

const merchandise = [
  {
    id: 1,
    name: "ECOBA Classic Polo Shirt",
    price: "₦15,000",
    originalPrice: "₦18,000",
    image: merchPolo,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Alumni Hoodie",
    price: "₦25,000",
    originalPrice: null,
    image: merchHoodie,
    rating: 4.9,
    reviews: 89,
    badge: null,
  },
  {
    id: 3,
    name: "ECOBA Branded Cap",
    price: "₦8,000",
    originalPrice: "₦10,000",
    image: merchCap,
    rating: 4.7,
    reviews: 256,
    badge: null,
  },
  {
    id: 4,
    name: "Premium Coffee Mug",
    price: "₦5,500",
    originalPrice: null,
    image: merchMug,
    rating: 4.6,
    reviews: 178,
    badge: "Popular",
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
              <a href="https://ecobacareerconnect.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="xl">
                  Job/Employment Opportunity
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
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

      {/* Merchandise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block">
                Shop Alumni Merch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Official ECOBA Merchandise
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Show your alumni pride with our exclusive collection of branded merchandise.
              </p>
            </motion.div>
            <Button variant="outline" className="mt-4 md:mt-0">
              <ShoppingBag className="w-4 h-4" />
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandise.map((item, index) => (
              <motion.div
                key={item.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-gold text-forest-dark">
                      {item.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <Button className="w-full" size="sm">
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium text-foreground">{item.rating}</span>
                    <span className="text-sm text-muted-foreground">({item.reviews})</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-muted/50 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Authentic</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Free</div>
                <div className="text-xs text-muted-foreground">Delivery ₦50k+</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">7 Days</div>
                <div className="text-xs text-muted-foreground">Returns</div>
              </div>
            </div>
          </motion.div>

          {/* Banner Adverts Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Trusted Partners
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16 p-6 rounded-2xl bg-card border border-border">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 rounded-xl hover:bg-muted/50 transition-all duration-300"
              >
                <img 
                  src={sponsorStarsz} 
                  alt="Starsz Investments Company Limited" 
                  className="h-16 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <div className="hidden sm:block w-px h-16 bg-border" />
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-4 rounded-xl hover:bg-muted/50 transition-all duration-300"
              >
                <img 
                  src={sponsorZane} 
                  alt="Zane Energy Ltd" 
                  className="h-16 md:h-20 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
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
