from typing import List
from fastapi import FastAPI, HTTPException
import requests
from fastapi.middleware.cors import CORSMiddleware
from dal.swapi_client import SwapiClient
from models.person import Person
from models.film import Film
from models.planet import Planet
from models.species import Species
from models.starship import Starship
from models.vehicle import Vehicle

PORT = 8111

app = FastAPI()
swapi_client = SwapiClient()

"""
Allow requests from the frontend in development mode and production mode,.
Add the frontend URL to this list if not running in Vite default ports.
Middleware is used to allow CORS (Cross-Origin Resource Sharing) requests.
You can modify allowed origins, methods and headers as needed.
"""
origins = [
    "http://localhost:4173", # Vite frontend production
    "http://localhost:5173", # Vite frontend development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

"""
Endpoints below are used to retrieve all resources of a specific type.
They use the get_all_resources function to prevent code duplication.

- GET /api/films: Retrieve all films.
- GET /api/people: Retrieve all people.
- GET /api/species: Retrieve all species.
- GET /api/starships: Retrieve all starships.
- GET /api/vehicles: Retrieve all vehicles.
- GET /api/planets: Retrieve all planets.
"""
def get_all_resources(resource_type: str):
    try:
        data = getattr(swapi_client, f"get_all_{resource_type}")()
        return data["results"]
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail=f"{resource_type.capitalize()} not found") from e

@app.get("/api/films/", response_model=List[Film])
async def get_films():
    return [Film(**film) for film in get_all_resources("films")]

@app.get("/api/people/", response_model=List[Person])
async def get_people():
    return [Person(**person) for person in get_all_resources("people")]

@app.get("/api/species/", response_model=List[Species])
async def get_species():
    return [Species(**species) for species in get_all_resources("species")]

@app.get("/api/starships/", response_model=List[Starship])
async def get_starships():
    return [Starship(**starship) for starship in get_all_resources("starships")]

@app.get("/api/vehicles/", response_model=List[Vehicle])
async def get_vehicles():
    return [Vehicle(**vehicle) for vehicle in get_all_resources("vehicles")]

@app.get("/api/planets/", response_model=List[Planet])
async def get_planets():
    return [Planet(**planet) for planet in get_all_resources("planets")]


"""
Endpoints below are used to retrieve a specific resource by ID.
They use the get_resource_by_id function to prevent code duplication.

Endpoints:
- GET /api/people/{person_id}: Retrieve a specific person by ID.
- GET /api/films/{film_id}: Retrieve a specific film by ID.
- GET /api/species/{species_id}: Retrieve a specific species by ID.
- GET /api/starships/{starship_id}: Retrieve a specific starship by ID.
- GET /api/vehicles/{vehicle_id}: Retrieve a specific vehicle by ID.
- GET /api/planets/{planet_id}: Retrieve a specific planet by ID.
"""
def get_resource_by_id(resource_type: str, resource_id: int):
    try:
        data = getattr(swapi_client, f"get_{resource_type}")(resource_id)
        return data
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail=f"{resource_type.capitalize()} not found") from e

@app.get("/api/people/{person_id}/", response_model=Person)
async def get_person(person_id: int):
    data = get_resource_by_id("person", person_id)
    return Person(**data)

@app.get("/api/films/{film_id}/", response_model=Film)
async def get_film(film_id: int):
    data = get_resource_by_id("film", film_id)
    return Film(**data)

@app.get("/api/species/{species_id}/", response_model=Species)
async def get_species(species_id: int):
    return get_resource_by_id("species", species_id)

@app.get("/api/starships/{starship_id}/", response_model=Starship)
async def get_starships(starship_id: int):
    return get_resource_by_id("starships", starship_id)

@app.get("/api/vehicles/{vehicle_id}/", response_model=Vehicle)
async def get_vehicles(vehicle_id: int):
    return get_resource_by_id("vehicles", vehicle_id)

@app.get("/api/planets/{planet_id}/", response_model=Planet)
async def get_planets(planet_id: int):
    return get_resource_by_id("planets", planet_id)

"""
Endpoint below is used to calculate and return the number of type in total.

Endpoints:
- GET /api/{resource_type}/count: Retrieve the total count of a specific resource type.

Returns:
- JSON object with the count of the resource type.

Example:
- GET /api/count/people: Retrieve the total count of people.

Note:
- The resource type must be a valid resource type from the Star Wars API.
- The resource type is case-sensitive.
"""
@app.get("/api/count/{resource_type}/{target_type}/")
async def get_resource_count(resource_type: str, target_type: str):
    try:
        data = getattr(swapi_client, f"get_all_{resource_type}")()
        characters_per_film = []
        for item in data["results"]:
            characters_count = len(item.get(target_type, []))
            characters_per_film.append({"name": item.get("title", item.get("name")), "count": characters_count})
        return characters_per_film
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail=f"{resource_type} not found") from e
    
# Run the FastAPI app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=PORT)