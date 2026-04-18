// Home screen - demonstrates counter, alerts, vibration, device info, and form input
import { useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { DeviceInfoCard } from '@/components/DeviceInfoCard';

export default function HomeScreen() {
  const [count, setCount] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');
  const [submittedText, setSubmittedText] = useState<string>('');

  // Show a native alert dialog
  const handleShowAlert = (): void => {
    Alert.alert(
      'Hello from TestRN!',
      'This is a native alert dialog. It works on both iOS and Android.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('Alert OK pressed') },
      ]
    );
  };

  // Trigger device vibration
  const handleVibrate = (): void => {
    if (Platform.OS === 'android') {
      // Android: vibrate for 500ms
      Vibration.vibrate(500);
    } else {
      // iOS: short vibration (duration is ignored on iOS)
      Vibration.vibrate();
    }
    Alert.alert('Vibration', 'Device vibrated! (Check your device)');
  };

  // Handle form submission
  const handleSubmit = (): void => {
    if (inputText.trim() === '') {
      Alert.alert('Validation Error', 'Please enter some text before submitting.');
      return;
    }
    setSubmittedText(inputText.trim());
    setInputText('');
    Alert.alert('Success', `Form submitted with: "${inputText.trim()}"`);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      {/* Welcome Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Welcome to TestRN! 👋</Text>
        <Text style={styles.subtitle}>
          A sample React Native app built with Expo SDK 52
        </Text>
      </View>

      {/* Counter Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Counter</Text>
        <Text style={styles.counterText}>{count}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => setCount((c) => c - 1)}
          >
            <Text style={styles.secondaryButtonText}>− Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => setCount((c) => c + 1)}
          >
            <Text style={styles.primaryButtonText}>+ Increment</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, styles.outlineButton, styles.fullWidth]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.outlineButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Device Capabilities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Capabilities</Text>
        <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={handleShowAlert}>
          <Text style={styles.primaryButtonText}>🔔 Show Native Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handleVibrate}
        >
          <Text style={styles.secondaryButtonText}>📳 Vibrate Device</Text>
        </TouchableOpacity>
      </View>

      {/* Device Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Info</Text>
        <DeviceInfoCard />
      </View>

      {/* Form Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Simple Form</Text>
        <TextInput
          style={styles.input}
          placeholder="Type something here..."
          placeholderTextColor="#9ca3af"
          value={inputText}
          onChangeText={setInputText}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={handleSubmit}
        >
          <Text style={styles.primaryButtonText}>Submit</Text>
        </TouchableOpacity>
        {submittedText !== '' && (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedLabel}>Last submitted:</Text>
            <Text style={styles.submittedText}>"{submittedText}"</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.light.tint,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  fullWidth: {
    flex: 0,
  },
  primaryButton: {
    backgroundColor: Colors.light.tint,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
  },
  secondaryButtonText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 15,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.light.tint,
  },
  outlineButtonText: {
    color: Colors.light.tint,
    fontWeight: '600',
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#111827',
    backgroundColor: '#f9fafb',
    marginBottom: 8,
  },
  submittedContainer: {
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#22c55e',
    marginTop: 4,
  },
  submittedLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  submittedText: {
    fontSize: 15,
    color: '#15803d',
    fontWeight: '500',
  },
});
