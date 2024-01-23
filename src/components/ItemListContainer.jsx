import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList";
import { Container } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loader from './Loader';

const ItemListContainer = () => {
  const { categoria } = useParams()
  const [loading, setLoading] = useState(true)
  const [productosFiltrados, setProductosFiltrados] = useState([])

  useEffect(() => {

    setLoading(true)

    const db = getFirestore()
      
  
    const itemsCollection = collection(db, "Accesorios de corte.")
  
    getDocs(itemsCollection).then((snapshot) => {
      const productos = snapshot.docs.map((doc) => doc.data())
      if (categoria) {
        const productosFiltrados = productos.filter(producto => producto.tipo == categoria)
        setProductosFiltrados(productosFiltrados)
      } else { 
        setProductosFiltrados(productos) 
      }
      setLoading(false)
    })
  
  }, [categoria])


  

  return (
    <Container maxW='80%'>
      {loading && <Loader/>}
      {!loading && <ItemList productos={productosFiltrados} />}
    </Container>
  )
  }

export default ItemListContainer