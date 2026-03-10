import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const pieData = [
  { name: '火警', value: 4, color: '#f43f5e' }, // rose-500
  { name: '故障', value: 2, color: '#f59e0b' }, // amber-500
  { name: '联动', value: 1, color: '#3b82f6' }, // blue-500
  { name: '屏蔽', value: 1, color: '#64748b' }, // slate-500
  { name: '其他', value: 1, color: '#8b5cf6' }, // violet-500
];

const areaData = [
  { month: '2025-04', fire: 10, fault: 15, linkage: 8, shield: 5, other: 3 },
  { month: '2025-05', fire: 15, fault: 12, linkage: 10, shield: 6, other: 4 },
  { month: '2025-06', fire: 12, fault: 18, linkage: 12, shield: 8, other: 5 },
  { month: '2025-07', fire: 30, fault: 25, linkage: 15, shield: 10, other: 6 },
  { month: '2025-08', fire: 45, fault: 30, linkage: 20, shield: 12, other: 8 },
  { month: '2025-11', fire: 520, fault: 45, linkage: 25, shield: 15, other: 10 },
  { month: '2025-12', fire: 20, fault: 20, linkage: 10, shield: 5, other: 2 },
];

export function RiskChart() {
  return (
    <Card title="风险告警事件统计" className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full pb-2">
        {/* Pie Chart */}
        <div className="h-full relative min-h-0 flex flex-col">
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0.2)" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg)', borderColor: 'var(--tooltip-border)', color: 'var(--tooltip-text)' }}
                  itemStyle={{ color: 'var(--tooltip-text)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">9</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">总事件</div>
            </div>
          </div>
          
          {/* Custom Legend */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pb-2">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-slate-600 dark:text-slate-400">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Area Chart */}
        <div className="h-[250px] md:h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFire" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-stroke)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="var(--axis-stroke)" 
                fontSize={10} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="var(--axis-stroke)" 
                fontSize={10} 
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--tooltip-bg)', borderColor: 'var(--tooltip-border)', color: 'var(--tooltip-text)' }}
              />
              {/* Fire - Main Area */}
              <Area 
                type="monotone" 
                dataKey="fire" 
                name="火警"
                stroke="#f43f5e" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorFire)" 
              />
              {/* Other Lines */}
              <Area type="monotone" dataKey="fault" name="故障" stroke="#f59e0b" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="linkage" name="联动" stroke="#3b82f6" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="shield" name="屏蔽" stroke="#64748b" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="other" name="其他" stroke="#8b5cf6" strokeWidth={2} fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
