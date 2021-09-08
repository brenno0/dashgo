import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

const SideBarDrawerContext = createContext({} as SidebarContextData );

interface SidebarDrawerProviderProps {
    children:ReactNode
}


type SidebarContextData = UseDisclosureReturn

export function SidebarDrawerProvider({children} : SidebarDrawerProviderProps) {

    const disclosure = useDisclosure({});
    const router = useRouter()

    useEffect(()=>{
        disclosure.onClose();
    },[router.asPath])
    
    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    );
}


export const useSidebarDrawer = () => useContext(SideBarDrawerContext);
