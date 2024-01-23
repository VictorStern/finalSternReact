import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div>
        <Spinner
            
            thickness='10px'
            speed='0.80s'
            emptyColor='gray.200'
            color='red.500'
            size='xl'
        />
    </div>
  )
}

export default Loader