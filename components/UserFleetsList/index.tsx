import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from './queries';

import UserFleetPreview from "../UserFleetPreview";

const UserFleetsList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listUsers));
        setUsers(data.data.listUsers.items);
      } catch (e) {
        console.log(e)
      }
    }
    fetchData();
  }, [])

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <UserFleetPreview user={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default UserFleetsList;
