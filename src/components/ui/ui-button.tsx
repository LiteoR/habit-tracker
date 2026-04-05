import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ThemedText } from '@/src/components/themed/themed-text';
import { useColorScheme } from '@/src/hooks/use-color-scheme';
import { Colors } from '@/src/constants/theme';

type ButtonProps = TouchableOpacityProps & {
  label?: string;
};

export const UiButton = ({ label, ...props }: ButtonProps) => {
  const theme = useColorScheme();
  const colors = Colors[theme];

  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, { backgroundColor: colors.button }, props.style]}
    >
      <ThemedText type={'defaultSemiBold'} style={{ color: colors.textButton }}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
});
