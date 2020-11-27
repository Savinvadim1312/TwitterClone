import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';

import { listTweets } from '../../src/graphql/queries';
import Tweet from '../Tweet';
import UserFleetsList from "../UserFleetsList";

const Feed = () => {

  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const tweetsData = await API.graphql(graphqlOperation(listTweets));
      setTweets(tweetsData.data.listTweets.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTweets();
  }, [])

  return (
    <View style={{width: '100%'}}>
      <FlatList
        data={tweets}
        renderItem={({item}) => <Tweet tweet={item}/>}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
        ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default Feed;
