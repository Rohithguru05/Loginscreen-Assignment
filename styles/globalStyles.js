import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6366F1',       // Pleasant indigo
  background: '#F9FAFB',    // Very light gray
  cardBackground: '#FFFFFF', // Pure white
  borderColor: '#E5E7EB',   // Light gray border
  textPrimary: '#1F2937',   // Dark gray for text
  textSecondary: '#6B7280', // Medium gray
  error: '#EF4444',         // Red for errors
  google: '#DB4437',
  facebook: '#4267B2',
  apple: '#000000',
  buttonDisabled: '#9CA3AF', // Gray for disabled state
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
    paddingBottom: 80, // Extra space for fixed footer
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 15,
  },
});