
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-500 animate-scale", 
        className
      )}
      style={style}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
        <div className="text-primary text-2xl group-hover:text-white transition-colors duration-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-colors duration-500">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">{description}</p>
    </div>
  );
};

export { FeatureCard };
export type { FeatureCardProps };
