import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://pbs.twimg.com/profile_images/1632647183735619584/VcsKSpkF_400x400.jpg' }} 
          style={styles.adminImage} 
        />
        <Text style={styles.appName}>Message Buddy</Text>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color="white" style={styles.Search}/>
        <FontAwesomeIcon icon={faEllipsisVertical} size={24} color="white" style={styles.Setting}/>
        
      </View>
      <View style={styles.Action_header}>
        
        <Text style={styles.Action}> 
        
         Message 
         
        </Text>
        <Text style={styles.Action}>Groups</Text>
        <Text style={styles.Action}>Channels</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 5,
    backgroundColor: '#1C8ADB',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  adminImage: {
    marginTop: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  appName: {
    fontSize: 20,
    color: '#FFFFFF', // Changed text color to white
    marginLeft: 10,
    fontWeight: '600',
  },
  Action_header: {
    backgroundColor: '#1C8ADB',
    paddingBottom: 10,
    flexDirection: 'row',  // Align items in a row
    justifyContent: 'space-around',  // Space out the items evenly
    paddingVertical: 10,
  },
  Action: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,  // Padding on both sides for better spacing
    paddingTop: 5,
    paddingBottom: 5,
  },
  Setting:{
    marginLeft:10
    
},
Search:{
      marginLeft:70,
      marginRight:10
      

  },

});
