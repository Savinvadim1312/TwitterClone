import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import NewTweetButton from "../components/NewTweetButton";
import UserFleet from '../components/UserFleetPreview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <UserFleet user={{id: '1', name: 'vadim', username: 'vadim', image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'}} />
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
