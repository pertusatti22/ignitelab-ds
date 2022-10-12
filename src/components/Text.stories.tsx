import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
	title: 'Components/Text',
	component: Text,
	args: {
		children: 'The quick brown fox jumps over the lazy dog.',
		size: 'md',
	},
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
	args: {
		size: 'sm'
	}
}

export const Large: StoryObj<TextProps> = {
	args: {
		size: 'lg'
	}
}

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: (
			<p>The quick brown fox jumps over the lazy dog.</p>
		)
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			}
		}
	}
}