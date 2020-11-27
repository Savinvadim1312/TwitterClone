import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { UserType } from '../../types';
import ProfilePicture from "../ProfilePicture";
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export type UserFleetPreviewProps = {
  user: UserType;
}

const UserFleetPreview = (props: UserFleetPreviewProps) => {

  const { user: { id, username, image } } = props;

  const navigation = useNavigation();

  const onPress = () => {
    // navigate to FLeet screen
    navigation.navigate('Fleet', { userId: id });
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.image}>
          <ProfilePicture image={image} size={70} />
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default UserFleetPreview;
