/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
"use client";
import React, { useEffect, useRef, useState } from "react";

import { type DosPlayerFactoryType, type DosPlayer as Instance } from "js-dos";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
  bundleUrl: string;
}
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emulators: any;
  }
}

export default function DosPlayer(props: PlayerProps) {
  useEffect(() => {
    window.emulators.pathPrefix = "/js-dos/";
  }, []);

  const rootRef = useRef<HTMLDivElement>(null);
  const [dos, setDos] = useState<Instance | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for js-dos to load with timeout
    let attempts = 0;
    const maxAttempts = 100; // 10 seconds max wait

    const checkDosAvailability = () => {
      attempts++;

      console.log(`Checking for js-dos (attempt ${attempts})...`);
      console.log("window.emulators:", window.emulators);
      console.log("window.emulators?.dos:", window.emulators?.dos);

      if (typeof Dos !== "undefined") {
        console.log("js-dos Dos function found, initializing...");
        setIsLoading(false);
        return;
      }

      // Also check for window.emulators as fallback
      if (window.emulators && window.emulators.dos) {
        console.log("js-dos found via window.emulators, initializing...");
        setIsLoading(false);
        return;
      }

      if (attempts >= maxAttempts) {
        console.error("js-dos failed to load after maximum attempts");
        setError(
          "js-dos library failed to load after 10 seconds. Please refresh the page.",
        );
        setIsLoading(false);
        return;
      }

      // Retry after a short delay
      setTimeout(checkDosAvailability, 100);
    };

    checkDosAvailability();
  }, []);

  useEffect(() => {
    if (isLoading || rootRef === null || rootRef.current === null) {
      return;
    }

    if (typeof Dos === "undefined") {
      setError(
        "js-dos library failed to load. Please check your connection and refresh the page.",
      );
      return;
    }

    try {
      const root = rootRef.current;
      // Clear any existing content
      root.innerHTML = "";

      const instance = Dos(root);
      setDos(instance);
      setError(null);

      return () => {
        void instance.stop();
      };
    } catch (err) {
      console.error("Failed to initialize DOS player:", err);
      setError(
        "Failed to initialize emulator. Please try refreshing the page.",
      );
    }
  }, [isLoading, rootRef]);

  useEffect(() => {
    if (dos !== null && props.bundleUrl) {
      try {
        void dos.run(props.bundleUrl);
      } catch (err) {
        console.error("Failed to run DOS game:", err);
        setError("Failed to load the game. Please check the game file.");
      }
    }
  }, [dos, props.bundleUrl]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded bg-gray-800 p-4 text-white">
        <div className="text-center">
          <p className="mb-2">Loading emulator...</p>
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded bg-gray-800 p-4 text-white">
        <div className="text-center">
          <p className="mb-2 text-red-400">Error:</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return <div ref={rootRef} className="h-full w-full"></div>;
}
