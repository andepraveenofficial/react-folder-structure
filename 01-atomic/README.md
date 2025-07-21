# Atomic Folder Structure

This project demonstrates an atomic folder structure for a React application using Typescript and Vite.

### Tech Stack

- UI Layer: React
- Language: Typescript
- Build Tool: Vite

### Setup

1. `npm install -g npm`
2. `npx create-vite .`
3. Select React
4. Select Typescript

### Styles

- `npm install -D sass`

### Storybook Setup

- Install Storybook : `npx storybook@latest init`
- Note : sometimes it gives installation stuck.

### Installation

- `npm install`

### Start the Application

- `npm run dev`

### Start the Storybook

- `npm run storybook`

### Design System Structure

1. variant: Color variations (`primary, secondary, danger, outline`)
2. size: Box model (`sm, md, lg`)
3. event : Functionality (`onClick`)
4. Fullwidth
5. Disabled

### Atomic Design

- Atomic Design is a methodology for creating design systems with a clear hierarchy of reusable components.
- Breaks down UI into small parts.
- Makes components easy to reuse across projects.
- Follows a simple small-to-big approach.

### Atomic Design Structure

- components
  1. atoms
  2. molecules
  3. organisms
  4. templates
  5. pages

### 1. atoms

- Atoms are the smallest component. They are basic UI elements that cannot be broken down further.
- Examples: `h1`, `p`, `label` and `button`

### 2. molecules

- Molecules are combination of atoms.
- Examples: InputBox with labele -> `InputField`,

### 3. organisms

- Organisms are combination of multiple molecules and/or atoms.

### 4. templates

- Templates are page-level components that define the layout and structure of a page. They are made up of organisms and can include placeholders for content.

### 5. pages

- Pages are the final components that are rendered in the application. They are composed of templates and contain the actual content that will be displayed to the user.
