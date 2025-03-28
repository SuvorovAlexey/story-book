import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import { fn } from '@storybook/test';

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
