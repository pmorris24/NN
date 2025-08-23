// src/ThemeService.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isCrosshairEnabled: boolean;
  toggleCrosshair: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [isCrosshairEnabled, setIsCrosshairEnabled] = useState(false);
  
  useEffect(() => {
    const fetchSettings = async () => {
      const { data, error } = await supabase.from('settings').select('key, value');
      
      if (error) {
        console.error('Error fetching settings:', error);
      } else if (data) {
        const themeSetting = data.find(s => s.key === 'theme');
        if (themeSetting) setThemeState(themeSetting.value as Theme);

        const crosshairSetting = data.find(s => s.key === 'crosshairEnabled');
        if (crosshairSetting) setIsCrosshairEnabled(crosshairSetting.value === 'true');
      }
    };

    fetchSettings();
  }, []);

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    
    await supabase.from('settings').upsert({ key: 'theme', value: newTheme });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const toggleCrosshair = async () => {
    const newValue = !isCrosshairEnabled;
    setIsCrosshairEnabled(newValue);
    await supabase.from('settings').upsert({ key: 'crosshairEnabled', value: newValue });
  };
  
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isCrosshairEnabled, toggleCrosshair }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};