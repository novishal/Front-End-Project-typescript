This project is a frontend component library built with React, TypeScript, Tailwind CSS, and Vite, designed to demonstrate reusable and accessible UI components. The goal is to create clean, modern, and responsive components that can be easily integrated into any web application.

Currently, the project includes two key components:
1. InputField: A flexible input component with validation, optional password toggle, and clear button support.

2. DataTable: A customizable table with support for sorting, row selection, loading states, and empty states.

The project is set up with Storybook for component documentation and visualization, along with basic testing for reliability. It also follows best practices for TypeScript typing, accessibility (ARIA labels), and modern UI styling. 

Here is the folder structure(Made with chatgpt)-:
front-end-project/
├── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── inputField.tsx
│   │   │   └── inputField.stories.tsx
│   │   └── DataTable/
│   │       ├── datatable.tsx
│   │       ├── datatable.stories.tsx
│   │       └── dataTable.test.tsx
│   └── App.tsx
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── vitest.setup.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── index.html

<!--  Setup Instruction-->
1.Clone the Repository
2.Install Dependencies
(Make sure you have Node.js and npm installed.)
3.Run the Development Server
(Start the Vite dev server with: npm run dev)
4.Storybook Setup
(To view and interact with the components in Storybook :npm run storybook)
5.Run Tests
(The project includes basic tests for components.)

<!-- Problems faced  -->
During the development of this project, I encountered several challenges:
1.TypeScript Setup with Vite
1.1 Initially, configuring TypeScript with Vite caused issues due to unfamiliarity with tsconfig.json.
1.2 I resolved this by creating a clean tsconfig.json and adjusting imports carefully.
1.3 Since I had never worked with TypeScript before, coming from a pure JavaScript background gave me lots of issues.

2.Tailwind CSS Configuration
2.1 I eventually simplified the setup and removed unnecessary complexity to avoid conflicts.

3.Storybook Integration
3.1 Setting up Storybook with TypeScript and Vite caused compatibility issues.
3.2 After adjusting the .storybook/main.ts and preview.ts, I managed to run stories successfully.

4.Testing Setup
4.1 Writing initial tests in TypeScript was confusing due to missing typings.
4.2 This was fixed by installing testing libraries (vitest, @testing-library/react, etc.) and adjusting test files.

5.Deployment on Vercel
5.1 The first Vercel build failed because of missing scripts and configuration.
5.2 Adding proper build and preview scripts in package.json resolved the issue.



