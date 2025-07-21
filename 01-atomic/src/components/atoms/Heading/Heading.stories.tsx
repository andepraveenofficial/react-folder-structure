import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";
import type { ComponentProps } from "react";

/* -----> Meta <----- */
type StoryProps = ComponentProps<typeof Heading> & {
	children: React.ReactNode;
};

const meta: Meta<StoryProps> = {
	title: "atoms/Heading",
	component: Heading,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
			control: {
				type: "select",
			},
		},
		color: {
			options: ["primary", "secondary", "danger", "inherit"],
			control: {
				type: "select",
			},
		},
	},
	args: {
		// common args for all stories -> otherwise you need to send it for each story
		children: "Heading",
	},
};

export default meta; // This default export determines where your story goes in the story list

/* -----> Stories <----- */
type Story = StoryObj<StoryProps>;

// Default
export const Default: Story = {
	args: {},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

// 01 variant
export const H1: Story = {
	args: {
		variant: "h1",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const H2: Story = {
	args: {
		variant: "h2",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const H3: Story = {
	args: {
		variant: "h3",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const H4: Story = {
	args: {
		variant: "h4",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const H5: Story = {
	args: {
		variant: "h5",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const H6: Story = {
	args: {
		variant: "h6",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

// 02 color
export const Primary: Story = {
	args: {
		color: "primary",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const Secondary: Story = {
	args: {
		color: "secondary",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const Danger: Story = {
	args: {
		color: "danger",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};

export const Inherit: Story = {
	args: {
		color: "inherit",
	},
	render: ({ children, ...args }) => <Heading {...args}>{children}</Heading>,
};
