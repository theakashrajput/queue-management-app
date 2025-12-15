import { useState } from "react";
import DashboardQueue from "./components/DashboardQueue";
import InputQueue from "./components/InputQueue";
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const [queueData, setQueueData] = useState([]);

  return (
    <div
      id="wrapper"
      className="h-screen w-full bg-zinc-800 text-white flex flex-col items-center pt-12"
    >
      <h2 className="text-blue-600 text-4xl font-semibold mb-5">
        Queue Management System
      </h2>
      <p className="mb-5">Manage your queue efficiently</p>
      <div className="w-[85%] flex gap-12 pt-5">
        <InputQueue queueData={queueData} setQueueData={setQueueData} />
        <DashboardQueue queueData={queueData} setQueueData={setQueueData} />
      </div>
      <SpeedInsights />
    </div>
  );
};

export default App;
