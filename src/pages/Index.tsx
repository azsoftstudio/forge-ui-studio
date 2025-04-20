import React from "react";
import { Navbar } from "@/components/navbar";
import { CustomButton } from "@/components/ui/custom-button";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Grid, MonitorPlay, Layout, Layers, Film } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-forge-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Design Smarter. <br />
                <span className="text-gradient">Build Faster.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                A powerful Unity plugin that allows developers to visually design, customize, and animate user interfaces—like Figma, but made for Unity.
              </p>
              <div className="flex flex-wrap gap-4">
                <CustomButton variant="primary" className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  Download
                </CustomButton>
                <CustomButton variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  View on GitHub
                </CustomButton>
                <CustomButton variant="outline" className="animate-slide-up" style={{ animationDelay: "0.5s" }}>
                  Watch Demo
                </CustomButton>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in animate-float" style={{ animationDelay: "0.3s" }}>
              <div className="glass-card p-4 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                  alt="UI Forge Interface Preview" 
                  className="rounded-lg w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-forge-darker">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create beautiful and responsive user interfaces for your Unity games and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Grid size={32} />}
              title="Grid System"
              description="Precisely position UI elements with a flexible grid system that makes alignment easy."
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
            <FeatureCard 
              icon={<MonitorPlay size={32} />}
              title="Preview Mode"
              description="Instantly see your changes with a real-time preview that accurately reflects the final result."
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <FeatureCard 
              icon={<Layout size={32} />}
              title="Responsive UI"
              description="Create interfaces that adapt to different screen sizes with responsive design tools."
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
            <FeatureCard 
              icon={<Film size={32} />}
              title="Animation Panel"
              description="Design complex animations with an intuitive timeline-based animation editor."
              className="animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            />
            <FeatureCard 
              icon={<Layers size={32} />}
              title="Hybrid Elements"
              description="Mix and match standard Unity UI components with custom elements for complete flexibility."
              className="animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            />
            <FeatureCard 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z" fill="currentColor" />
              </svg>}
              title="Component Library"
              description="Access a growing library of pre-designed UI components to speed up your workflow."
              className="animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how UI Forge can transform your Unity UI development workflow.
            </p>
          </div>
          
          <div className="relative aspect-video glass-card overflow-hidden rounded-xl mx-auto max-w-4xl animate-fade-in hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="UI Forge Demo" 
              className="w-full h-full object-cover opacity-50 transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-forge-darker">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Developers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the developers who use UI Forge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="UI Forge has cut our UI development time in half. The animation tools alone are worth the price."
              author="Sarah Chen"
              role="Lead Developer, Quantum Games"
              className="animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
            <TestimonialCard 
              quote="As an indie developer, I can now create professional-looking UIs without hiring a dedicated designer."
              author="Marcus Johnson"
              role="Indie Game Developer"
              className="animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            />
            <TestimonialCard 
              quote="The responsive design features saved us countless hours when porting our game to mobile platforms."
              author="Elena Rodriguez"
              role="UI/UX Director, GameCraft Studios"
              className="animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-card p-12 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your UI Workflow?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Join thousands of developers who are building better user interfaces faster with UI Forge.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <CustomButton variant="primary" size="lg" className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  Download UI Forge
                </CustomButton>
                <CustomButton variant="outline" size="lg" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  View Documentation
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-forge-darker border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" fill="white" />
                    <rect x="8" y="0" width="8" height="8" fill="#9b87f5" />
                    <rect x="0" y="8" width="8" height="8" fill="#7E69AB" />
                    <rect x="8" y="8" width="8" height="8" fill="white" />
                  </svg>
                </div>
                <span className="text-xl font-bold">UI Forge</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                A powerful Unity plugin for visually designing, customizing, and animating user interfaces.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Examples</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                    </svg>
                    Reddit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} UI Forge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
