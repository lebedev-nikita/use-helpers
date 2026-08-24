import { useEffect, type DependencyList } from "react";

/**
 * Runs an effect after `delay` milliseconds and cancels it when dependencies change.
 */
export function useDelayedEffect(
  effect: () => void | (() => void),
  delay: number,
  deps: DependencyList
): void {
  useEffect(() => {
    let cleanup: void | (() => void);
    const timeout = setTimeout(() => {
      cleanup = effect();
    }, delay);

    return () => {
      clearTimeout(timeout);
      cleanup?.();
    };
  }, [delay, ...deps]);
}
