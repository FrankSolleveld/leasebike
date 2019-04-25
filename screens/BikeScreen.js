import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Bike',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>This will be the bike page.</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
