// About screen - displays app information, version, and platform details
import Constants from 'expo-constants';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

/** A single info row inside an info card */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

export default function AboutScreen() {
  const appVersion = Constants.expoConfig?.version ?? '1.0.0';
  const expoVersion = Constants.expoVersion ?? 'N/A';
  const sdkVersion = Constants.expoConfig?.sdkVersion ?? '52.0.0';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* App Identity */}
      <View style={styles.header}>
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>📱</Text>
        </View>
        <Text style={styles.appName}>TestRN</Text>
        <Text style={styles.tagline}>A sample React Native app</Text>
      </View>

      {/* App Version Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Version Information</Text>
        <InfoRow label="App Version" value={appVersion} />
        <InfoRow label="Expo SDK" value={sdkVersion} />
        <InfoRow label="Expo Version" value={expoVersion} />
      </View>

      {/* Platform Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Platform</Text>
        <InfoRow label="Platform" value={Platform.OS} />
        <InfoRow
          label="OS Version"
          value={String(Platform.Version)}
        />
        <InfoRow
          label="React Native Version"
          value={(() => {
            // reactNativeVersion is present on Android constants
            const rnv = (Platform.constants as Record<string, unknown>)?.reactNativeVersion as
              | { major: number; minor: number; patch: number }
              | undefined;
            return rnv ? `${rnv.major}.${rnv.minor}.${rnv.patch}` : 'N/A';
          })()}
        />
      </View>

      {/* Tech Stack */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tech Stack</Text>
        <InfoRow label="Framework" value="React Native" />
        <InfoRow label="Build Tool" value="Expo" />
        <InfoRow label="Navigation" value="Expo Router" />
        <InfoRow label="Language" value="TypeScript" />
        <InfoRow label="Architecture" value="New Architecture" />
      </View>

      {/* Features */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Features Demonstrated</Text>
        {[
          '✅ Tab Navigation with Expo Router',
          '✅ Counter with state management',
          '✅ Native Alert dialog',
          '✅ Device Vibration',
          '✅ Device Info display',
          '✅ Form with text input & validation',
          '✅ TypeScript throughout',
          '✅ Dark / Light mode support',
          '✅ Works on Android & iOS',
        ].map((feature) => (
          <Text key={feature} style={styles.featureText}>
            {feature}
          </Text>
        ))}
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
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: 16,
  },
  iconPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: Colors.light.tint,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 40,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#6b7280',
  },
  card: {
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
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f9fafb',
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  infoValue: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '500',
  },
  featureText: {
    fontSize: 14,
    color: '#374151',
    paddingVertical: 4,
  },
});
