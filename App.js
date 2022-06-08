import React, {useState}from 'react';
import {View, StyleSheet,FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {

const ID = function () {
   
    const time = new Date().getTime();
    return 'ITEM' + Math.floor(Math.random() * 100000000);
  };
  const [items , setItems ] = useState([
    {id: ID(), text: 'Milk'},
    {id: ID(), text: 'Eggs'},
    {id: ID(), text: 'Bread'},
    {id: ID(), text: 'Juice'},

  ]);

  const DeleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
   
  };
  console.log(addItem);

  return (
    <View style= {styles.container}>
      <Header title= 'Shopping List'/>
      <AddItem addItem = {addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item = {item} DeleteItem = {DeleteItem}/> }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    
  }
   
});
 
export default App;


