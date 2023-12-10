import React, { createContext, useContext, MutableRefObject, ReactNode } from 'react';

interface RefContextProps {
    headerRef: MutableRefObject<HTMLDivElement | null>;
}

interface RefProviderProps {
    children: ReactNode;
}

const RefContext = createContext<RefContextProps | undefined>(undefined);

export const RefProvider: React.FC<RefProviderProps> = ({ children }) => {
    const headerRef = React.useRef<HTMLDivElement>(null);

    return <RefContext.Provider value={{ headerRef }}>{children}</RefContext.Provider>;
};

export const useGlobalRefs = () => {
    const context = useContext(RefContext);
    if (!context) {
        throw new Error('useGlobalRefs must be used within a RefProvider');
    }
    return context;
};