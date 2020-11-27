import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { UserType } from '../../types';
import ProfilePicture from "../ProfilePicture";
import styles from './styles';

export type UserFleetPreviewProps = {
  user: UserType;
}

const UserFleetPreview = (props: UserFleetPreviewProps) => {

  const { user: { username, image } } = props;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ProfilePicture image={image} size={70} />
      </View>
      <Text style={styles.username}>{username}</Text>
    </View>
  )
}

export default UserFleetPreview;
