import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  GraduationCap, 
  Building, 
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const donationAmounts = [10000, 25000, 50000, 100000, 1000000];

const causes = [
  {
    id: "scholarship",
    icon: GraduationCap,
    title: "Scholarship Fund",
    description: "Support bright students who lack financial resources to complete their education.",
    raised: 12500000,
    goal: 25000000,
  },
  {
    id: "infrastructure",
    icon: Building,
    title: "Endowment Fund",
    description: "Contribute to building modern facilities and infrastructure for future students.",
    raised: 8750000,
    goal: 50000000,
  },
  {
    id: "library",
    icon: BookOpen,
    title: "E-Library Expansion",
    description: "Help expand our library with new books, digital resources, and study spaces.",
    raised: 3200000,
    goal: 10000000,
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship Program",
    description: "Fund programs that connect students with experienced alumni mentors.",
    raised: 1800000,
    goal: 5000000,
  },
];

const impactStats = [
  { value: "500+", label: "Students Supported" },
  { value: "₦50M+", label: "Total Raised" },
  { value: "25+", label: "Projects Funded" },
  { value: "100%", label: "Transparency" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25000);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("scholarship");

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `₦${(amount / 1000000).toFixed(0)}M`;
    }
    return `₦${amount.toLocaleString()}`;
  };

  const getProgress = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const finalAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount || 0;

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Give Back to Your EC
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Your generous contribution helps support students, build facilities, 
              and strengthen our alumni community for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form & Causes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Make a Donation
                </h2>

                {/* Cause Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select a Cause
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {causes.map((cause) => (
                      <button
                        key={cause.id}
                        onClick={() => setSelectedCause(cause.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedCause === cause.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <cause.icon className={`w-5 h-5 mb-2 ${
                          selectedCause === cause.id ? "text-primary" : "text-muted-foreground"
                        }`} />
                        <div className="font-medium text-sm text-foreground">
                          {cause.title}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          selectedAmount === amount
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {formatCurrency(amount)}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      ₦
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                {/* Donation Summary */}
                {finalAmount > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Donation Amount</span>
                      <span className="font-bold text-foreground">
                        {formatCurrency(finalAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Cause</span>
                      <span className="font-medium text-foreground">
                        {causes.find(c => c.id === selectedCause)?.title}
                      </span>
                    </div>
                  </div>
                )}

                <Button 
                  variant="gold" 
                  size="xl" 
                  className="w-full"
                  disabled={finalAmount < 1000}
                >
                  Donate {finalAmount > 0 && formatCurrency(finalAmount)}
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Secure payment powered by Paystack. Your donation is tax-deductible.
                </p>
              </div>
            </motion.div>

            {/* Causes List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Causes
              </h2>

              <div className="space-y-4">
                {causes.map((cause, index) => (
                  <motion.div
                    key={cause.id}
                    className="bg-card rounded-xl border border-border p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <cause.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {cause.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {cause.description}
                        </p>
                        
                        {/* Progress Bar */}
                        <div className="mb-2">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-gold rounded-full transition-all duration-500"
                              style={{ width: `${getProgress(cause.raised, cause.goal)}%` }}
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-primary">
                            {formatCurrency(cause.raised)} raised
                          </span>
                          <span className="text-muted-foreground">
                            of {formatCurrency(cause.goal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Donate */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4">
                  Why Your Donation Matters
                </h3>
                <ul className="space-y-3">
                  {[
                    "100% of donations go directly to programs",
                    "Tax-deductible contributions",
                    "Regular updates on impact",
                    "Recognition in our donor wall",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
