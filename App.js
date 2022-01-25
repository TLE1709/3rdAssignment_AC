import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
     
      <View style={styles.container}>
       <Image style={styles.lion} source={require('./imgs/lion.png')} />
        <Text style={styles.welcome}>Kitna Pyaar krte ho Mujhse</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <Button 
        style={styles.btn}
        title="Increase"
        onPress={this.incrementValue}
        />
        <View style={{padding: 30}} />
        <Button 
        style={styles.btn}
        title="Decrease"
        onPress={this.decrementValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#ECB390',
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:32,
    padding:30,
    fontWeight: 'bold',
    color:'white'
    
  },

  count : {
    fontSize: 40,
    marginBottom:30
  },

  lion:{
    height:400,
    width:350
  },
  btn:{
    borderRadius:40
  }
});