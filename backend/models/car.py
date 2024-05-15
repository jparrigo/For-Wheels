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
        self.min_price = min_price
        self.max_price = max_price
        self.city_preference = city_preference
        self.size = size
        self.transmission = transmission
        self.fuel = fuel
        self.category = category
        self.style = style
