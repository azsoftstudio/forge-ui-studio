
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  avatar, 
  className,
  style
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 animate-scale", 
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <svg 
              className="h-6 w-6 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <p className="text-lg mb-6 text-white/80 leading-relaxed flex-grow">{quote}</p>
        <div className="flex items-center mt-auto pt-6 border-t border-white/10">
          {avatar && (
            <div className="mr-4">
              <img 
                src={avatar} 
                alt={author} 
                className="h-12 w-12 rounded-xl object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{author}</p>
            {role && <p className="text-sm text-white/60">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
export type { TestimonialCardProps };
