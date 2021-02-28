import React, { useCallback } from 'react';
import {StyleSheet, ScrollView } from "react-native";
import Header from '../Header';
import OrderCard from '../OrderCard';

const Orders: React.FC = () => {
    const handOnPress = useCallback(() => {

    },[]);

    return (
      <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
      </ScrollView>
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