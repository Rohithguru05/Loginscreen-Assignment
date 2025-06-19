import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loginScreenStyles } from '../styles/LoginScreenStyles';
import { colors } from '../styles/globalStyles';

const SocialLoginButtons = ({ onGooglePress, onFacebookPress, onApplePress }) => {
  return (
    <>
      <View style={loginScreenStyles.divider}>
        <View style={loginScreenStyles.dividerLine} />
        <Text style={loginScreenStyles.dividerText}>or continue with</Text>
        <View style={loginScreenStyles.dividerLine} />
      </View>
      <View style={loginScreenStyles.socialContainer}>
        <TouchableOpacity 
          style={loginScreenStyles.socialButton} 
          onPress={onGooglePress}
        >
          <Ionicons name="logo-google" size={24} color={colors.google} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={loginScreenStyles.socialButton} 
          onPress={onFacebookPress}
        >
          <Ionicons name="logo-facebook" size={24} color={colors.facebook} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={loginScreenStyles.socialButton} 
          onPress={onApplePress}
        >
          <Ionicons name="logo-apple" size={24} color={colors.apple} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SocialLoginButtons;