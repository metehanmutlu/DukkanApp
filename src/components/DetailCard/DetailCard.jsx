import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './DetailCard.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import uid from 'uid'

const DetailCard = ({ data }) => {

    const renderStars = () => {
        const rate = data.rating?.rate
        const fullStars = rate - rate % 1
        let halfStars = false
        if (rate % 1 >= 0.5) {
            halfStars = true
        }

        let starList = []
        for (let i = 0; i < 5; i++) {
            starList.push(< FontAwesome key={uid.uid(16)} name='star-o' style={styles.star} />)
        }
        if (halfStars) {
            starList.shift()
            starList.push(< FontAwesome key={uid.uid(16)} name='star-half-empty' style={styles.star} />)
        }
        if (fullStars > 0) {
            for (let i = 0; i < fullStars; i++) {
                starList.shift()
                starList.push(< FontAwesome key={uid.uid(16)} name='star' style={styles.star} />)
            }
        }
        starList.reverse()
        return starList
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <View style={styles.footerContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rate}>{data.rating?.rate}</Text>
                        <View style={styles.stars}>
                            {renderStars()}
                        </View>
                    </View>
                    <Text style={styles.price}>{data.price} ₺</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailCard