import React, {useEffect, useState} from 'react';
import {
  Text,
} from 'react-native';

import usersWithFleets from "../../data/usersWithFleets";
import FleetView from '../../components/FleetView';

import { useRoute } from '@react-navigation/native';
import {FleetType, UserType} from "../../types";

const FleetScreen = () => {

  const route = useRoute();
  const { userId } = route.params;

  const [user, setUser] = useState<null|UserType>(usersWithFleets.find(u => u.id === userId))
  const [fleetIndex, setFleetIndex] = useState(0);
  const [fleet, setFleet] = useState<null|FleetType>(user?.fleets?.items[fleetIndex])

  useEffect(() => {

    let userIndex = -1;
    for(let i = 0; i < usersWithFleets?.length; i++) {
      if (usersWithFleets[i].id === user.id) {
        userIndex = i;
        break;
      }
    }

    if (fleetIndex >= user?.fleets?.items.length) {
      if (usersWithFleets.length > userIndex + 1) {
        // go to the next user
        setUser(usersWithFleets[userIndex + 1]);
        setFleetIndex(0);
      } else {
        setFleetIndex(user?.fleets?.items.length);
      }
    } else if (fleetIndex < 0) {
      // go to the prev user
      if(userIndex > 0){
        setUser(usersWithFleets[userIndex - 1]);
        setFleetIndex(usersWithFleets[userIndex - 1].fleets.items.length - 1);
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
