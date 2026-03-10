import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '警告', value: 3, color: '#f43f5e' }, // rose-500
  { name: '故障', value: 2, color: '#f59e0b' }, // amber-500
  { name: '联动', value: 0, color: '#3b82f6' }, // blue-500
  { name: '反馈', value: 0, color: '#10b981' }, // emerald-500
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const chartData = data.filter(d => d.value > 0);

export function DeviceStatus() {
  return (
    <Card title="设备状态" className="h-full flex flex-col">
      <div className="flex-1 flex items-center gap-4 min-h-0 p-2">
        
        {/* Left: Graphical Ring Chart */}
        <div className="w-[45%] h-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData.length > 0 ? chartData : [{ value: 1, color: '#334155' }]}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {(chartData.length > 0 ? chartData : [{ value: 1, color: '#334155' }]).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 leading-none">{total}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">部件总数</div>
          </div>
        </div>

        {/* Right: Graphical Bars */}
        <div className="w-[55%] flex flex-col justify-center gap-3">
          {data.map((item, i) => {
            const percentage = total > 0 ? (item.value / total) * 100 : 0;
            return (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}80` }} />
                    <span className="text-xs text-slate-600 dark:text-slate-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-none">{item.value}</span>
                </div>
                {/* Graphical Progress Bar */}
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.color}`
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Card>
  );
}
