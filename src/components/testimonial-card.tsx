
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
        "glass-card p-6 rounded-xl", 
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg 
            className="h-6 w-6 text-primary/60" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-sm mb-4 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          {avatar && (
            <div className="mr-3">
              <img 
                src={avatar} 
                alt={author} 
                className="h-10 w-10 rounded-full"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-sm">{author}</p>
            {role && <p className="text-xs text-muted-foreground">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestimonialCard };
export type { TestimonialCardProps };
