import numpy as np


class Car:
    def __init__(
        self,
        min_price,
        max_price,
        city_preference,
        size,
        transmission,
        fuel,
        category,
        style,
    ):
        self.car_id = 1714
        self.fuel = fuel
        self.hp = 300
        self.cylinders = 4
        self.transmission = transmission
        self.wheels = 0
        self.doors = 4
        self.size = size
        self.style = style
        self.popularity = 1580
        self.msrp = np.mean([max_price, min_price])
        self.category = category
        self.city_preference = city_preference
