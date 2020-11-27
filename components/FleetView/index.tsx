import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import { UserType, FleetType } from '../../types';
import ProfilePicture from "../ProfilePicture";

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

      <View style={styles.userHeaderContainer}>
        <ProfilePicture image={user.image} size={70} />
        <View style={styles.userNames}>
          <Text style={styles.name}>{user.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.username}>
              @{user.username}
            </Text>
            <Text style={styles.time}>
              2 days ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FleetView;
