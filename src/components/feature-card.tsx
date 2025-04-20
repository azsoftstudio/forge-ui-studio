
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
        "glass-card p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-all duration-300", 
        className
      )}
      style={style}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export { FeatureCard };
export type { FeatureCardProps };
