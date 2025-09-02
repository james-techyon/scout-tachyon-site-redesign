import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { WorkflowDemo } from "@/components/WorkflowDemo";
import { TechyonIcons } from "@/components/TechyonIcons";

const solutions = [
  {
    id: "automation",
    title: "Intelligent Automation Studio",
    tagline: "Your processes, perfected by AI",
    description: "Eliminate 80% of manual data entry - watch your team focus on strategic work while AI handles the routine",
    metric: "Average 75% time reduction",
    icon: TechyonIcons.Automation,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    demo: "Interactive workflow builder"
  },
  {
    id: "ai",
    title: "AI Integration Lab",
    tagline: "Transform data chaos into business intelligence",
    description: "Turn unstructured documents into actionable insights with 99.2% accuracy using advanced AI processing",
    metric: "99.2% accuracy improvement",
    icon: TechyonIcons.AIProcessing,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    demo: "Document processing in real-time"
  },
  {
    id: "integration",
    title: "System Harmony Platform",
    tagline: "Connect everything, break nothing",
    description: "Seamless integrations that just work - from legacy systems to cutting-edge cloud platforms",
    metric: "Zero downtime migrations guaranteed",
    icon: TechyonIcons.Integration,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    demo: "Live integration simulator"
  },
  {
    id: "data",
    title: "Data Intelligence Engine",
    tagline: "See the future in your data",
    description: "Predictive analytics that turn your data into competitive advantage with actionable insights",
    metric: "3x faster decision making",
    icon: TechyonIcons.DataIntelligence,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    demo: "Predictive model playground"
  },
  {
    id: "consulting",
    title: "Strategic Innovation Consulting",
    tagline: "Your roadmap to digital excellence",
    description: "Transform your business with proven strategies that deliver measurable ROI in weeks, not months",
    metric: "Average ROI: 340%",
    icon: TechyonIcons.StrategyConsulting,
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    demo: "Transformation assessment tool"
  }
];

