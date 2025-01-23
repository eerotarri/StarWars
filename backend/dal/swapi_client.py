"""
swapi_client.py
This module contains the SwapiClient class, which provides methods to interact with the Star Wars API (SWAPI).
Classes:
    SwapiClient: A client to make requests to the SWAPI.
Usage Example:
    client = SwapiClient()
    films = client.get_films()
Dependencies:
    requests: This module requires the 'requests' library to make HTTP requests.
Classes:
    SwapiClient:
        Methods:
            get(endpoint: str, params: dict = None) -> dict:
                Make a GET request to the SWAPI.
                Args:
                    endpoint (str): The API endpoint to request.
                    params (dict, optional): Query parameters to include in the request.
                Returns:
                    dict: The JSON response from the API.
                Raises:
                    HTTPError: If the HTTP request returned an unsuccessful status code.
            get_films() -> dict:
                Fetch all films from the SWAPI.
                Returns:
                    dict: The JSON response containing all films.
"""

import requests

class SwapiClient:
    BASE_URL = "https://swapi.dev/api/"

    def get(self, endpoint: str, params: dict = None) -> dict:
        """Make a GET request to the SWAPI."""
        url = f"{self.BASE_URL}{endpoint}"
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise HTTP errors if any
        return response.json()
    
    def get_films(self) -> dict:
        """Fetch all films."""
        return self.get("films/")
