import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Text,
  Modal,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import AuthHeader from './components/AuthHeader';
import AuthInput from './components/AuthInput';
import SocialLoginButtons from './components/SocialLoginButtons';
import SuccessScreen from './components/SuccessScreen';

import { globalStyles, colors } from './styles/globalStyles';
import { loginScreenStyles } from './styles/LoginScreenStyles';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    setEmailError('');
    setPasswordError('');

    let hasError = false;
    
    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const loginData = {
        email: email,
        password: password,
        timestamp: new Date().toISOString(),
      };
      setSuccessMessage(`Welcome back! You've successfully logged in.`);
      setShowSuccess(true);
    }, 1500);
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset link would be sent to your email.');
  };

  const handleSignUp = () => {
    Alert.alert('Sign Up', 'Redirecting to sign up screen...');
  };

  const handleSocialLogin = (platform) => {
    Alert.alert('Coming Soon', `${platform} login will be available soon!`);
  };

  const closeSuccessScreen = () => {
    setShowSuccess(false);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View style={{ flex: 1 }}>
          <ScrollView 
            contentContainerStyle={globalStyles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <AuthHeader />

            <View style={loginScreenStyles.form}>
              <AuthInput
                iconName="mail-outline"
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={false}
                onSubmitEditing={() => Keyboard.dismiss()}
                error={emailError}
              />

              <AuthInput
                iconName="lock-closed-outline"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                onToggleSecureEntry={() => setShowPassword(!showPassword)}
                showSecureEntryToggle={true}
                blurOnSubmit={false}
                onSubmitEditing={() => Keyboard.dismiss()}
                error={passwordError}
              />

              <TouchableOpacity 
                style={loginScreenStyles.forgotPassword} 
                onPress={handleForgotPassword}
              >
                <Text style={loginScreenStyles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[
                  loginScreenStyles.loginButton, 
                  isLoading && loginScreenStyles.loginButtonDisabled
                ]} 
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.textPrimary} size="small" />
                ) : (
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={loginScreenStyles.loginButtonText}>Sign In</Text>
                    <Ionicons 
                      name="arrow-forward" 
                      size={20} 
                      color={colors.textPrimary} 
                      style={{ marginLeft: 8 }} 
                    />
                  </View>
                )}
              </TouchableOpacity>

              <SocialLoginButtons 
                onGooglePress={() => handleSocialLogin('Google')}
                onFacebookPress={() => handleSocialLogin('Facebook')}
                onApplePress={() => handleSocialLogin('Apple')}
              />
            </View>
          </ScrollView>

          <View style={loginScreenStyles.fixedFooter}>
            <Text style={loginScreenStyles.footerText}>Don't have an account? </Text>
            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={handleSignUp}
            >
              <Text style={loginScreenStyles.signUpText}>Sign Up</Text>
              <Ionicons 
                name="arrow-forward" 
                size={16} 
                color={colors.primary} 
                style={{ marginLeft: 5 }} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Modal
        visible={showSuccess}
        transparent={true}
        animationType="fade"
        onRequestClose={closeSuccessScreen}
      >
        <SuccessScreen 
          message={successMessage} 
          onClose={closeSuccessScreen} 
        />
      </Modal>
    </View>
  );
}