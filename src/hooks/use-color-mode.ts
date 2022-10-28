import { useTheme } from 'next-themes';

export function useColorMode() {
  const { theme, setTheme } = useTheme();

  return { theme, setTheme };
}
