import { Header } from '@/components/Dashboard/Header';
import { StatRow } from '@/components/Dashboard/StatRow';
import { RiskChart } from '@/components/Dashboard/RiskChart';
import { AlertList } from '@/components/Dashboard/AlertList';
import { DailyStats } from '@/components/Dashboard/DailyStats';
import { DeviceStatus } from '@/components/Dashboard/DeviceStatus';
import { AreaStats } from '@/components/Dashboard/AreaStats';

export default function App() {
  return (
    <div 
      className="w-full h-screen bg-slate-950 text-slate-100 overflow-hidden flex flex-col"
      style={{ backgroundColor: '#020617', color: '#f1f5f9' }}
    >
      <Header title="江苏海通镇第一中学" />
      
      <main className="flex-1 p-4 flex flex-col gap-4 min-h-0">
        {/* Top Stats Row - Fixed Height */}
        <div className="shrink-0">
          <StatRow />
        </div>

        {/* Main Content Grid - Fills remaining space */}
        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
          
          {/* Left Column (3/12) - Operations & Daily Data */}
          <div className="col-span-3 min-h-0">
            <DailyStats />
          </div>

          {/* Center Column (6/12) - Analysis & Map */}
          <div className="col-span-6 flex flex-col gap-4 min-h-0">
            <div className="flex-[1.2] min-h-0">
              <RiskChart />
            </div>
            <div className="flex-1 min-h-0">
              <AreaStats />
            </div>
          </div>

          {/* Right Column (3/12) - Real-time & Status */}
          <div className="col-span-3 flex flex-col gap-4 min-h-0">
            <div className="flex-1 min-h-0">
              <AlertList />
            </div>
            <div className="flex-[0.6] min-h-0">
              <DeviceStatus />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
