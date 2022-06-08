import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkblue', 
        height: 60,
        padding: 15,
    },
    text: {
        fontSize: 23,
        color: '#fff',
        textAlign: 'center',
    }
});

export default Header