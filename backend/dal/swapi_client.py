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

    def get_person(self, person_id: int) -> dict:
        """Fetch a person by their ID."""
        return self.get(f"people/{person_id}/")

    def get_planet(self, planet_id: int) -> dict:
        """Fetch a planet by its ID."""
        return self.get(f"planets/{planet_id}/")

    def get_film(self, film_id: int) -> dict:
        """Fetch a film by its ID."""
        return self.get(f"films/{film_id}/")
