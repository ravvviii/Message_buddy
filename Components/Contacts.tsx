import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Contacts() {

    
    const users = [];
    const numUsers = 20;

    function generateRandomTime() {
        const minutes = Math.floor(Math.random() * 60); // Generate random minutes
        const hours = Math.floor(Math.random() * 24); // Generate random hours
        const days = Math.floor(Math.random() * 7); // Generate random days
    
        if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else if (hours < 24) {
            return `${hours} hours ago`;
        } else {
            return `${days} days ago`;
        }
    }
    
    
    function generateRandomHumanMessage() {
        const greetings = ['Hi', 'Hello', 'Hey', 'Greetings', 'Good morning', 'Good afternoon', 'Good evening'];
        const actions = ['hope you are doing well', 'just wanted to say hi', 'wanted to check in with you', 'thought of reaching out', 'wanted to catch up', 'hope everything is going fine'];
        const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    
        const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
        const randomActionIndex = Math.floor(Math.random() * actions.length);
        const randomNameIndex = Math.floor(Math.random() * names.length);
    
        const greeting = greetings[randomGreetingIndex];
        const action = actions[randomActionIndex];
        const name = names[randomNameIndex];
    
        return `${greeting}, ${name}! Just ${action}.`;
    }
    
    for (let i = 1; i < numUsers; i++) {
        const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
        
        const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
        const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
        
        const firstName = firstNames[randomFirstNameIndex];
        const lastName = lastNames[randomLastNameIndex];
        
        const randomName = `${firstName} ${lastName}`;
        const randomMessage = generateRandomHumanMessage();
        const randomTime = generateRandomTime();
    
        users.push({
            id: i,
            imageUrl: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
            name: randomName,
            message: randomMessage,
            time:randomTime

        });
        console.log(randomName)
        console.log(i)
    }
    




    return (
        <View  style={styles.vieew}>
            <ScrollView style={styles.scrollView}>
                {users.map(({ id, imageUrl, name, message,time  }) => (
                    <View key={id} >
                        <View style={styles.allContact}>
                        <Image source={{ uri: imageUrl }} style={styles.Users} 
                        />
                        <View>

                        <Text  style={styles.allContactName}>{name}</Text>


                        <Text  style={styles.allContactMessage} numberOfLines={1}>{message}</Text>
                        </View>
                        </View >
                        
                        <Text  style={styles.time} numberOfLines={1}>{time}</Text>
                    </View>



                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        // flex:1,
        // flexDirection:'column'

    },
    
    vieew:{
backgroundColor:'#ffffff',
    },
    allContact: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderBlockColor:'#000000',
        borderColor:'red'
        ,
        borderTopColor:"red"
        

    },
    Users: {
        borderRadius: 50,
        height: 80,
        width: 80,
        marginLeft: 8,
        marginBottom: 5,
        marginTop: 15,
        borderBottomColor:'red',
        borderBottomWidth:5
    },
    allContactName:{
        marginLeft:15,
        fontWeight:'600',
        color:'#000000',
        fontStyle:'normal',
        textShadowOffset: { width: 2, height: 2 }, 
        fontSize:20,
        marginBottom:10


    },
    allContactMessage:{
        // backgroundColor:'red',
        color:'#000000',
        marginLeft:15,

    },
    time:{
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'red',
    }
    


})