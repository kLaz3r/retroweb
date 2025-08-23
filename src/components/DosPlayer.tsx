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

  useEffect(() => {
    if (rootRef === null || rootRef.current === null) {
      return;
    }

    const root = rootRef.current;
    const instance = Dos(root);

    setDos(instance);

    return () => {
      void instance.stop();
    };
  }, [rootRef]);

  useEffect(() => {
    if (dos !== null) {
      void dos.run(props.bundleUrl); // ci is returned
    }
  }, [dos, props.bundleUrl]);

  return <div ref={rootRef} className="h-full w-full"></div>;
}
