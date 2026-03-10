import { Card } from '@/components/ui/Card';

export function PatrolStats() {
  return (
    <Card title="今日巡查检查" className="h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-around gap-2 min-h-0">
        {/* Routes */}
        <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded border border-slate-800 hover:bg-slate-800/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
            <div className="text-sm text-slate-300 font-medium">路线</div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">已完成</div>
              <div className="text-xl font-bold text-emerald-400 font-mono">0</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">未完成</div>
              <div className="text-xl font-bold text-blue-400 font-mono">4</div>
            </div>
          </div>
        </div>

        {/* Patrol Points */}
        <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded border border-slate-800 hover:bg-slate-800/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-cyan-500 rounded-full"></div>
            <div className="text-sm text-slate-300 font-medium">巡查点</div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">已完成</div>
              <div className="text-xl font-bold text-emerald-400 font-mono">0</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">未完成</div>
              <div className="text-xl font-bold text-blue-400 font-mono">5</div>
            </div>
          </div>
        </div>

        {/* Checked Points */}
        <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded border border-slate-800 hover:bg-slate-800/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
            <div className="text-sm text-slate-300 font-medium">已巡查点</div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">正常</div>
              <div className="text-xl font-bold text-emerald-400 font-mono">0</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-1">异常</div>
              <div className="text-xl font-bold text-red-400 font-mono">0</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
