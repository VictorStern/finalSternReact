import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Container, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <div className='navBar'>
      <Container maxW='90%'>
        <Flex alignItems='center'>


          <Link to='/'>
            <Flex alignItems='center'>
              CastaBarber
              <Spacer mx="5px" />
             
            </Flex>

          </Link>


          <Spacer />

          <Menu>
            <MenuButton >
              <Text fontSize='xl'>Categorias</Text>
            </MenuButton>
            <MenuList color={'black'}>
              <MenuItem>
                <Link to='/category/Accesorio de corte.'>
                  <Text fontSize='md'>Accesorios de corte.</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Accesorios de peluqueria.'>
                  <Text fontSize='md'>Accesorios de peluqueria.</Text>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Muebles'>
                  <Text fontSize='md'>Muebles</Text>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Spacer />

          <Box p='4' >
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </div>
  )
}

export default NavBar