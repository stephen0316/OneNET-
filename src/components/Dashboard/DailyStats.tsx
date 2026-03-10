import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function DailyStats() {
  const repairData = [
    { name: '未关闭', value: 0, color: '#eab308' },
    { name: '已关闭', value: 1, color: '#22c55e' },
  ];

  return (
    <Card title="今日运营数据" className="h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-between gap-3 px-3 pt-3 pb-5 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        
        {/* Section 1: Abnormal Stats */}
        <div className="space-y-3 shrink-0">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <span className="w-1 h-3 bg-red-500 rounded-full"></span>
            异常概览
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {/* Fire */}
            <div className="group/fire relative bg-red-500/10 border border-red-500/20 rounded-lg p-3 cursor-pointer hover:bg-red-500/20 transition-colors">
              <div className="text-xs text-red-400 mb-1">火警</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-red-500">0</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/fire:opacity-100 group-hover/fire:visible transition-all duration-200 z-50">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 shadow-xl">
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-slate-400">未处理: </span>
                      <span className="text-red-400 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-400">已处理: </span>
                      <span className="text-slate-200 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
            {/* Fault */}
            <div className="group/fault relative bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 cursor-pointer hover:bg-yellow-500/20 transition-colors">
              <div className="text-xs text-yellow-400 mb-1">故障</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-yellow-500">0</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/fault:opacity-100 group-hover/fault:visible transition-all duration-200 z-50">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 shadow-xl">
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-slate-400">未处理: </span>
                      <span className="text-yellow-400 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-400">已处理: </span>
                      <span className="text-slate-200 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
            {/* Other */}
            <div className="group/other relative bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 col-span-2 flex justify-between items-center cursor-pointer hover:bg-blue-500/20 transition-colors">
              <div className="text-xs text-blue-400">其他异常</div>
              <div className="text-xl font-bold text-blue-500">0</div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/other:opacity-100 group-hover/other:visible transition-all duration-200 z-50">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-2 shadow-xl">
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-slate-400">联动: </span>
                      <span className="text-blue-400 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-400">反馈: </span>
                      <span className="text-blue-400 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-400">屏蔽: </span>
                      <span className="text-blue-400 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-400">监管: </span>
                      <span className="text-blue-400 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-slate-800/50 w-full shrink-0" />

        {/* Section 2: Repair Stats */}
        <div className="shrink-0">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2 mb-2">
            <span className="w-1 h-3 bg-yellow-500 rounded-full"></span>
            维修报修
          </h4>
          <div className="flex items-center h-[90px]">
            <div className="w-1/2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="text-xs text-slate-300">未关闭 <span className="text-white font-bold ml-1">0</span></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="text-xs text-slate-300">已关闭 <span className="text-white font-bold ml-1">0</span></div>
              </div>
            </div>
            <div className="w-1/2 h-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={repairData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {repairData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-lg font-bold text-slate-100">0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-slate-800/50 w-full shrink-0" />

        {/* Section 3: Patrol Stats */}
        <div className="flex-1 min-h-0 flex flex-col gap-2 relative -top-1">
          <h4 className="text-sm font-medium text-slate-300 flex items-center gap-2 shrink-0">
            <span className="w-1 h-3 bg-emerald-500 rounded-full"></span>
            巡查检查
          </h4>
          
          <div className="flex-1 flex flex-col justify-between gap-2">
            {/* Route Progress */}
            <div className="bg-slate-800/30 rounded p-2.5">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-400">巡查路线</span>
                <span className="text-slate-200">0 / 4</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[0%]"></div>
              </div>
            </div>

            {/* Points Progress */}
            <div className="bg-slate-800/30 rounded p-2.5">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-400">巡查点位</span>
                <span className="text-slate-200">0 / 5</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[0%]"></div>
              </div>
            </div>

            {/* Check Status */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                <div className="text-xs text-emerald-400 mb-0.5">正常</div>
                <div className="font-bold text-emerald-500 text-lg">0</div>
              </div>
              <div className="text-center p-2 bg-red-500/10 rounded border border-red-500/20">
                <div className="text-xs text-red-400 mb-0.5">异常</div>
                <div className="font-bold text-red-500 text-lg">0</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
}
