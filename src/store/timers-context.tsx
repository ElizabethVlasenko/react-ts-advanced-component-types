import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext); //! - makes it to never be null

  if (timersCtx === null) {
    throw new Error(
      "useTimersContext must be used within a TimersContextProvider"
    );
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
