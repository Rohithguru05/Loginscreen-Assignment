import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loginScreenStyles } from '../styles/LoginScreenStyles';
import { colors } from '../styles/globalStyles';

const AuthHeader = () => {
  return (
    <View style={loginScreenStyles.header}>
      <View style={loginScreenStyles.logoContainer}>
        <Ionicons name="shield-checkmark" size={60} color={colors.primary} />
      </View>
      <Text style={loginScreenStyles.title}>Welcome Back</Text>
      <Text style={loginScreenStyles.subtitle}>Sign in to your account</Text>
    </View>
  );
};

export default AuthHeader;