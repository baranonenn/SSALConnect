import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay'

class Liste extends Component {
  state = { data: [] };
componentWillMount () {
  axios.get('http://ssalconnect-62fef.firebaseapp.com')
  .then(response => this.setState({ data: response.data }));
}

componentDidMount () {
  console.log('componentDidMount');
}
renderData () {
  return this.state.data.map((responseData, Id) =>
    <Detay key={Id} data={responseData} />
  );
}

  render () {
    console.log('gelen data ' + this.state);
    console.log('render');
    return (
      <ScrollView style={{ marginTop: 0}}>
        {this.renderData()}
      </ScrollView>

    );
  }
}


export default Liste;
