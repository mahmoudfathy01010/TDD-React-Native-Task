import { View, Text, FlatList } from 'react-native'
import React from 'react'
import useMovies from '../../hooks/MoviesHook';

type Props = {
    api:any
}

const MoviesList = (props: Props) => {
    const {status, movies}= useMovies(props.api);
  return (
    <View>
      <FlatList data={movies}
        renderItem={({ item }) => (<Text >{item.title}
            </Text>)}/>
    </View>
  )
}

export default MoviesList