# Star Wars API

This is a Star Wars application that provides information about various Star Wars characters, movies, starships, and more.

## Project Structure

The project is divided into two main parts:

1. **Backend**: A Python-based API using FastAPI.
2. **Frontend**: A React application built with Vite.

## Getting Started

### Prerequisites

### Prerequisites

- Python 3.12
- Node.js v22.12.0
- npm 9.2.0

This project was developed using Python 3.12, Node.js v22.12.0, and npm 9.2.0. While it may work with other versions, it is recommended to use these versions or newer to avoid any compatibility issues.

Development was done on a Linux machine, so there may be issues on other operating systems. Note that while the project was developed on Linux, it should work on Windows and macOS as well but **setup instructions may vary**.

Testing assumes that both applications are running on the same machine. If you are running the backend on a different machine, you will need to update the frontend to point to the correct URL and update CORS settings on the backend.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Read the [installation instructions](backend/README.md) for the backend.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Once both the backend and frontend servers are running, you can access the application by navigating to `http://localhost:4173` (npm run preview) or `http://localhost:5173` (npm run dev) in your web browser.

## Testing

Testing was done manually by running the application and verifying that the expected data was displayed. This is not a comprehensive test suite for many applications, but it was sufficient for a project of this size. Automated testing can be added in the future if needed.

## License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE) file for details.
