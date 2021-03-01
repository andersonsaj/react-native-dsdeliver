import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Header: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigate('Home')}>
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#da5c5c',
      height: 90,
      paddingTop: 50,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.024,
    marginLeft: 16,
    color: '#FFF',
    fontFamily: 'OpenSans_700Bold'
  }
});

export default Header;