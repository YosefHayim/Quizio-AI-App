import { View, Text } from 'react-native';
import { type ErrorBoundaryProps } from 'expo-router';

const ErrorBoundary = ({ error, retry }: ErrorBoundaryProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{error.message}</Text>
      <Text onPress={retry}>Try Again?</Text>
    </View>
  );
};

export default ErrorBoundary;
