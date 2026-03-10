import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className, title, action, children, noPadding = false, ...props }) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col bg-slate-900/80 border border-slate-800 backdrop-blur-sm rounded-xl shadow-sm transition-all duration-300 text-slate-100",
        "dark:hover:border-slate-700 hover:shadow-md",
        "group",
        className
      )} 
      {...props}
    >
      {/* Tech decoration corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50 rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50 rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50 rounded-bl-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50 rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity" />

      {(title || action) && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/50 bg-slate-900/30">
          {title && (
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-3 bg-cyan-500 rounded-full inline-block" />
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={cn("flex-1 flex flex-col min-h-0", !noPadding && "p-4")}>
        {children}
      </div>
    </div>
  );
}
