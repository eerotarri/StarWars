from pydantic import BaseModel
from typing import List, Optional

class Species(BaseModel):
    name: str
    classification: str
    designation: str
    average_height: str
    average_lifespan: str
    eye_colors: str
    hair_colors: str
    skin_colors: str
    language: str
    homeworld: Optional[str]
    people: List[str]
    films: List[str]
    url: str
    created: str
    edited: str