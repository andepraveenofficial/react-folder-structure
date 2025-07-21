import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "./Button";
import type { ComponentProps } from "react";

/* -----> Meta <----- */
type StoryProps = ComponentProps<typeof Button> & {
	children: React.ReactNode;
};

const meta: Meta<StoryProps> = {
	title: "atoms/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: ["primary", "secondary", "danger", "outline"],
			control: {
				type: "select",
			},
		},
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "select",
			},
		},
	},
	args: {
		// common args for all stories -> otherwise you need to send it for each story
		children: "Button",
		onClick: fn(),
	},
};

export default meta; // This default export determines where your story goes in the story list

/* -----> Stories <----- */
type Story = StoryObj<StoryProps>;

// Default
export const Default: Story = {
	args: {},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

// 01 variant
export const Primary: Story = {
	args: {
		variant: "primary",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Danger: Story = {
	args: {
		variant: "danger",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Outline: Story = {
	args: {
		variant: "outline",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

// 02 size
export const Small: Story = {
	args: {
		size: "sm",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Medium: Story = {
	args: {
		size: "md",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};

export const Large: Story = {
	args: {
		size: "lg",
	},
	render: ({ children, ...args }) => <Button {...args}>{children}</Button>,
};
