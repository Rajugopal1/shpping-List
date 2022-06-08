import React, {useState} from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = (props) => {

    const [text, setText] = useState('');
    const  onChange = (text) => setText(text);
  return (
    <View >
       <TextInput placeholder='Add Item..' style = {styles.input} onChangeText ={onChange} value= {text} />
           <TouchableOpacity style = {styles.btn} onPress = { () => props.addItem(text)}>
               <Text style = {styles.btnText}>
                   <Icon name='plus' size={20} />
               </Text>
           </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        backgroundColor: '#f8f8f8',
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: 'skyblue',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    }

});

export default AddItem