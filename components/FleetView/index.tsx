import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import { UserType, FleetType } from '../../types';;

import styles from './styles';

export type FleetViewProps = {
  user: UserType;
  fleet: FleetType;
}

const FleetView = (props: FleetViewProps) => {
  const { user, fleet } = props;
  return (
    <View style={styles.container}>
      {fleet.image && <Image source={{ uri: fleet.image}} style={styles.image}/>}
      <Text style={styles.text}>{fleet.text}</Text>
    </View>
  )
}

export default FleetView;
