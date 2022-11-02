import { Button,Text, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
        <Heading> Page Not found</Heading>
        <Text> It seems that you are lost</Text>
        <Link to ='/'>
        <Button colorScheme ={"pink"} variant={"link"}>Go home &rarr;</Button>
        </Link>
    </VStack>
}