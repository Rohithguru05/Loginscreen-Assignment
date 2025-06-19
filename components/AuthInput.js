import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { loginScreenStyles } from '../styles/LoginScreenStyles';
import { globalStyles, colors } from '../styles/globalStyles';

const AuthInput = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  onToggleSecureEntry,
  showSecureEntryToggle = false,
  error,
  ...props
}) => {
  return (
    <View style={loginScreenStyles.inputContainer}>
      <View style={loginScreenStyles.inputWrapper}>
        <Ionicons 
          name={iconName} 
          size={20} 
          color={colors.primary} 
          style={loginScreenStyles.inputIcon} 
        />
        <TextInput
          style={[
            loginScreenStyles.input,
            secureTextEntry && loginScreenStyles.passwordInput
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {showSecureEntryToggle && (
          <TouchableOpacity
            style={loginScreenStyles.eyeIcon}
            onPress={onToggleSecureEntry}
          >
            <Ionicons 
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={colors.textSecondary} 
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default AuthInput;