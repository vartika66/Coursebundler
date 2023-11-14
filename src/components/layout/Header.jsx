import React from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure } from '@chakra-ui/react'
import { RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <ColorModeSwitcher/>
    <Button 
    onClick={onOpen} width={'12'} height={'12'} rounded="full" position={"fixed"} top='6' left='6' colorScheme='yellow'>
        <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>
                COURSE BUNDLER
            </DrawerHeader>
            <DrawerBody>
  <VStack>
    <Link to='/'>
    </Link>
  </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header