import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, History, TrendingUp, BookOpen, Users, Calendar, MapPin } from "lucide-react";

const suggestedQueries = [
  { icon: BookOpen, text: "History of Edo College Benin City" },
  { icon: Users, text: "Who were the ECOBA executives in 2020?" },
  { icon: Calendar, text: "When was Edo College founded?" },
  { icon: MapPin, text: "List all ECOBA branches worldwide" },
];

const mockResults = [
  {
    title: "History of Edo College Benin City",
    snippet: "Edo College, Benin City was founded in 1937 as one of the premier secondary schools in Nigeria. The institution has produced numerous distinguished alumni across various fields including medicine, law, engineering, and public service...",
    source: "ECOBA Archives",
    date: "Updated 2024",
  },
  {
    title: "ECOBA Executive Council 2020-2022",
    snippet: "The ECOBA National Executive Council for the 2020-2022 tenure was led by Dr. Osaze Omoruyi as President, with Chief Patrick Osagie as Vice President, and Barr. Emmanuel Igbinedion as Secretary General...",
    source: "ECOBA Records",
    date: "2020",
  },
  {
    title: "ECOBA Branches Directory",
    snippet: "ECOBA has established branches across Nigeria and internationally including: Lagos Branch, Abuja Branch, Port Harcourt Branch, UK & Ireland Branch, USA Branch, Canada Branch, and several state chapters...",
    source: "ECOBA Directory",
    date: "Updated 2024",
  },
];

const recentSearches = [
  "Edo College founding date",
  "Notable alumni achievements",
  "ECOBA scholarship programs",
];

export default function AskAI() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<typeof mockResults>([]);

  const handleSearch = async (searchQuery?: string) => {
    const q = searchQuery || query;
    if (!q.trim()) return;
    
    setQuery(q);
    setIsSearching(true);
    setShowResults(false);
    
    // Simulate AI search
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setResults(mockResults);
    setIsSearching(false);
    setShowResults(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-forest-light flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ECOBA <span className="text-primary">AI</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Your intelligent assistant for all things Edo College and ECOBA. 
              Ask about history, events, alumni, branches, and more.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                <div className="flex items-center px-6 py-4">
                  <Search className="w-6 h-6 text-muted-foreground mr-4" />
                  <Input
                    type="text"
                    placeholder="Ask anything about Edo College, ECOBA, alumni..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                  />
                  <Button 
                    onClick={() => handleSearch()}
                    disabled={isSearching || !query.trim()}
                    className="bg-primary hover:bg-forest-light text-primary-foreground px-6 rounded-xl"
                  >
                    {isSearching ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Searching...</span>
                      </div>
                    ) : (
                      <span>Search</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Suggested Queries or Results */}
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-3xl mx-auto"
              >
                {/* Suggested Queries */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>Popular questions</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {suggestedQueries.map((item, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                        onClick={() => handleSearch(item.text)}
                        className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm text-foreground">{item.text}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <History className="w-4 h-4" />
                    <span>Recent searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        onClick={() => handleSearch(search)}
                        className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                      >
                        {search}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
                {/* AI Response Header */}
                <div className="flex items-start gap-4 mb-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-forest-light flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">AI-powered answer</p>
                    <p className="text-foreground">
                      Based on ECOBA archives and records, here's what I found about "{query}":
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-5 hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                              <span className="text-primary font-medium">{result.source}</span>
                              <span>•</span>
                              <span>{result.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                              {result.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {result.snippet}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* New Search Button */}
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setQuery("");
                      setShowResults(false);
                    }}
                    className="rounded-full"
                  >
                    Ask another question
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
}
