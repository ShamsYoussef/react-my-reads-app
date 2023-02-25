import { useState, useEffect } from "react";
let globalState: any = {};
let actions: any = {};
let listeners: any[] = [];

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionType: string, payload: any) => {
    if (actions[actionType]) {
      const newState = actions[actionType](globalState, payload);

      globalState = { ...globalState, ...newState };

      listeners.forEach(listener => listener(globalState));
    }
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);

    return () => {
      if (shouldListen)
        listeners = listeners.filter(listener => listener !== setState);
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initializeStore = (addedActions: any, initalState: any = {}) => {
  actions = { ...actions, ...addedActions };
  globalState = { ...globalState, ...initalState };
};
