import {Grid} from "@chakra-ui/react"
import Room from "../components/Room";
export default function Home() {
    return (
    <Grid minHeight={280}
        mt = {10}
        px = {{base:10, lg:40}}
        columnGap ={4}
        rowGap={8}
         templateColumns={{sm:"1fr",md:"1fr 1fr",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)","2xl":"repeat(5,1fr)",}}>
        {[12,1,2,34,12,1,2,3512,3,5,123,5,12,35,1,12,1,23,5,12,12].map((index) => (<Room key={index} /> ))}
        </Grid>);
}
