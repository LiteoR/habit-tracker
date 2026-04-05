import { ThemedView } from '@/src/components/themed/themed-view';
import { ThemedText } from '@/src/components/themed/themed-text';
import { StyleSheet, View } from 'react-native';
import { UiButton } from '@/src/components/ui/ui-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/src/hooks/use-color-scheme';
import { Colors } from '@/src/constants/theme';

export default function OnboardingScreen() {
  const theme = useColorScheme();
  const colors = Colors[theme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemedView style={styles.contentContainer}>
        <View style={styles.content}>
          <ThemedText type={'title'} style={[styles.text, styles.gap]}>
            Добро пожаловать в HabitTracker
          </ThemedText>
          <ThemedText type={'default'} style={styles.text}>
            Формируй полезные привычки каждый день. Небольшие шаги - большие результаты.
          </ThemedText>
        </View>
        <UiButton style={styles.button} label={'Начать'} />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  gap: {
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    marginTop: 'auto',
  },
});
