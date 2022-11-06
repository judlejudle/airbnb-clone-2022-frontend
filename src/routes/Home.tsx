import {Box, Grid, Heading, VStack, Image, Text, HStack} from "@chakra-ui/react"
import { FaStar } from "react-icons/fa";

export default function Home() {
    return <Grid minHeight={280} mt = {10} px ={40} columnGap ={4} rowGap={8} templateColumns={"repeat(5,1fr)"}>
        <VStack alignItems={"flex-start"}>
        <Box>
            <Box mb={2} overflow={"hidden"} rounded="3xl">
                <Image h="230" src="https://a0.muscache.com/im/pictures/miso/Hosting-617784885502078213/original/b299e13f-95a1-41f3-b74d-ea3f91544ea2.jpeg" />
            </Box>
        </Box>
        <Box>
            <Grid templateColumns={"6fr 1fr"}>
                <Text noOfLines={1} fontSize="md">
                    Cheomdangwahak-ro, Jeongeup-si, North Jeolla Province, South Korea
                </Text>
                <HStack spacing={1}>
                    <FaStar size={15}/>
                    <Text>5.0</Text>
                </HStack>
            </Grid>
            <Text fontSize={"sm"} color="gray.600"> Seoul, S. Korea</Text>
        </Box>
            <Text fontSize={"sm"} color="gray.600"><Text as="b">$72</Text> / night</Text>
        </VStack>
    </Grid>;
}