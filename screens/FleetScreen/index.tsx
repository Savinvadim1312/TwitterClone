import React from 'react';
import {
  Text,
} from 'react-native';

import usersWithFleets from "../../data/usersWithFleets";
import FleetView from '../../components/FleetView';

const FleetScreen = () => {

  const user = usersWithFleets[0];
  const fleet = usersWithFleets[0].fleets.items[0];

  return (
    <FleetView user={user} fleet={fleet} />
  )
}

export default FleetScreen;
