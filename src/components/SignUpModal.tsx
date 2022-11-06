import { Box, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Button, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps{
    isOpen:boolean;
    onClose:()=> void;
}

export default function SignUpModal({isOpen, onClose}:SignUpModalProps){
    return(
        <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack>
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color ="gray.500"><FaUserSecret/></Box>}/>
                                <Input variant = {"filled"} placeholder="Name"></Input>
                            </InputGroup>   
                            <InputGroup>
                                <InputLeftElement children={
                                <Box color ="gray.500"><FaEnvelope/></Box>}/>
                                <Input variant = {"filled"} placeholder="email"></Input>
                            </InputGroup> 
                                <InputGroup>
                                <InputLeftElement children={
                                <Box color ="gray.500"><FaUserNinja/></Box>}/>
                                <Input variant = {"filled"} placeholder="Username"></Input>
                            </InputGroup>   
                            <InputGroup>
                                <InputLeftElement children={ <Box color = "gray.500"><FaLock/></Box>}></InputLeftElement>
                                <Input variant = {"filled"} colorScheme={"red"} w="100%" placeholder="Password"></Input>
                            </InputGroup>
                        </VStack>
                        <Button mt ={4} colorScheme={"red"} w="100%">SignUp</Button>
                        <SocialLogin />
                    </ModalBody>
                </ModalContent>
            </Modal>
    )
}