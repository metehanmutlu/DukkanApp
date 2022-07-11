import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './ProductCard.style'

const ProductCard = ({ product, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} ₺</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard