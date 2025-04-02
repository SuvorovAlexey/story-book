import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { SwitchComponent } from '../../../../projects/suvorov-test-ui-lib/src/lib/components/switch/switch.component';

const meta: Meta<SwitchComponent> = {
  component: SwitchComponent,
};

export default meta;
type Story = StoryObj<SwitchComponent>;

export const Active: Story = {
  name: 'Checked',
  args: {
    checked: true,
    onChangeSwitch: fn()
  },
  tags: ['autodocs'],
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
  },
  tags: ['autodocs'],
};
