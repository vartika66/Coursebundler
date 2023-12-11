import React from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user ={
    role:'admin'
  }
  const logoutHandler = () => {
    console.log('logout')
    onClose();
  }
  const LinkButton = ({ url = '/', title = 'Home',onClose }) => (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        width={'12'}
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
        colorScheme="yellow"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Course" />
              <LinkButton onClose={onClose} url="/request" title="Request the Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact uS" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                  <VStack>
                    <HStack>
                      <Link to='/profile' onClick={onClose}>
                      <Button variant={'ghost'} colorScheme={'yellow'}>
                        Profile
                      </Button>
                      </Link >
                       <Button variant={'ghost'} onClick={logoutHandler}>
                        <RiLogoutBoxLine/>
                        Logout
                      </Button>
                    </HStack>


                    {user && user.role === 'admin' && (
                      <Link to='/admin/dashboard' onClick={onClose}>
                        <Button colorScheme={'purple'} variant={'ghost'}>
                          <RiDashboardFill/>
                          Dashboard
                        </Button>
                      </Link>
                    )}
                    </VStack>
                    </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme={'yellow'}>Register</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
