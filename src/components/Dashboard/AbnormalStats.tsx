import { Card } from '@/components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    name: '火警',
    total: 0,
    details: {
      未处理: 0,
      已处理: 0,
    },
    color: '#ef4444', // red-500
  },
  {
    name: '故障',
    total: 0,
    details: {
      未处理: 0, // Combining 未报修, 未维修, 维修中 into 未处理? Or keep original?
      已处理: 0,
    },
    color: '#eab308', // yellow-500
  },
  {
    name: '其他异常',
    total: 0,
    details: {
      联动: 0,
      反馈: 0,
      屏蔽: 0,
      监管: 0,
    },
    color: '#3b82f6', // blue-500
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-lg shadow-xl">
        <div className="text-sm font-bold mb-2" style={{ color: data.color }}>{label}</div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {Object.entries(data.details).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-xs text-slate-400">{key}</span>
              <span className="text-lg font-mono font-bold text-slate-200">{value as number}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function AbnormalStats() {
  return (
    <Card title="今日异常数据" className="h-full flex flex-col">
      <div className="flex-1 min-h-0 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: '#334155', opacity: 0.4 }}
            />
            <Bar dataKey="total" radius={[4, 4, 0, 0]} maxBarSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
