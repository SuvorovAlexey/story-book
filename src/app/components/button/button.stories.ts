import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { SwitchComponent } from '../switch/switch.component';
import { fn } from '@storybook/test';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    label: 'Click me',
    onClick: fn()
  },
  tags: ['autodocs'],
};

export const Secondary: Story = {
  name: 'Secondary',
  args: {
    label: 'Click me',
    severity: 'secondary',
    onClick: fn()
  },
  tags: ['autodocs'],
};

export const SmallSize: Story = {
  name: 'Small size',
  args: {
    size: 'small',
    label: 'Click me',
  },
  tags: ['autodocs'],
};

export const NormalSize: Story = {
  name: 'Normal size',
  args: {
    label: 'Click me',
  },
  tags: ['autodocs'],
};

export const LargeSize: Story = {
  name: 'Large size',
  args: {
    size: 'large',
    label: 'Click me',
  },
  tags: ['autodocs'],
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
    label: 'Click me',
  },
  tags: ['autodocs'],
};
