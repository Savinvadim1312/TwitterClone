import React from 'react';
import {
  Text,
  View,
  Image, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';

import { UserType, FleetType } from '../../types';
import ProfilePicture from "../ProfilePicture";

import styles from './styles';
import moment from "moment";

export type FleetViewProps = {
  user: UserType;
  fleet: FleetType;
  goToNextFleet: Function;
  goToPrevFleet: Function;
}

const FleetView = (props: FleetViewProps) => {
  const { user, fleet, goToNextFleet, goToPrevFleet } = props;
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
              {moment(fleet.createdAt).fromNow()}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{flex: 1}} onPress={() => goToPrevFleet()} />
        <TouchableOpacity style={{flex: 1}} onPress={() => goToNextFleet()} />
      </View>

    </View>
  )
}

export default FleetView;
