// DeviceInfoCard - Reusable component that displays platform and OS version info
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';

/** Props for a single info item row */
interface InfoItemProps {
  label: string;
  value: string;
}

/** Renders a single label/value pair */
function InfoItem({ label, value }: InfoItemProps) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

/** Displays device platform and OS version information */
export function DeviceInfoCard() {
  const platformName =
    Platform.OS.charAt(0).toUpperCase() + Platform.OS.slice(1);
  const osVersion = String(Platform.Version);
  const isNewArch = (global as unknown as Record<string, unknown>).__turboModuleProxy !== undefined
    ? 'Yes (New Arch)'
    : 'No (Old Arch)';

  return (
    <View style={styles.card}>
      <InfoItem label="Platform" value={platformName} />
      <InfoItem label="OS Version" value={osVersion} />
      <InfoItem label="New Architecture" value={isNewArch} />
      <InfoItem
        label="64-bit"
        value={Platform.OS === 'android'
          ? String((Platform.constants as { is64BitMode?: boolean })?.is64BitMode ?? 'N/A')
          : 'N/A'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
});
