import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { LogOut, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="flex items-center gap-4">
        <div className="text-slate-400 font-mono text-sm tracking-widest">
          {format(time, 'yyyy-MM-dd HH:mm:ss')}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight uppercase flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-cyan-500" />
          {title}
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mt-1" />
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 rounded-lg transition-all text-sm font-medium">
          <LogOut size={16} />
          退出
        </button>
      </div>
    </header>
  );
}
