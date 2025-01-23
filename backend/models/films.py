from pydantic import BaseModel
from typing import List
from datetime import date

class Film(BaseModel):
    title: str
    episode_id: int
    opening_crawl: str
    director: str
    producer: str
    release_date: date
    species: List[str]
    starships: List[str]
    vehicles: List[str]
    characters: List[str]
    planets: List[str]
    url: str
    created: str
    edited: str
