/**
 * Resika - Modif by Sudiana
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>

        <View style={{ margin: 5, backgroundColor: 'orange' }}>
          <Text style={{ padding: 15, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: 'white' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang (cm)"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Lebar (cm)"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Tinggi (cm)"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#90caf9' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang{'\t'}= {this.state.panjang} cm {'\n'}
              Lebar{'\t'}{'\t'}{'\t'}= {this.state.lebar} cm {'\n'}
              Tinggi{'\t'}{'\t'}= {this.state.tinggi} cm {'\n'}
              Volume{'\t'}{'\t'}= {this.state.volume} cmᵌ
          </Text>
         </View>

   </View>

    );
  }

}


AppRegistry.registerComponent('AppForm2', () => HitungVolumeBalok);
