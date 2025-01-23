from typing import List
from fastapi import FastAPI, HTTPException, requests
from fastapi.middleware.cors import CORSMiddleware
from dal.swapi_client import SwapiClient
from models.people import Person
from models.films import Film

PORT = 8111

app = FastAPI()
swapi_client = SwapiClient()

origins = [
    "http://localhost:4173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get all films
@app.get("/api/films", response_model=List[Film])
async def get_films():
    try:
        data = swapi_client.get_films()
        return [Film(**film) for film in data["results"]]
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail="Films not found") from e

def get_resource_by_id(resource_type: str, resource_id: int):
    try:
        data = getattr(swapi_client, f"get_{resource_type}")(resource_id)
        return data
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail=f"{resource_type.capitalize()} not found") from e

@app.get("/api/people/{person_id}", response_model=Person)
async def get_person(person_id: int):
    data = get_resource_by_id("person", person_id)
    return Person(**data)

@app.get("/api/films/{film_id}", response_model=Film)
async def get_film(film_id: int):
    data = get_resource_by_id("film", film_id)
    return Film(**data)

@app.get("/api/species/{species_id}")
async def get_species(species_id: int):
    return get_resource_by_id("species", species_id)

@app.get("/api/starships/{starship_id}")
async def get_starships(starship_id: int):
    return get_resource_by_id("starships", starship_id)

@app.get("/api/vehicles/{vehicle_id}")
async def get_vehicles(vehicle_id: int):
    return get_resource_by_id("vehicles", vehicle_id)

@app.get("/api/planets/{planet_id}")
async def get_planets(planet_id: int):
    return get_resource_by_id("planets", planet_id)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=PORT)