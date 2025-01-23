from pydantic import BaseModel
from typing import List

class People(BaseModel):
    name: str
    diameter: str
    rotation_period: str
    orbital_period: str
    gravity: str
    population: str
    climate: str
    terrain: str
    surface_water: str
    residents: List[str]
    films: List[str]
    url: str
    created: str
    edited: str
