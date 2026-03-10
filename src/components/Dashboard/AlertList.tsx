import { Card } from '@/components/ui/Card';
import { AlertCircle, Flame, Wrench, Activity } from 'lucide-react';

const alerts = [
  { id: 1, time: '2025-07-28 15:33:54', title: '0机 1-14-回路014-火警', type: 'fire' },
  { id: 2, time: '2025-07-28 15:04:27', title: '0机 1-1-回路001-故障', type: 'fault' },
  { id: 3, time: '2025-04-02 05:25:48', title: '3机 1-4--火警', type: 'fire' },
  { id: 4, time: '2025-04-02 04:51:53', title: '3机 1-7--火警', type: 'fire' },
  { id: 5, time: '2024-11-17 16:48:11', title: '866534060016384-青鸟工商-离线', type: 'offline' },
  { id: 6, time: '2024-11-17 16:48:11', title: '866534060016384-青鸟工商-离线', type: 'offline' },
  { id: 7, time: '2024-11-17 16:48:11', title: '866534060016384-青鸟工商-离线', type: 'offline' },
  { id: 8, time: '2024-10-15 09:22:10', title: '1机 2-5-回路005-故障', type: 'fault' },
  { id: 9, time: '2024-10-15 09:20:05', title: '1机 2-8-回路008-火警', type: 'fire' },
  { id: 10, time: '2024-09-01 14:11:33', title: '5机 1-12-回路012-屏蔽', type: 'offline' },
  { id: 11, time: '2024-08-22 11:05:45', title: '2机 3-1-回路001-联动', type: 'linkage' },
  { id: 12, time: '2024-08-22 10:55:12', title: '2机 3-2-回路002-联动', type: 'linkage' },
  { id: 13, time: '2024-07-10 08:30:00', title: '4机 1-6-回路006-故障', type: 'fault' },
  { id: 14, time: '2024-07-10 08:25:15', title: '4机 1-9-回路009-故障', type: 'fault' },
];

export function AlertList() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'fire': return <Flame className="text-rose-500" size={16} />;
      case 'fault': return <Wrench className="text-amber-500" size={16} />;
      case 'linkage': return <Activity className="text-blue-500" size={16} />;
      default: return <AlertCircle className="text-slate-500" size={16} />;
    }
  };

  return (
    <Card title="警情信息" className="h-full flex flex-col min-h-0 hover-pause">
      <div className="flex-1 overflow-hidden pr-2 min-h-0 relative mask-gradient">
        <div className="animate-scroll-vertical space-y-2 py-2">
          {/* Original List */}
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className="flex items-center gap-3 p-3 rounded bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors text-sm cursor-pointer group"
            >
              <div className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                {getIcon(alert.type)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-slate-100 truncate font-medium group-hover:text-white transition-colors">{alert.title}</span>
                <span className="text-slate-500 text-xs font-mono">{alert.time}</span>
              </div>
            </div>
          ))}
          {/* Duplicated List for Seamless Scroll */}
          {alerts.map((alert) => (
            <div 
              key={`${alert.id}-dup`} 
              className="flex items-center gap-3 p-3 rounded bg-slate-800/30 border border-slate-800/50 hover:bg-slate-800/50 transition-colors text-sm cursor-pointer group"
            >
              <div className="shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                {getIcon(alert.type)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-slate-100 truncate font-medium group-hover:text-white transition-colors">{alert.title}</span>
                <span className="text-slate-500 text-xs font-mono">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
