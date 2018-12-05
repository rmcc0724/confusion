import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const CONTACT = {
		  address: '121, Clear Water Bay Road',
		  town: 'Clear Water Bay, Kowloon',
		  city: 'Hong Kong',
		  Tel: 'Tel: +852 1234 5678',
		  Fax: 'Fax: +456 0930 9090',
		  Email: 'Email: confusion@food.net'
		};

const styles = StyleSheet.create({
    card: {
    	borderBottomWidth :.5,
        borderBottomColor: 'gray', 
        marginBottom: 10
    },
    head: {
    	fontSize: 20, 
    	fontWeight: 'bold', 
    	textAlign: 'center', 
    	marginBottom: 15    	
    },
    text : {
    	margin: 10
    }
    });
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: CONTACT
        };
        this.displayContact = this.displayContact.bind(this);
    }
    
    displayContact(){
     return Array.from(Object.keys(this.state.contact), k=>this.state.contact[k]);
    }
    static navigationOptions = {
        title: ''
    };
    
    render() {

        return (
            <ScrollView>
            <Card>
            <View style={styles.card}>
            <Text style={styles.head}>Contact Information</Text>
            </View>
            		
            <View>{this.displayContact().map((item, index) => (<Text style={styles.text} key={index}>{item}</Text>))}</View>
                </Card>
            </ScrollView>
        );
    }
}
export default Contact;
