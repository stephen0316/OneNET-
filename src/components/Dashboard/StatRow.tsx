import { Card } from '@/components/ui/Card';
import { Activity, Wifi, WifiOff, AlertTriangle, ShieldAlert, Database, CheckCircle, Wrench } from 'lucide-react';

export function StatRow() {
  const stats = [
    { label: "消防感知设备", value: "190", icon: Database, color: "text-blue-500" },
    { label: "在线设备", value: "180", icon: Wifi, color: "text-emerald-500" },
    { label: "离线设备", value: "10", icon: WifiOff, color: "text-slate-500" },
    { label: "告警设备", value: "45", icon: AlertTriangle, color: "text-rose-500" },
    { label: "实时风险预警", value: "52", icon: ShieldAlert, color: "text-rose-500" },
    { label: "消防设施总数", value: "11", icon: Database, color: "text-blue-500" },
    { label: "正常设施", value: "11", icon: CheckCircle, color: "text-emerald-500" },
    { label: "报修设施", value: "0", icon: Wrench, color: "text-amber-500" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
      {stats.map((stat, i) => (
        <Card key={i} className="flex flex-col justify-between p-4 bg-slate-900/50 border-slate-800 hover:bg-slate-800/80 transition-colors">
          <div className="flex justify-between items-start w-full">
            <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            <div className={`p-1.5 rounded-full bg-slate-800/80 ${stat.color} opacity-80`}>
              <stat.icon size={16} />
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-slate-100 mt-2">{stat.value}</div>
        </Card>
      ))}
    </div>
  );
}
