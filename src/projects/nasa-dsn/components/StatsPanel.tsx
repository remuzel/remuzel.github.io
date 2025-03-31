"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import type { MissionData } from "../types";

interface StatsPanelProps {
  missions: MissionData[];
  lastUpdated: Date;
}

export default function StatsPanel({ missions, lastUpdated }: StatsPanelProps): React.ReactElement {
  const stats = useMemo(() => {
    // Calculate some interesting statistics
    const activeMissions = missions.length;
    const furthestMission = missions.length > 0
      ? missions.reduce((prev, current) =>
        parseFloat(prev.distance.value) > parseFloat(current.distance.value) ? prev : current
      )
      : null;
    const fastestDataRate = missions.length > 0
      ? missions.reduce((prev, current) => {
        const prevRate = parseFloat((prev.signals.dataRates.downlink || '0').replace(/[^0-9.]/g, ''));
        const currRate = parseFloat((current.signals.dataRates.downlink || '0').replace(/[^0-9.]/g, ''));
        return prevRate > currRate ? prev : current;
      })
      : null;

    return {
      activeMissions,
      furthestMission,
      fastestDataRate
    };
  }, [missions]);

  // Format the last updated time
  const formattedTime = useMemo(() => {
    return lastUpdated.toLocaleTimeString();
  }, [lastUpdated]);

  return (
    <motion.div
      className="bg-card-bg border border-border rounded-lg p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 text-center">
        <div className="text-alexa-blue text-2xl font-bold animate-pulse">
          {stats.activeMissions}
        </div>
        <div className="text-sm text-muted">Active Missions</div>
      </div>

      {stats.furthestMission && (
        <div className="flex-1 text-center border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
          <div className="text-alexa-blue text-xl font-medium">
            {stats.furthestMission.name}
          </div>
          <div className="text-sm text-muted">Furthest Mission</div>
          <div className="text-xs mt-1">{stats.furthestMission.distance.formatted}</div>
        </div>
      )}

      {stats.fastestDataRate && (
        <div className="flex-1 text-center border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
          <div className="text-alexa-blue text-xl font-medium">
            {stats.fastestDataRate.signals.dataRates.downlink}
          </div>
          <div className="text-sm text-muted">Fastest Download</div>
          <div className="text-xs mt-1">{stats.fastestDataRate.name}</div>
        </div>
      )}

      <div className="flex-1 text-center border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
        <div className="flex justify-center items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"/>
          <div className="text-alexa-blue text-lg">Live</div>
        </div>
        <div className="text-sm text-muted">Last Updated</div>
        <div className="text-xs mt-1">{formattedTime}</div>
      </div>
    </motion.div>
  );
}
