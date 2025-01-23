from pydantic import BaseModel
from typing import List

class People(BaseModel):
    name: str
    model: str
    starship_class: str
    manufacturer: str
    cost_in_credits: str
    length: str
    crew: str
    passengers: str
    max_atmosphering_speed: str
    hyperdrive_rating: str
    MGLT: str
    cargo_capacity: str
    consumables: str
    films: List[str]
    pilots: List[str]
    url: str
    created: str
    edited: str
    