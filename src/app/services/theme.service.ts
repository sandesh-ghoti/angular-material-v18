import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BrowserStorageService } from './browser-storage.service';

const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'themePreference';
const DARK_MODE_CLASS_NAME = 'dark-mode';
const LIGHT_MODE_CLASS_NAME = 'light-mode';
const PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)';
export type Theme = 'dark' | 'light' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly localStorage = inject(BrowserStorageService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme | null>(this.getThemeFromLocalStorageValue());

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.loadThemePreference();
    this.watchPreferredColorScheme();
  }
  setTheme(theme: Theme) {
    this.theme.set(theme);
    this.setThemeBodyClass(theme === 'auto' ? preferredScheme() : theme);
    this.setThemeInLocalStorage();
  }
  private setThemeBodyClass(theme: 'dark' | 'light'): void {
    const documentClassList = this.document.documentElement.classList;
    if (theme === 'dark') {
      documentClassList.add(DARK_MODE_CLASS_NAME);
      documentClassList.remove(LIGHT_MODE_CLASS_NAME);
    } else {
      documentClassList.add(LIGHT_MODE_CLASS_NAME);
      documentClassList.remove(DARK_MODE_CLASS_NAME);
    }
  }
  // 1. Read theme preferences stored in localStorage
  // 2. In case when there are no stored user preferences, then read them from device preferences.
  private loadThemePreference(): void {
    const savedUserPreference = this.getThemeFromLocalStorageValue();
    const useTheme = savedUserPreference ?? 'auto';

    this.theme.set(useTheme);
    this.setThemeBodyClass(useTheme === 'auto' ? preferredScheme() : useTheme);
  }

  // handle localstorage theme settings
  private getThemeFromLocalStorageValue(): Theme | null {
    const themePreference = this.localStorage.get(
      THEME_PREFERENCE_LOCAL_STORAGE_KEY
    );
    if (themePreference) {
      return themePreference as Theme;
    }
    return null;
  }
  private setThemeInLocalStorage(): void {
    if (this.theme()) {
      this.localStorage.set(THEME_PREFERENCE_LOCAL_STORAGE_KEY, this.theme()!);
    }
  }

  // handle system theme change
  private watchPreferredColorScheme(): void {
    window
      .matchMedia(PREFERS_COLOR_SCHEME_DARK)
      .addEventListener('change', (event) => {
        const preferredScheme = event.matches ? 'dark' : 'light';
        this.setThemeBodyClass(preferredScheme);
      });
  }
}

function preferredScheme(): 'dark' | 'light' {
  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches
    ? 'dark'
    : 'light';
}
