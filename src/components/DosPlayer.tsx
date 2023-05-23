import React, { useEffect, useRef, useState } from "react";

import { type DosPlayerFactoryType, type DosPlayer as Instance } from "js-dos";

declare const Dos: DosPlayerFactoryType;

interface PlayerProps {
  bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
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

  return <div ref={rootRef} style={{ width: "100%", height: "100%" }}></div>;
}
