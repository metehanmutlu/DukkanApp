import { View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import Config from "react-native-config";
import ProductCard from '../../components/ProductCard/';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error/';
import Loading from '../../components/Loading/';
import SearchBar from '../../components/SearchBar/';
import FilterBar from '../../components/FilterBar/';
import { SwipeablePanel } from 'rn-swipeable-panel'

const Products = ({ navigation }) => {
    const { data, loading, error } = useFetch(Config.API_URL)
    const [products, setProducts] = useState([])

    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        closeOnTouchOutside: true,
        // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    const openPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };

    useEffect(() => {
        setProducts(data)
    }, [data])

    const handleProductSelect = (id) => {
        navigation.navigate('Detail', { id })
    }

    const renderItem = ({ item }) => <ProductCard product={item} onPress={() => { handleProductSelect(item.id) }} />

    if (error) return <Error />

    return (
        <View style={styles.container}>
            {
                loading
                    ? <Loading />
                    : <View>
                        <SearchBar products={data} setProducts={setProducts} />
                        <FlatList
                            ListHeaderComponent={<FilterBar products={data} setProducts={setProducts} openPanel={openPanel} />}
                            data={products}
                            renderItem={renderItem}
                            style={{ marginBottom: 70 }}
                        />
                        <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                            <Text>Mete Mutlu</Text>
                            <Text>Mete Mutlu</Text>
                            <Text>Mete Mutlu</Text>
                            <Text>Mete Mutlu</Text>
                        </SwipeablePanel>
                    </View>
            }
        </View>
    )
}

export default Products