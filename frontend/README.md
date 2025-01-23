# Star Wars frontend

This is a Star Wars application that provides information about various Star Wars characters, movies, starships, and more.

## Project Description

This project is a web application built using React and Vite. It aims to provide a streamlined setup for developing React applications with Vite, featuring Hot Module Replacement (HMR) for a smoother development experience. The project also includes ESLint rules to maintain code quality and consistency.

## Installation

Make sure to run the backend server before starting the frontend.

### Local Development

1. Clone the repository:

   ```sh
   git clone https://github.com/eerotarri/StarWars.git
   cd StarWars/frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
    npm run dev
   ```

4. The frontend will be available at `http://localhost:5173`.

### Production Build

1. Build the application:

   ```sh
   npm run build
   ```

2. The production build will be available in the `dist/` directory. You can preview the production build using the following command:

   ```sh
   npm run preview
   ```

## Usage

## Key Features

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Hot Module Replacement (HMR)**: Enables live updating of modules without a full refresh, improving development speed.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code, ensuring code quality.

## Design choices

### **_TailwindCSS_**

This project utilizes Tailwind CSS version **3.4.17**.

Tailwind CSS is a utility-first CSS framework that enables rapid UI development. It was chosen for this project due to its flexibility and efficiency in creating custom designs without writing custom CSS. Tailwind CSS provides a comprehensive set of utility classes that can be composed to build any design directly in the markup, leading to a faster development process and a more maintainable codebase.

### Why TailwindCSS?

- **Flexibility**: Allows developers to create custom designs without writing custom CSS.
- **Efficiency**: Speeds up the development process by providing utility classes that can be composed directly in the markup.
- **Maintainability**: Leads to a more maintainable codebase by reducing the need for custom CSS.
- **Consistency**: Ensures a consistent design system across the application by using standardized utility classes.

Tailwind CSS was chosen for this project to enhance the development speed and maintain a high standard of design consistency and flexibility.

Version 4.0.0 of Tailwind CSS is already available, but it is not yet supported by the ShadCN library. Therefore, version 3.4.17 is chosen.

Read more about Tailwind CSS:
</br>Version [3.4.17](https://v3.tailwindcss.com/docs)
</br>Version [4.0.0](https://tailwindcss.com/docs)

### **_ShadCN_**

ShadCN is a collection of pre-built UI components designed to accelerate the development process. It provides a set of reusable and customizable components that can be easily integrated into any React application. By using ShadCN, developers can save time and effort in building common UI elements from scratch, allowing them to focus on the unique aspects of their application.

### Why ShadCN?

- **Consistency**: Ensures a consistent look and feel across the application by using standardized components.
- **Efficiency**: Reduces development time by providing ready-to-use components.
- **Customization**: Offers flexibility to customize components to match the application's design requirements. Developer owns the code.
- **Quality**: Components are well-tested and follow best practices, ensuring high-quality UI elements.

ShadCN was chosen for this project to streamline the development process and maintain a high standard of UI consistency and quality.

Read more about ShadCN:
</br>[ShadCN](https://ui.shadcn.com/)

### **_React Query_**

React Query is a library for fetching, caching, and updating data in React applications. It provides an alternative to the native fetch API for state management, offering a more efficient and powerful way to handle server state.

### Why React Query?

- **Efficiency**: Simplifies data fetching and caching, reducing the need for boilerplate code.
- **Performance**: Optimizes data fetching and minimizes unnecessary re-renders, improving application performance.
- **Consistency**: Ensures consistent data management across the application by providing a standardized approach.
- **Developer Experience**: Enhances the developer experience with features like automatic caching, background updates, and refetching.

React Query was chosen for this project to improve data management efficiency and provide a better developer experience.

Read more about React Query:
</br>[React Query](https://tanstack.com/query/latest/docs/framework/react/overview)

### Folder Structure

- `public/`: Contains the public assets for the application.
- `src/`: Contains the source code for the application.
  - `assets/`: Contains the static assets used in the application.
  - `components/`: Contains the React components used in the application.
    - `ui/`: Contains the shared UI components.
  - `dal/`: Contains the Data Access Layer (DAL) for fetching data from the backend.
  - `lib/`: Contains utility functions and models used in the application.
  - `App.tsx`: The main component that renders the application.
  - `index.css`: The global CSS styles for the application.
  - `main.tsx`: The entry point for the application.
