import React from 'react';

import {View, Image,Text} from 'react-native';

const ActionBarImage = ({navigation,route}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={require('./image/arrow.png')}
        style={{
          width: 20,
          height: 20,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
            <Image
        source={require('./image/img.png')}
        style={{
          width: 25,
          height: 25,
          borderRadius: 40 / 2,
          marginLeft:20,
        }}
      />
            <Image
        source={require('./image/vector.png')}
        style={{
          width: 5,
          height: 20,
          borderRadius: 40 / 2,
          marginLeft: 300,
        }}
      />
    </View>
  );
};

export default ActionBarImage;