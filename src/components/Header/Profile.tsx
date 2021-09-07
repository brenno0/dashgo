import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

interface ProfileProps {
    showProfileData?:boolean;
}


export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
            <Box mr="4" textAlign="right">
                 <Text>Brenno Rodrigues</Text>
                 <Text color="gray.300" fontSize="small">
                     brennorassis@gmail.com
                 </Text>
            </Box>
            )}

            <Avatar size="md" name="Brenno Rodrigues" src="https://github.com/brenno0.png" />
        </Flex>
    );
}