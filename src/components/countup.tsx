"use client";

import { CountUp as CountUpType } from "countup.js";
import { HTMLProps, useEffect, useRef } from "react";

export default function CountUp(
  props: Omit<HTMLProps<HTMLDivElement>, "ref"> & { value: number }
) {
  const ref = useRef<HTMLDivElement>(null);
  const anim = useRef<CountUpType>();

  useEffect(() => {
    async function init() {
      const countUpModule = await import("countup.js");
      anim.current = new countUpModule.CountUp(ref.current!, 0);
      if (!anim.current.error) {
        anim.current.start();
        anim.current.update(props.value);
      } else {
        console.error(anim.current.error);
      }
    }
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} {...props}>
      0
    </div>
  );
}
