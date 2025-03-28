import { applicationConfig, Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { inject, provideAppInitializer } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import Laura from '@primeng/themes/aura';
import { provideAnimations } from '@angular/platform-browser/animations';
setCompodocJson(docJson);

function provideTheme(): void {
  const config = inject(PrimeNG);
  config.theme.set({
    preset: Laura,
    options: {
      darkModeSelector: false,
    },
  });
}

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideAppInitializer(provideTheme),
      ],
    }),
  ],
};

export default preview;
