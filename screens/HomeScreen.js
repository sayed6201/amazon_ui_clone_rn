import React, { Component } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image
 } from 'react-native';

import { 
  Container, 
  Content, 
  Header, 
  Left, 
  Right, 
  Icon, 
  Item,
  Input,
  Card,
  CardItem
 } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import RecomendedItem from '../components/RecomendedItem';



class HomeScreen extends Component{
  static navigationOptions = {
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render(){
    return (
      <Container>
        <Header 
          style={ [{ backgroundColor: '#3a455c',
            height: 90,
            borderBottomColor: '#757575', },styles.androidHeader]}>
          <Left style={{ flexDirection: 'row' }}>

            <Icon name="md-menu" 
            style={{color: 'white'}}
            onPress={() => this.props.navigation.toggleDrawer()}
            />
            <FAIcon
              name="amazon"
              style={{
                fontSize: 32,
                color: 'white',
                marginRight: 25
              }}
            />
          </Left>

          <Right>
            <Icon name="md-cart" 
              style={{color: 'white'
            }}
            />
          </Right>
        </Header>
        <View
          style={ { position:'absolute', left:0, right:0, top:90, height:70, backgroundColor:'#3a455c', flexDirection: 'row', alignItems:'center', paddingHorizontal: 5,  }}
        >
          <TouchableOpacity>
            <View style={{ width: 100, height: 50, backgroundColor: '#e7e7eb', borderRadius: 4, padding: 10 }} >
              <Text style={{ fontSize: 12 }} >
                shop by
              </Text>
              <Text style={{ fontWeight: 'bold' }} >
                Catagory
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{ flex:1, height:"100%", justifyContent: 'center', }}
          >
            <Item
              style={{ 
                backgroundColor: 'white',
                paddingHorizontal: 10,
                borderRadius: 4
                }}
            >
              <Icon 
              name="search"
              style={{ fontSize:20, paddingTop: 5, }}
                />
              <Input placeholder="Search Item" /> 
            </Item>
          </View>
        </View>

        <Content style={{ marginTop: 70, backgroundColor: '#d5d5d6'}} >
          <View
            style={{ 
              height:50, 
              backgroundColor:'white',
              flexDirection:'row',
              paddingHorizontal:5,
              alignItems: 'center',
              justifyContent: 'space-between',
              }}>
            <Text>Hello, Sayed</Text>

            <View style={{ flexDirection:'row' }} >
              <Text>Your Account</Text>
              <Icon name="arrow-forward" style={{ fontSize:18 }}  />
            </View>
            
          </View>
          <Swiper
            style={{ height: 100}}
            showsButtons={true} 
            autoplayTimeout={4} 
            autoplay={true} 
            pagingEnabled={true} 
            removeClippedSubviews={false}
            >
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                    source={require('../assets/swiper_3.jpg')} />
            </View>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                    source={require('../assets/swiper_2.jpg')} />
            </View>
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                    source={require('../assets/swiper_2.jpg')} />
            </View>

          </Swiper>
          <Card>
            <CardItem style={{ borderBottomColor:'grey', borderBottomWidth: 1}}  header >
              <Text>Your Recomendation</Text>
            </CardItem>
            <RecomendedItem
              itemName="you can heal your life"
              itemCreator="sayed"
              itemPrice="$10"
              savings="2.5"
              imageUri={require("../assets/recommended_1.jpg")}
              rating={5}
            />
            <RecomendedItem
              itemName="Uncharted 4"
              itemCreator="Sony"
              itemPrice="$19.99"
              savings="17"
              imageUri={require("../assets/recommended_2.jpg")}
              rating={5}
            />
            <RecomendedItem
              itemName="Ea UFC 3"
              itemCreator="Ea Sports"
              itemPrice="$44"
              savings="6"
              imageUri={require("../assets/recommended_3.jpg")}
              rating={3}
            />
           
          </Card>
        </Content>

      </Container>
      );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android:{
        paddingTop: StatusBar.currentHeight,
      }
    })
  }
});




