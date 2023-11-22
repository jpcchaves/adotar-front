'use client';

import { presetDark, presetLight } from '@/config/color-presets';
import { MODE, siteConfig } from '@/config/site.config';
import { useColorPresetName } from '@/hooks/use-theme-color';
import cn from '@/utils/class-names';
import { updateThemeColor } from '@/utils/update-theme-color';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { PiMoonFill, PiSunFill } from 'react-icons/pi';
import { ActionIcon } from 'rizzui';

const isThemeLight = (currentTheme: string | undefined) => {
  return currentTheme === MODE.LIGHT;
};

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { colorPresetName } = useColorPresetName();

  const toggleTheme = (currentTheme: string | undefined) => {
    if (isThemeLight(currentTheme)) {
      setTheme(MODE.DARK);
    } else {
      setTheme(MODE.LIGHT);
    }
  };

  useEffect(() => {
    if (isThemeLight(theme) && colorPresetName === 'black') {
      updateThemeColor(
        presetLight.lighter,
        presetLight.light,
        presetLight.default,
        presetLight.dark
      );
    }
    if (theme === 'dark' && colorPresetName === 'black') {
      updateThemeColor(
        presetDark.lighter,
        presetDark.light,
        presetDark.default,
        presetDark.dark
      );
    }
  }, [theme, colorPresetName]);

  return (
    <ActionIcon
      aria-label="theme toggle button"
      variant="outline"
      value={theme ?? siteConfig.mode}
      className={cn(
        'relative h-[34px] w-[34px] rounded-full shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9',
        className
      )}
      onClick={() => setTheme(isThemeLight(theme) ? MODE.DARK : MODE.LIGHT)}
    >
      <ThemeIcon theme={theme} />
    </ActionIcon>
  );
}

function ThemeIcon({ theme }: { theme: string | undefined }) {
  return isThemeLight(theme) ? (
    <PiMoonFill className="h-[18px] w-[18px] text-blue-300" />
  ) : (
    <PiSunFill className="h-[18px] w-[18px] text-orange-300" />
  );
}
