import { View, FlatList, Text } from 'react-native'
import React from 'react'
import api from '../utils/api'
import MoviesList from './components/MoviesList'

type Props = {
}

const Home = (props: Props) => {
  console.log("helli")
  return (
   <MoviesList api={api}/>
  )
}

export default Home