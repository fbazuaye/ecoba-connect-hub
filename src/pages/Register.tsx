import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Users, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  GraduationCap,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Access alumni directory & networking",
  "Exclusive event invitations & discounts",
  "Join interest-based community groups",
  "Career mentorship opportunities",
  "Give back through donations",
];

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    graduationYear: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration - will be replaced with actual auth
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "Welcome to ECOBA CONNECT! Please check your email to verify your account.",
      });
      setIsLoading(false);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex">
        {/* Left Panel - Decorative */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary to-forest-dark items-center justify-center p-12">
          <motion.div
            className="text-primary-foreground max-w-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gold/20 flex items-center justify-center mb-8">
              <GraduationCap className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Become Part of Our Community
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Join thousands of alumni who are already connected, 
              networking, and making an impact together.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
          <motion.div
            className="w-full max-w-md py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">ECOBA</span>
                <span className="text-xs text-muted-foreground leading-tight">CONNECT</span>
              </div>
            </Link>

            <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
            <p className="text-muted-foreground mb-8">
              Join our alumni community today
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="graduationYear"
                    name="graduationYear"
                    type="number"
                    placeholder="2015"
                    min="1960"
                    max={currentYear}
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                    required
                    minLength={8}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
