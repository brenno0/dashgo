import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearcBox } from './SearchBox'

export const Header = () => {

 
    const { onOpen } = useSidebarDrawer()
    
    const isWideVerstion = useBreakpointValue({
        base: false,
        lg:true
    })
    return (
        <Flex 
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
        >
            { !isWideVerstion &&(
                <IconButton icon={<Icon as={RiMenuLine} />}
                    fontSize="24" 
                    variant="unstyled" 
                    onClick={onOpen}
                    aria-label="Open navigation" 
                    mr="2"
                >
                    
                </IconButton>
            ) }
            <Logo />
            { isWideVerstion && (<SearcBox />) }

            <Flex align="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVerstion} />
            </Flex>
        
        </Flex>
    )
}