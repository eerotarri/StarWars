from typing import List
from fastapi import FastAPI, HTTPException, requests
from dal.swapi_client import SwapiClient as swapi_client
from models.people import Person
from models.films import Film

app = FastAPI()

@app.get("/api/films", response_model=List[Film])
async def get_films():
    try:
        data = swapi_client.get_films()
        return [Film(**film) for film in data["results"]]
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail="Films not found") from e

@app.get("/people/{person_id}", response_model=Person)
async def get_person(person_id: int):
    try:
        data = swapi_client.get_person(person_id)
        return Person(**data)
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=404, detail="Person not found") from e

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8111)