"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import type { MissionData } from "../types";
import { getMissionInfo } from "../config";

interface MissionCardProps {
  mission: MissionData;
  index: number;
}

export default function MissionCard({ mission, index }: MissionCardProps): React.ReactElement {
  const missionInfo = useMemo(() => getMissionInfo(mission.codename), [mission.codename]);

  // Determine connection status color
  const getConnectionColor = useCallback(() => {
    if (mission.signals.uplink && mission.signals.downlink) {
      return "bg-green-500";
    } else if (mission.signals.downlink) {
      return "bg-blue-500";
    } else if (mission.signals.uplink) {
      return "bg-amber-500";
    }
    return "bg-gray-500";
  }, [mission.signals.uplink, mission.signals.downlink]);

  // Determine connection status text
  const getConnectionStatus = useCallback(() => {
    if (mission.signals.uplink && mission.signals.downlink) {
      return "Two-way";
    } else if (mission.signals.downlink) {
      return "Downlink";
    } else if (mission.signals.uplink) {
      return "Uplink";
    }
    return "No connection";
  }, [mission.signals.uplink, mission.signals.downlink]);

  return (
    <motion.div
      className="bg-card-bg rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{missionInfo.fullName || missionInfo.name}</h3>
          <div className="text-muted text-sm">{mission.codename}</div>
        </div>
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full ${getConnectionColor()} mr-2`}/>
          <span className="text-sm">{getConnectionStatus()}</span>
        </div>
      </div>

      <p className="text-foreground/80 mb-4 text-sm">
        {missionInfo.description || "NASA mission spacecraft"}
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-sm text-muted">Station:</span>
          <span className="font-medium">{mission.dish.stationName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted">Distance:</span>
          <span className="font-medium">{mission.distance.formatted}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted">Round-trip Light Time:</span>
          <span className="font-medium">{mission.roundTripLightTime.formatted}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted">Signal Bands:</span>
          <div className="flex gap-2">
            {mission.signals.bands.map((band, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs bg-alexa-blue/10 text-alexa-blue rounded-full"
              >
                {band}
              </span>
            ))}
          </div>
        </div>
        {mission.signals.dataRates.downlink && (
          <div className="flex justify-between">
            <span className="text-sm text-muted">Download Rate:</span>
            <span className="font-medium">{mission.signals.dataRates.downlink}</span>
          </div>
        )}
        {mission.signals.dataRates.uplink && (
          <div className="flex justify-between">
            <span className="text-sm text-muted">Upload Rate:</span>
            <span className="font-medium">{mission.signals.dataRates.uplink}</span>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <a
          href={missionInfo.moreInfoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full gap-2 bg-alexa-blue text-white py-2 px-4 rounded-md hover:bg-alexa-blue-dark transition-colors text-sm"
        >
          Learn about {missionInfo.name}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
