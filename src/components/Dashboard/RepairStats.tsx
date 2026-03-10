import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '未关闭', value: 0, color: '#eab308' },
  { name: '已关闭', value: 1, color: '#22c55e' }, // Dummy value to show chart
];

export function RepairStats() {
  return (
    <Card title="今日维修报修" className="h-full">
      <div className="flex items-center h-full pb-1">
        <div className="w-1/2 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-yellow-500" />
            <div className="text-xs text-slate-300">未关闭 <span className="text-white font-bold ml-1">0</span></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-emerald-500" />
            <div className="text-xs text-slate-300">已关闭 <span className="text-white font-bold ml-1">0</span></div>
          </div>
        </div>
        <div className="w-1/2 h-full relative min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="70%"
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-base font-bold text-slate-100">0</div>
            <div className="text-[8px] text-slate-400">维修报修</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
