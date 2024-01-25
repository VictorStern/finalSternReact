import React from 'react'
import { Stack, Heading, Text, Container, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({ producto }) => {
  return (
    <Container className='cardi' maxW='50%'>
      <Stack mt='6' spacing='3'>
        <Heading size='md' color='black'>
          <Center mb="15px">
          <img className='imag'  width="30%" src={producto.imagen} alt={producto.nombre} />
          </Center>
         
          <p>Producto: {producto.nombre}</p>
        </Heading>
        <Text className='textDetail' >Categoría: {producto.tipo}</Text>
        <Text className='textDetail' >Descripción: {producto.descripcion}</Text>
        <Text className='textDetail' >Precio: ${producto.precio}</Text>
      </Stack>
      <Center mt="15px">
      <ItemCount producto={producto} />
      </Center>      
    </Container>
  )
}

export default ItemDetail;