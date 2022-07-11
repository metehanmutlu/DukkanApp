import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './Detail.style'
import Config from 'react-native-config'

import useFetch from '../../hooks/useFetch'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import DetailCard from '../../components/DetailCard/'

const Detail = ({ route }) => {
    const productId = route.params.id

    const { loading, data, error } = useFetch(Config.API_URL + `/${productId}`)

    if (error) return <Error />

    return (
        <View style={styles.container}>
            {
                loading
                    ? <Loading />
                    : <DetailCard data={data} />
            }
        </View>
    )
}

export default Detail