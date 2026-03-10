import { Card } from '@/components/ui/Card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AreaBlockProps {
  name: string;
  count: number;
  className?: string;
  children?: ReactNode;
}

function AreaBlock({ name, count, className, children }: AreaBlockProps) {
  return (
    <div className={cn("group/area relative rounded-lg flex items-center justify-center cursor-pointer transition-colors", className)}>
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/area:opacity-100 group-hover/area:visible transition-all duration-200 z-50">
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 shadow-xl text-xs text-slate-200 whitespace-nowrap">
          {name}，报警总数：{count}
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </div>
  );
}

export function AreaStats() {
  return (
    <Card title="分辖区告警情况统计" className="h-full">
      <div className="grid grid-cols-12 gap-2 h-full pb-2">
        {/* 3F */}
        <div className="col-span-4 flex flex-col gap-2 h-full">
          <div className="text-xs text-slate-400 mb-1 shrink-0">3F层</div>
          <AreaBlock name="11_09_05" count={100} className="flex-1 bg-blue-600/80 p-2 hover:bg-blue-600 border border-blue-400/30 min-h-0">
            <span className="text-white font-medium">11_09_05</span>
          </AreaBlock>
          <AreaBlock name="AI竞品对标测试" count={45} className="h-[35%] bg-emerald-500/80 p-2 hover:bg-emerald-500 border border-emerald-400/30 shrink-0">
             <span className="text-white font-medium text-xs text-center">AI竞品对标测试</span>
          </AreaBlock>
        </div>

        {/* 2F */}
        <div className="col-span-5 flex flex-col gap-2 h-full">
           <div className="text-xs text-slate-400 mb-1 shrink-0">2F层</div>
           <AreaBlock name="2F层" count={230} className="flex-1 bg-yellow-400/80 p-2 hover:bg-yellow-400 border border-yellow-300/30 min-h-0">
              <span className="text-slate-900 font-bold">2F层</span>
           </AreaBlock>
        </div>

        {/* 1F */}
        <div className="col-span-3 flex flex-col gap-2 h-full">
          <div className="text-xs text-slate-400 mb-1 shrink-0">1F层</div>
          <div className="flex-1 grid grid-cols-2 gap-2 min-h-0">
             <AreaBlock name="test" count={12} className="bg-red-600/80 p-1 hover:bg-red-600 border border-red-400/30">
                <span className="text-white text-[10px]">test</span>
             </AreaBlock>
             <AreaBlock name="1F层-服务" count={8} className="bg-red-400/80 p-1 hover:bg-red-400 border border-red-300/30">
                <span className="text-white text-[10px] writing-vertical">1F层-服务</span>
             </AreaBlock>
             <AreaBlock name="test111" count={34} className="col-span-2 bg-red-800/80 p-1 hover:bg-red-800 border border-red-500/30">
                <span className="text-white text-xs">test111</span>
             </AreaBlock>
          </div>
          <AreaBlock name="1F层-休息区" count={56} className="h-[30%] bg-red-400/80 p-1 hover:bg-red-400 border border-red-300/30 shrink-0">
             <span className="text-white text-xs text-center">1F层-休息区</span>
          </AreaBlock>
        </div>
      </div>
    </Card>
  );
}
