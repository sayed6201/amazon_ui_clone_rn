import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardItem, Right } from 'native-base';

import StarRating from 'react-native-star-rating';


export default class RecomendedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <CardItem>
        <View>
        <Image 
          style={{ height: 90, width: 60 }}
          source={this.props.imageUri} />
        </View>
        <Right style={{ flex:1, alignItems:'flex-start', paddingHorizontal:20, height:90 }} >
            <Text>{this.props.itemName}</Text>
            <Text style={{ color: 'grey', fontSize: 11 }}>
              {this.props.itemCreator}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>
              {this.props.itemPrice}
            </Text>
            <Text>
              <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
                You save
              </Text> 
              ${this.props.savings}
            </Text>
            <StarRating
                disabled={true}
                maxStars={5}
                rating={this.props.rating}
                starSize={12}
                fullStarColor='orange'
                emptyStarColor='orange'/>
        </Right>
      </CardItem>
    );
  }
}
