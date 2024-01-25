import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
    <GridItem w='100%'>
      <Card className='cardi' maxW='sm'>
        <CardBody className='tarjet'>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='black'>
              <img className='imag' src={producto.imagen} alt={producto.nombre} />
              <p>Producto: {producto.nombre}</p>
            </Heading>
            <Text color='black'>Categoría: {producto.tipo}</Text>
          </Stack>
        </CardBody>
        <CardFooter justify='center'>
          <Link to={`/item/${producto.id}`} >
            <Button className='botVer'>Ver más</Button>
          </Link>
        </CardFooter>
        <Divider />
      </Card>
    </GridItem>
  )
}

export default Item