from pydantic import BaseModel
from typing import List

class Person(BaseModel):
    name: str
    birth_year: str
    eye_color: str
    gender: str
    hair_color: str
    height: str
    mass: str
    skin_color: str
    homeworld: str
    films: List[str]
    species: List[str]
    starships: List[str]
    vehicles: List[str]
    url: str
    created: str
    edited: str
