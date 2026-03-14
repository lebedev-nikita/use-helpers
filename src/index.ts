import { useRef, useState, type DependencyList, type Dispatch, type SetStateAction } from "react";

export function useValue<T>(
  initialValue: T | (() => T),
  deps: DependencyList
): [T, Dispatch<SetStateAction<T>>] {
  const depsRef = useRef<DependencyList | null>(null);
  const valueRef = useRef<T | null>(null);
  const [, forceRender] = useState(0);

  if (depsRef.current === null || !areDepsEqual(depsRef.current, deps)) {
    depsRef.current = deps;
    valueRef.current =
      typeof initialValue === "function" ? (initialValue as () => T)() : initialValue;
  }

  const setValue: Dispatch<SetStateAction<T>> = (next) => {
    const prev = valueRef.current as T;
    valueRef.current = typeof next === "function" ? (next as (v: T) => T)(prev) : next;
    forceRender((n) => n + 1);
  };

  return [valueRef.current as T, setValue];
}

function areDepsEqual(prev: DependencyList, next: DependencyList): boolean {
  if (prev.length !== next.length) return false;
  for (let i = 0; i < prev.length; i += 1) {
    if (!Object.is(prev[i], next[i])) return false;
  }
  return true;
}
