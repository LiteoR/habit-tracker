import { TextProps } from 'react-native';
import { ThemedText } from '@/src/components/themed/themed-text';

export function MonoText(props: TextProps) {
  return <ThemedText {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
