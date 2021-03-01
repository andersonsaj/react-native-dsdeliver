import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet, ScrollView, Alert, View, ActivityIndicator } from "react-native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import api from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {navigate} = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = useCallback(() => {
      setIsLoading(true);
      api.get('/orders').then(response => {
        const list = response.data;
        setOrders(
          list.sort((a: { id: number; }, b: { id: number; }) => a.id < b.id ? -1 : 1)
        )
      })
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false))
    }, []);

    useEffect(() => {
      if(isFocused) {
        fetchData();
      }
    },[isFocused]);

    const handleOnPress = useCallback((order: Order) => {
      navigate('OrderDetails', {
        order
      });
    },[]);

    return (
      <>
      <Header />
      {
        isLoading ? (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            <ActivityIndicator size="large" color="#DA5C5C" />
          </View>
        ) :
      <ScrollView style={styles.container}>
        {orders.map(order => (
          <TouchableWithoutFeedback  
            key={order.id} 
            onPress={() => handleOnPress(order)}
          >
            <OrderCard order={order}/>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      }
      </>
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      paddingLeft: '5%',
      paddingRight: '5%',
    }
  })

  export default Orders;