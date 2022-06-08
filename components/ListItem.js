import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.ListItems}>
      <View style={styles.ListItemsView}>
        <Text style={styles.ListItemsText}>{props.item.text}</Text>
        <Icon name='remove' size={20} color='firebrick' onPress= {() => props.DeleteItem(props.item.id)}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItems: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',

  },
  ListItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemsText: {
    fontSize: 18,
    color: '#333',
  },
});

export default ListItem;
