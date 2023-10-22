## Ecommerce App Project Overview

Welcome to our Ecommerce App project, where you can explore our platform's features and functionalities. Here's a quick guide to help you get started:

### Installation and Running

To begin using our app, you need to follow these simple steps:

1. **Installation:** Start by installing the necessary dependencies. Run the following command to do this:

    ```
    npm install --force
    ```

2. **Start the App:** After installing the dependencies, you can launch the app in development mode using one of the following commands:

    - `npm run start` - Start the app using the Webpack Dev Server.
    - `npm run start:vite` - Start the app using Vite.
    - `npm run start:dev` - Start both the frontend and backend in development mode using the Webpack Dev Server.
    - `npm run start:dev:vite` - Start both the frontend and backend in development mode using Vite.
    - `npm run start:dev:server` - Start only the backend server.

3. **Building the App:** If you wish to build the app for production, you can use the following commands:

    - `npm run build:prod` - Build the app in production mode.
    - `npm run build:dev` - Build the app in development mode without minimizing the output.

### Project Architecture

Our Ecommerce App follows the Feature Sliced Design methodology. You can find detailed documentation about this approach at [Feature Sliced Design Documentation](https://feature-sliced.design/docs/get-started/tutorial).

### Translation Work

For seamless translation support, we use the i18next library, and translation files are stored in the `public/locales` directory. We recommend installing a plugin for WebStorm or VSCode to work with translations. Learn more about i18next at [i18next Documentation](https://react.i18next.com/).

### Testing

We have implemented different types of testing to ensure the reliability of our app:

1. Regular unit tests using Jest: `npm run test:unit`
2. Component tests using React Testing Library: `npm run test:unit`
3. Snapshot testing with Loki: `npm run test:ui`
4. End-to-end testing with Cypress: `npm run test:e2e`

Explore our testing documentation for more details.

### Linting

We maintain code quality through linting. ESLint is used to check TypeScript code, and Stylelint is used for style files. We also have a custom ESLint plugin, `eslint-plugin-ulbi-tv-plugin`, which enforces architectural principles. You can run the linters with the following commands:

- `npm run lint:ts` - Lint TypeScript files.
- `npm run lint:ts:fix` - Automatically fix TypeScript linting issues.
- `npm run lint:scss` - Lint SCSS files.
- `npm run lint:scss:fix` - Automatically fix SCSS linting issues.

### Storybook

We document each component with Storybook, allowing you to view them individually. Storybook-addon-mock is used to mock server requests for these components. To run Storybook, use the command `npm run storybook`.

### Project Configuration

Our project includes configurations for both Webpack and Vite, tailored to the core features of the application. All configuration files can be found in the `/config` directory.

### CI Pipeline and Pre-commit Hooks

Our CI pipeline, located in the `/.github/workflows` directory, runs various tests, builds the project, and checks Storybook and linters. Pre-commit hooks are also configured to ensure code quality.

### Data Handling

We use Redux Toolkit for data interaction. For better performance, we normalize reusable entities using EntityAdapter. Server requests are sent using RTK query, and we also utilize DynamicModuleLoader for asynchronous reducer loading.

### Feature Flags

Feature flags are managed through the `toggleFeatures` helper, allowing you to enable or disable features with ease. To remove a feature, you can use the `remove-feature.ts` script.

### Entities

We manage various entities within our app, including Articles, Comments, Counters, Countries, Currencies, Notifications, Profiles, Ratings, and Users.

### Features

Our app is divided into several features, each serving a specific purpose. These include components like Add Comment Form, Article Edit Form, Article Rating, and more.

Thank you for choosing our Ecommerce App! If you have any questions or need further assistance, please don't hesitate to reach out. Happy shopping!
