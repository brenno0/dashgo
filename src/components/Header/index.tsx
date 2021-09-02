import {Flex} from '@chakra-ui/react'
import React from 'react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearcBox } from './SearchBox'

export const Header = () => {
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
            <Logo />
            <SearcBox />


            <Flex align="center" ml="auto">
               
                <Profile />
                <NotificationsNav />
            </Flex>
        
        </Flex>
    )
}