const stats = [
  { label: "Time Saved", value: "75%", icon: TechyonIcons.TimeSaved },
  { label: "ROI Improvement", value: "340%", icon: TechyonIcons.ROI },
  { label: "Client Satisfaction", value: "98%", icon: TechyonIcons.Success },
  { label: "Project Success Rate", value: "100%", icon: TechyonIcons.Accuracy }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  // Refs for intersection observer
  const statsRef = useRef<HTMLElement>(null);
  const solutionsRef = useRef<HTMLElement>(null);
  const performanceRef = useRef<HTMLElement>(null);
  const clientsRef = useRef<HTMLElement>(null);
  
  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );
    
    const sections = [statsRef.current, solutionsRef.current, performanceRef.current, clientsRef.current];
    sections.forEach(section => section && observer.observe(section));
    
    return () => sections.forEach(section => section && observer.unobserve(section));
  }, []);
  
  // Smooth parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Apply parallax to background elements
      const parallaxElements = document.querySelectorAll('.animate-parallax');
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translate3d(0, ${rate * 0.1}px, 0)`;
      });
    };
    
    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-serif font-semibold">Techyon</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
                <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">Industries</a>
                <a href="#success" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a>
                <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex">Sign In</Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Start Your Transformation
              </Button>
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <TechyonIcons.Close /> : <TechyonIcons.Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background">
            <div className="px-4 py-6 space-y-4">
              <a href="#solutions" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
              <a href="#industries" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Industries</a>
              <a href="#success" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Success Stories</a>
              <a href="#resources" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Resources</a>
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                  Start Your Transformation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse-slow animate-parallax" />
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4 animate-slide-up animate-bounce-gentle">
              <TechyonIcons.Automation className="w-3 h-3 mr-1 animate-icon-hover" />
              Automation Orchestration Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight animate-slide-up animate-stagger-delay-1">
              Transform your business into a{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-[oklch(0.78_0.15_190)] bg-clip-text text-transparent animate-gradient animate-text-shimmer">
                high-performance automation symphony
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in animate-stagger-delay-2">
              Every process optimized. Every integration seamless. Every outcome measurable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animate-stagger-delay-3">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 group animate-button-press animate-scale-hover">
                <TechyonIcons.Play className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:animate-bounce transition-transform" />
                See Automation in Action
              </Button>
              <Button variant="outline" size="lg" className="animate-button-press animate-scale-hover">
                Schedule Consultation
                <TechyonIcons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} id="stats" className="py-16 bg-muted/30 parallax-layer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`text-center group animate-reveal animate-stagger-delay-${index + 1} animate-magnetic`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 animate-glow group-hover:animate-bounce animate-sparkle">
                    <IconComponent className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold text-foreground animate-metric-counter animate-typing">{stat.value}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} id="solutions" className="py-24 parallax-layer">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Five Solutions. Infinite Possibilities.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intelligent automation to strategic consulting, we orchestrate technology solutions that transform businesses.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card 
                  key={solution.id} 
                  className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20 animate-card-hover animate-fade-in animate-stagger-delay-${index + 1}`}
                  onClick={() => setActiveDemo(activeDemo === solution.id ? null : solution.id)}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform animate-icon-hover`}>
                      <IconComponent className="w-6 h-6 text-white group-hover:animate-bounce" />
                    </div>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                    <p className="text-sm font-medium text-primary animate-text-shimmer">{solution.tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{solution.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs animate-metric-counter">
                        {solution.metric}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 animate-button-press">
                        <TechyonIcons.Play className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform" />
                        Demo
                      </Button>
                    </div>
                    {activeDemo === solution.id && (
                      <div className="mt-4 animate-slide-up">
                        <WorkflowDemo type={solution.id as 'automation' | 'ai' | 'integration' | 'data' | 'consulting'} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section ref={performanceRef} id="performance" className="py-24 bg-muted/20 parallax-layer">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 animate-typing">
              Measurable Results. Proven Impact.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-stagger-delay-1">
              Our automation solutions deliver quantifiable improvements across all business metrics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 group animate-zoom-in animate-stagger-delay-1 animate-magnetic hover:animate-glow">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-metric-counter group-hover:animate-bounce">75%</div>
              <div className="text-sm font-medium text-blue-800 mb-1 group-hover:text-blue-900 transition-colors">Average Time Saved</div>
              <div className="text-xs text-blue-600 group-hover:text-blue-700 transition-colors">Per automated process</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 group animate-zoom-in animate-stagger-delay-2 animate-magnetic hover:animate-glow">
              <div className="text-4xl font-bold text-green-600 mb-2 animate-metric-counter group-hover:animate-bounce">99.2%</div>
              <div className="text-sm font-medium text-green-800 mb-1 group-hover:text-green-900 transition-colors">Accuracy Rate</div>
              <div className="text-xs text-green-600 group-hover:text-green-700 transition-colors">AI-powered processing</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 group animate-zoom-in animate-stagger-delay-3 animate-magnetic hover:animate-glow">
              <div className="text-4xl font-bold text-purple-600 mb-2 animate-metric-counter group-hover:animate-bounce">340%</div>
              <div className="text-sm font-medium text-purple-800 mb-1 group-hover:text-purple-900 transition-colors">Average ROI</div>
              <div className="text-xs text-purple-600 group-hover:text-purple-700 transition-colors">Within first year</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 group animate-zoom-in animate-stagger-delay-4 animate-magnetic hover:animate-glow">
              <div className="text-4xl font-bold text-orange-600 mb-2 animate-metric-counter group-hover:animate-bounce">100%</div>
              <div className="text-sm font-medium text-orange-800 mb-1 group-hover:text-orange-900 transition-colors">Success Rate</div>
              <div className="text-xs text-orange-600 group-hover:text-orange-700 transition-colors">Project delivery</div>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 p-8 animate-reveal animate-stagger-delay-5 animate-sparkle">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold mb-4 animate-slide-up">Ready to see these results in your business?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in animate-stagger-delay-1">
                Join hundreds of organizations that have transformed their operations with Techyon's automation platform
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-button-press animate-scale-hover group">
                Schedule Your Assessment
                <TechyonIcons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Client Success Section */}
      <section ref={clientsRef} id="clients" className="py-24 parallax-layer">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 animate-typing">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-stagger-delay-1">
              From startups to Fortune 500 companies, organizations worldwide choose Techyon for automation excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 group animate-reveal animate-stagger-delay-1 animate-card-hover animate-magnetic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-wave">
                  <span className="text-white font-bold text-lg group-hover:animate-bounce">B</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold group-hover:text-blue-600 transition-colors">Global Bank</div>
                  <div className="text-sm text-muted-foreground group-hover:text-blue-500 transition-colors">Financial Services</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                "Techyon's automation platform reduced our loan processing time by 80% while maintaining 100% compliance."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors animate-sparkle">80% faster</Badge>
                <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors animate-sparkle">$2M saved</Badge>
              </div>
            </Card>
            
            <Card className="p-6 group animate-reveal animate-stagger-delay-2 animate-card-hover animate-magnetic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-wave">
                  <span className="text-white font-bold text-lg group-hover:animate-bounce">H</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold group-hover:text-green-600 transition-colors">Healthcare Network</div>
                  <div className="text-sm text-muted-foreground group-hover:text-green-500 transition-colors">Healthcare</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                "Patient data processing is now 99.5% accurate with zero manual intervention required."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="group-hover:bg-green-100 group-hover:text-green-800 transition-colors animate-sparkle">99.5% accuracy</Badge>
                <Badge variant="secondary" className="group-hover:bg-green-100 group-hover:text-green-800 transition-colors animate-sparkle">24/7 processing</Badge>
              </div>
            </Card>
            
            <Card className="p-6 group animate-reveal animate-stagger-delay-3 animate-card-hover animate-magnetic">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform animate-wave">
                  <span className="text-white font-bold text-lg group-hover:animate-bounce">M</span>
                </div>
                <div className="ml-3">
                  <div className="font-semibold group-hover:text-purple-600 transition-colors">Manufacturing Corp</div>
                  <div className="text-sm text-muted-foreground group-hover:text-purple-500 transition-colors">Manufacturing</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors">
                "Our supply chain automation delivered 400% ROI in the first year of implementation."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary" className="group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors animate-sparkle">400% ROI</Badge>
                <Badge variant="secondary" className="group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors animate-sparkle">Real-time sync</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-parallax" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up animate-glow">
            Ready to orchestrate your transformation?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-delay-1">
            Join industry leaders who trust Techyon to automate their most critical processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal animate-stagger-delay-2">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 group animate-button-press animate-magnetic animate-sparkle">
              Schedule Free Consultation
              <TechyonIcons.Play className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group animate-button-press animate-magnetic">
              Download Case Studies
              <TechyonIcons.ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-serif font-semibold">Techyon</span>
              </div>
              <p className="text-muted-foreground">
                Efficiency Engineering. Automation Orchestration. Digital Excellence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Intelligent Automation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AI Integration</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">System Integration</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Data Intelligence</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Banking & Finance</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Manufacturing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Insurance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Techyon. All rights reserved. Orchestrating automation excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
