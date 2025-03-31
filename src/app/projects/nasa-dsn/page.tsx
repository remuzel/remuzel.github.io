"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/theme";
import { NAV } from "@/constants/strings";
import { parseXML, extractMissions } from "@/projects/nasa-dsn/utils";
import type { DSNData } from "@/projects/nasa-dsn/types";
import MissionCard from "@/projects/nasa-dsn/components/MissionCard";
import StatsPanel from "@/projects/nasa-dsn/components/StatsPanel";

const NASA_DSN_XML_URL = "https://eyes.nasa.gov/apps/dsn-now/dsn.xml";
const REFRESH_INTERVAL = 10000; // 10 seconds

export default function NasaDSNPage(): React.ReactElement {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dsnData, setDsnData] = useState<DSNData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Process the DSN data to get mission-oriented information
  const missions = useMemo(() => {
    if (!dsnData) return [];
    return extractMissions(dsnData);
  }, [dsnData]);

  // Fetch DSN data
  const fetchDSNData = async (): Promise<void> => {
    try {
      // Add cache-buster query parameter
      const cacheBuster = `?r=${Math.floor(Math.random() * 10000000)}`;
      const response = await fetch(`${NASA_DSN_XML_URL}${cacheBuster}`, {
        // Use no-store to ensure we get fresh data each time
        cache: 'no-store',
        // Set a reasonable timeout for the request
        signal: AbortSignal.timeout(8000)
      });

      if (!response.ok) {
        throw new Error("Failed to fetch NASA DSN data");
      }

      const xmlText = await response.text();
      const data = parseXML(xmlText);
      setDsnData(data);
      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      console.error("Error fetching NASA DSN data:", err);
      setError("Unable to load DSN data. Please try again later.");
      setLoading(false);
    }
  };

  // Initial fetch and setup interval
  useEffect(() => {
    fetchDSNData();

    // Set up refresh interval
    const intervalId = setInterval(() => {
      fetchDSNData();
    }, REFRESH_INTERVAL);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={ROUTES.projects}
            className="inline-flex items-center mb-6 text-muted hover:text-alexa-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            {NAV.projects}
          </Link>

          <div className="bg-card-bg rounded-lg overflow-hidden border border-border shadow-sm mb-8 p-8">
            <div className="flex justify-between flex-wrap gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">NASA Deep Space Network Live</h1>
            </div>

            <p className="text-foreground/90 mb-8">
              The Deep Space Network (DSN) is NASA&apos;s international array of giant radio antennas that
              supports interplanetary spacecraft missions. This interactive visualization shows
              the current communication status with spacecraft across our solar system and beyond.
            </p>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="flex space-x-2 items-center">
                  <div className="w-3 h-10 bg-alexa-blue rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0s" }}/>
                  <div className="w-3 h-10 bg-alexa-blue rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.2s" }}/>
                  <div className="w-3 h-10 bg-alexa-blue rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.4s" }}/>
                  <div className="w-3 h-10 bg-alexa-blue rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.6s" }}/>
                  <div className="w-3 h-10 bg-alexa-blue rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" style={{ animationDelay: "0.8s" }}/>
                  <span className="text-muted ml-3">Loading telemetry data...</span>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline ml-2">{error}</span>
              </div>
            ) : (
              <>
                <StatsPanel missions={missions} lastUpdated={lastUpdated}/>

                {missions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {missions.map((mission, index) => (
                      <MissionCard
                        key={mission.codename}
                        mission={mission}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-background rounded-lg border border-border">
                    <div className="text-2xl font-bold text-alexa-blue mb-3">No Active Missions</div>
                    <p className="text-muted">
                      There are currently no active DSN communications with spacecraft.
                      Please check back later.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-12 flex justify-between items-center">
            <Link
              href={ROUTES.projects}
              className="text-muted hover:text-alexa-blue transition-colors"
            >
              ← {NAV.projects}
            </Link>

            <Link
              href={ROUTES.home}
              className="text-muted hover:text-alexa-blue transition-colors"
            >
              {NAV.backToHome} ↑
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
