import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Text,
} from 'react-native';

import FleetView from '../../components/FleetView';
import { API, graphqlOperation } from 'aws-amplify';


import { useRoute } from '@react-navigation/native';
import {FleetType, UserType} from "../../types";
import {listUsers} from "../../components/UserFleetsList/queries";

const FleetScreen = () => {

  const route = useRoute();
  const { userId } = route.params;

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState<null|UserType>(null)
  const [fleetIndex, setFleetIndex] = useState(-1);
  const [fleet, setFleet] = useState<null|FleetType>(null);

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
  }, []);

  useEffect(() => {
    if (!users || users.length === 0) {
      return;
    }
    setUser(users.find(u => u.id === userId) || null);
    setFleetIndex(0);
  }, [users])

  useEffect(() => {
    if (!user) {
      return;
    }

    let userIndex = -1;
    for(let i = 0; i < users?.length; i++) {
      if (users[i].id === user.id) {
        userIndex = i;
        break;
      }
    }

    if (fleetIndex >= user?.fleets?.items.length) {
      if (users.length > userIndex + 1) {
        // go to the next user
        setUser(users[userIndex + 1]);
        setFleetIndex(0);
      } else {
        setFleetIndex(user?.fleets?.items.length);
      }
    } else if (fleetIndex < 0) {
      // go to the prev user
      if(userIndex > 0){
        setUser(users[userIndex - 1]);
        setFleetIndex(users[userIndex - 1].fleets.items.length - 1);
      } else {
        setFleetIndex(0)
      }
    }
    else {
      setFleet(user?.fleets?.items[fleetIndex])
    }
  }, [fleetIndex])

  const goToNextFleet = () => {
    setFleetIndex(fleetIndex + 1);
  }

  const goToPrevFleet = () => {
    setFleetIndex(fleetIndex - 1);
  }

  if (fleet === null) {
    return <ActivityIndicator />
  }

  return (
    <FleetView
      user={user}
      fleet={fleet}
      goToNextFleet={goToNextFleet}
      goToPrevFleet={goToPrevFleet}
    />
  )
}

export default FleetScreen;
