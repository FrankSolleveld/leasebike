import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


// Tensorflow shite here

import { TfImageRecognition } from 'react-native-tensorflow';
 
const tfImageRecognition = new TfImageRecognition({
  model: require('./assets/tenserflow_inception_graph.pb'),
  labels: require('./assets/tensorflow_labels.txt'),
  imageMean: 117, // Optional, defaults to 117
  imageStd: 1 // Optional, defaults to 1
})
 
const results = tfImageRecognition.recognize({
  image: require('./assets/test.jpg'),
  inputName: "input", //Optional, defaults to "input"
  inputSize: 224, //Optional, defaults to 224
  outputName: "output", //Optional, defaults to "output"
  maxResults: 3, //Optional, defaults to 3
  threshold: 0.1, //Optional, defaults to 0.1
})
 
results.forEach(result =>
  console.log(
    result.id, // Id of the result
    result.name, // Name of the result
    result.confidence // Confidence value between 0 - 1
  )
)
 
tfImageRecognition.close() // Necessary in order to release objects on native side