import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList} from 'react-native';
import { ListItem, Avatar, Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';



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
    },
    title: {
    	textAlign: 'left'	
    },
    textBold: {
    	fontWeight: 'bold',
    	fontSize: 15, 

    }
    });
class About extends Component {
	 constructor(props) {
	        super(props);
	        this.state = {
	            leaders: LEADERS,
	            dishes: DISHES
	        };
	 }
    static navigationOptions = {
        title: 'About Us'
    };
	 
    
   render() {

        const renderLeaderItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={
                	<View>
                	<Text style={styles.textBold}>{item.name}</Text>
                    </View>}
                	subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/alberto.png')}}
                  />
            );
        };
    


const { navigate } = this.props.navigation;

    return (
    		<ScrollView>
            <Card>
            <View style={styles.card}>
            <Text style={styles.head}>Our History</Text>
            </View>
            		
            <View>
            <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us. </Text><Text></Text><Text>
            
            The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>     	
            </View>
                </Card>
                <Card>
                <View>
                <Text style={styles.head}>Corporte Leadership</Text>
</View>
        <FlatList 
                data={this.state.leaders}
                renderItem={renderLeaderItem}
                keyExtractor={leader => leader.id.toString()}
                />
        </Card>
        </ScrollView>

    );

}
}


export default About;
