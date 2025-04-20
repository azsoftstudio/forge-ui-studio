
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
        "glass-card p-6 flex flex-col items-center text-center hover-scale", 
        className
      )}
      style={style}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/20 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export { FeatureCard };
export type { FeatureCardProps };
