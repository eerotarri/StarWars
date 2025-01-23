from pydantic import BaseModel
from typing import List

class People(BaseModel):
    name: str
    model: str
    vehicle_class: str
    manufacturer: str
    length: str
    cost_in_credits: str
    crew: str
    passengers: str
    max_atmosphering_speed: str
    cargo_capacity: str
    consumables: str
    films: List[str]
    pilots: List[str]
    url: str
    created: str
    edited: str
    