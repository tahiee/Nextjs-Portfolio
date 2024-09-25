import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
  children,
  size,
  routation,
  shouldOrbit = false,
  orbitDurition,
  shouldSpin = false,
  spinDurition,
}: PropsWithChildren<{
  size: number;
  routation: number;
  orbitDurition?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDurition?: string;
}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDurition,
        }}
      >
        <div
          className="flex justify-start items-start "
          style={{
            transform: `rotate(${routation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDurition,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${routation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
