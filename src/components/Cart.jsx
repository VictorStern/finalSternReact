import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Card, CardHeader, Heading, CardBody, Stack, Image, Text, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, precioTotalCarrito, vaciarCart, eliminarProducto } = useContext(CartContext);
  const handleVaciarCart = () => {
    vaciarCart()
  }
  return (
    <div>      
      <Card>
          <CardHeader>
              <Heading size='md'>Carrito de compras</Heading>
          </CardHeader>
          <CardBody>              
              {
                cart.map ((producto) => (                  
                <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                key={producto.id}
                className='cardDeCart'
                >
                  <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={producto.imagen}
                    alt='produtos'
                  />
                  <Stack className='stackDeCart'>
                    <CardBody>
                      <Heading size='md'>{producto.nombre}</Heading>              
                      <Text py='0.5'>
                       Precio por unidad: ${producto.precio}
                      </Text>
                      <Text py='0.5'>
                       Unidades: {producto.contador}
                      </Text>
                    </CardBody>
                    <CardFooter className='botonEliminarProducto'>
                      <Button variant='solid' colorScheme='blue'  
                      onClick={() => eliminarProducto(producto.id)} >
                        Eliminar producto
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
                ))
              }                
          </CardBody>
      </Card>      
      {
        cart.length > 0 ? 
        <>
            <Text fontSize='2xl' className='precioTotalCarrito'>Precio Total: ${precioTotalCarrito()}</Text>
            <Stack direction='row' spacing={4} align='center'>
              <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
                Vaciar Carrito
              </Button>
              <Link to={"/cart/checkout"}>
                <Button colorScheme='teal' variant='solid'>
                  Ordenar pedido
                </Button>
              </Link>
            </Stack>
        </>
      : 
      <Stack spacing={3}>
      
      <Text fontSize='2xl'>El carrito esta vacio...</Text>
      <Link to={"/"} >
        <Button colorScheme='teal' variant='solid' onClick={handleVaciarCart} >
          Ver todos los productos
        </Button>
      </Link>
      
      </Stack>
      }

    </div>
  )
}

export default Cart