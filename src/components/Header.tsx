import { Box, Button, HStack, Stack, IconButton, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogInModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const{isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const{isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    const {toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("red.500","red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);
    return(
        <Stack justifyContent={"space-between"} alignItems ="center" spacing={{sm:4, md:0}} py ={5} px={40} direction={{sm:"column",md:"row",}} borderBottomWidth={1}>
            <Box color = {logoColor}>
                <Link to={"/"}>
                <FaAirbnb size={"48"} />
                </Link>
            </Box>
            <HStack spacing={2}>
                <IconButton onClick = {toggleColorMode} variant = {"ghost"} aria-label="Toggle dark mode" icon= {<Icon />} />
                <Button onClick={onLoginOpen}> Log In</Button>
                <Button onClick={onSignUpOpen} colorScheme={"red"}> Sign up</Button>
            </HStack>
            <LogInModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </Stack>
    )
}