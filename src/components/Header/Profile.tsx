import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" ta="right">
                <Text>Brenno Rodrigues</Text>
                <Text color="gray.300" fontSize="small">
                    brennorassis@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Brenno Rodrigues" src="https://github.com/brenno0.png" />
        </Flex>
    )
}