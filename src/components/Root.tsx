import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Input, VStack, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaLock, FaMoon, FaUserNinja} from 'react-icons/fa'
export default function Root() {
    const{isOpen, onClose, onOpen} = useDisclosure();
    return (
    <Box>
        <HStack justifyContent={"space-between"} py ={5} px={10} borderBottomWidth={1}>
            <Box color = "red.500">
                <FaAirbnb size={"48"} />
            </Box>
            <HStack spacing={2}>
                <IconButton variant = {"ghost"} aria-label="Toggle dark mode" icon= {<FaMoon />} />
                <Button onClick={onOpen}> Log In</Button>
                <Button colorScheme={"red"}> Sign up</Button>
            </HStack>
            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                            <InputLeftElement children={
                            <Box color ="gray.500"><FaUserNinja/></Box>}/>
                        <Input variant = {"filled"} placeholder="Username"></Input>
                            </InputGroup>   
                        <InputGroup>
                        <InputLeftElement children={ <Box color = "gray.500"><FaLock/></Box>}></InputLeftElement>
                        <Input variant = {"filled"} colorScheme={"red"} w="100%" placeholder="Password"></Input></InputGroup>
                        <Button mt ={4} colorScheme={"red"} w="100%">Log In</Button>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </HStack>
        <Outlet />
    </Box>
    )
}