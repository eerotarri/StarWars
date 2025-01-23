# StarWars Backend

This is the backend for the StarWars application, built with Python.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/eerotarri/StarWars.git
   cd StarWars/backend
   ```

2. Create a virtual environment:

   ```sh
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```

## Usage

1. Run the application:

   ```sh
   python3 main.py
   ```

2. The backend will be available at `http://localhost:8111`.

You can change the port by setting the `PORT` constant variable in `main.py`.

## API Endpoints

- `GET /api/films` - Retrieve a list of films

## Design Choices

### Framework

The backend is built using FastAPI, a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. FastAPI is chosen for its speed, ease of use, and automatic interactive API documentation. For application of this size, FastAPI is a great choice due to its simplicity and performance. For large applications, Django or Flask might be more suitable.

Read more about FastAPI: [FastAPI](https://fastapi.tiangolo.com/)

### API Design

The API follows RESTful principles, providing a clear and consistent interface for interacting with the backend. Endpoints are designed to be intuitive and follow standard HTTP methods.

### Error Handling and data validation

Data validation is handled using Pydantic, which is integrated with FastAPI. Pydantic allows for the definition of data models with type annotations, ensuring that data received by the API is validated and conforms to the expected schema. This reduces the likelihood of errors and improves the robustness of the application.

Read more about Pydantic: [Pydantic](https://pydantic-docs.helpmanual.io/)

### Separation of Concerns

The backend is structured with a clear separation of concerns, with the data access logic separated from the business logic. This ensures that the codebase is clean, maintainable, and easy to extend.

## License

This project is licensed under [The Unlicense](../LICENSE). You are free to use, modify, and distribute it without restriction.
