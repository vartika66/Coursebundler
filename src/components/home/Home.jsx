import React from 'react'
import { Button, Heading, Stack, VStack, Text,Image, Box, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws} from 'react-icons/di';
import './home.css';


const Home = () => {
  return (
   <section className='home'>
    <div className="container">
      <Stack direction={["column","row"]}
      height="100%"
      justifyContent={['center','space-between']}
      alignItems="center"
      spacing={['16','56']}>
    <VStack width={"full"} alignItems={['center','flex-end']}>
      <Heading children="Learn from the expert" size={'2xl'}/>
      <Text children="Find Valuable content"/>
      <Link to="/courses"/>
      <Button size={"lg"} colorScheme='yellow'>
        explore Now
      </Button>

    </VStack>
    <Image className='vectorgraphics' boxSize={'md'} src={"logo"} objectFit="contain"/>

      </Stack>

    </div>
    <Box padding={'8'} bg="blackAlpha.800">
      <Heading textAlign={'center'}
      fontFamily="body"
      color={'yellow.400'}
      children="OUR BRANDS"/>
      <HStack className='brandbanner' justifyContent={'space-evenly'}
      marginTop={'4'}>
    <CgGoogle/>
    <CgYoutube/>
    <SiCoursera/>
    <SiUdemy/>
    <DiAws/>

      </HStack>
    </Box>
    <div className="container2">
      <video autoPlay controls  controlsList ="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
       src={""}>

      </video>
    </div>

   </section>
  )
}

export default Home