import {Box, Grid, VStack, Image, Text, HStack, Button, useColorModeValue} from "@chakra-ui/react"
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room(){
    const gray = useColorModeValue("gray.600","gray.300")
    return(
        <VStack alignItems={"flex-start"}>
            <Box position="relative" mb={2} overflow={"hidden"} rounded="2xl">
                <Image minH="280" src="https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/b299e13f-95a1-41f3-b74d-ea3f91544ea2.jpeg" />
                <Button cursor={"unstyled"} position="absolute" top={0} right={0} color="white">
                    <FaRegHeart size="20px" />
                </Button>
            </Box>

        <Box>
            <Grid templateColumns={"5 1fr"}>
                <Text noOfLines={1} fontSize="md">
                    Cheomdangwahak-ro, Jeongeup-si, North Jeolla Province, South Korea
                </Text>
                <HStack spacing={1}>
                    <FaStar size={15}/>
                    <Text>5.0</Text>
                </HStack>
            </Grid>
            <Text fontSize={"sm"} color={gray}> Seoul, S. Korea</Text>
        </Box>
            <Text fontSize={"sm"} color={gray}><Text as="b">$72</Text> / night</Text>
        </VStack>
    );
}