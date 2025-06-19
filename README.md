# Login Screen App

A modern, stylish React Native login screen built with Expo CLI featuring clean UI, icons, and bonus features.

## Features

### Core Features
- ✅ App title/logo with icon
- ✅ Email input field with validation
- ✅ Password input field (secure entry)
- ✅ Login button with loading state
- ✅ "Forgot Password?" link
- ✅ "Sign Up" link for new users
- ✅ JSON file creation for backend integration

### Bonus Features
- ✅ Email format validation
- ✅ Show/hide password toggle
- ✅ Responsive design for various device sizes
- ✅ Input validation with error messages
- ✅ Loading indicator on login

### Extra Features
- ✅ Modern dark theme UI
- ✅ Beautiful icons using @expo/vector-icons
- ✅ Social login buttons (Google, Facebook, Apple)
- ✅ Smooth animations and transitions
- ✅ Keyboard avoidance
- ✅ Clean, minimalist design
- ✅ Professional color scheme
- ✅ Shadow effects and modern styling

## Technologies Used
- React Native
- Expo CLI
- @expo/vector-icons
- React Hooks (useState)

## How to Run

1. Make sure you have Node.js installed
2. Install Expo CLI globally:
   ```bash
   npm install -g @expo/cli
   ```
3. Navigate to the project directory:
   ```bash
   cd LoginScreenApp
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

## Running on Different Platforms

- **Web**: `npm run web`
- **Android**: `npm run android` (requires Android Studio/emulator)
- **iOS**: `npm run ios` (requires macOS and Xcode)

## Project Structure

```
LoginScreenApp/
├── App.js                  # Main login screen component
├── components/             # Reusable UI components
│   ├── AuthHeader.js
│   ├── AuthInput.js
│   └── SocialLoginButtons.js
    |__  SuccessScreen.js
├── styles/                 # Styling files
│   ├── globalStyles.js
│   └── LoginScreenStyles.js
├── package.json            # Dependencies and scripts
├── app.json               # Expo configuration
├── index.js               # Entry point for Expo
└── README.md              # This file
```

## UI Design

The login screen features:
- Dark theme with purple accent color (#6C63FF)
- Centered layout with proper spacing
- Icon-enhanced input fields
- Modern button design with shadows
- Social login integration
- Responsive design for all screen sizes

## Validation

- Email format validation
- Password minimum length (6 characters)
- Real-time error display
- Form submission prevention on invalid input

