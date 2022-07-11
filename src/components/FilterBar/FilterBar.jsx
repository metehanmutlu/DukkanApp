import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './FilterBar.style'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

const FilterBar = ({ openPanel }) => {
    const { data, error, loading } = useFetch(Config.API_URL + '/categories')

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    hitSlop={8}
                    style={styles.sort}
                    onPress={openPanel}
                >
                    <Entypo name='select-arrows' style={{ color: '#64b5f6' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'black' }}>Sırala</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    hitSlop={8}
                    style={styles.filter}
                >
                    <Feather name='filter' style={{ color: '#64b5f6' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'black' }}>Filtrele</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default FilterBar