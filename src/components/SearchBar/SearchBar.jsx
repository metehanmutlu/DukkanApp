import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SearchBar.style'

const SearchBar = ({ products, setProducts }) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        const filteredProducts = products?.filter((product) => {
            const productTitle = product.title.toLowerCase()
            const currentSearch = search.toLowerCase()
            if (productTitle.includes(currentSearch)) return true
        })
        filteredProducts && setProducts(filteredProducts)
    }, [search])


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setSearch}
                value={search}
                placeholder='Ara...'
            />
        </View>
    )
}

export default SearchBar