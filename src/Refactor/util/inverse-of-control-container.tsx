import React, { FC, ReactNode, useContext, useRef } from "react";
import { Provider, ReflectiveInjector, Injector } from "injection-js";
import { InjectorContext } from "./injector-context";

export const DIContainer: FC<{
  providers: Provider[];
  children: ReactNode;
}> = ({ children, providers }) => {
  const rootInjector = useContext(InjectorContext) as ReflectiveInjector;
  const contextInjector = useRef<Injector | null>(null);
  if (contextInjector.current === null) {
    if (rootInjector === Injector.NULL) {
      contextInjector.current = ReflectiveInjector.resolveAndCreate(providers);
    } else {
      contextInjector.current = rootInjector.resolveAndCreateChild(providers);
    }
  }
  return (
    <InjectorContext.Provider value={contextInjector.current}>
      {children}
    </InjectorContext.Provider>
  );
};
