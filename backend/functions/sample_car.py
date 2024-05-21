from numpy import random


def get_sample_car_id(car_data, data):
    try:
        cars_sample = data.loc[
            (data["MSRP"] < car_data.max_price)  # Preço máximo
            & (data["MSRP"] > car_data.min_price)  # Preço mínimo
            & (
                data["City Preference"] == car_data.city_preference
            )  # True (se cidade), False (se estrada)
            & (data["Vehicle Size"] == car_data.size)  # Compact, Midsize, Large
            & (
                data["Transmission Type"] == car_data.transmission
            )  # AUTOMATIC, MANUAL, AUTOMATED_MANUAL, DIRECT_DRIVE
            & (
                data["Engine Fuel Type"] == car_data.fuel
            )  # gasoline, flex-fuel, diesel, electric
            & (data["Common"] == car_data.category[0])  # True, False
            & (data["Crossover"] == car_data.category[1])  # True, False
            & (data["Exotic"] == car_data.category[2])  # True, False
            & (data["Factory Tuner"] == car_data.category[3])  # True, False
            & (data["Hatchback"] == car_data.category[4])  # True, False
            & (data["High-Performance"] == car_data.category[5])  # True, False
            & (data["Hybrid"] == car_data.category[6])  # True, False
            & (data["Luxury"] == car_data.category[7])  # True, False
            & (data["Performance"] == car_data.category[8])  # True, False
            & (
                data["Vehicle Style"] == car_data.style
            )  # Sedan, SUV, Pickup, Hatchback, Coupe, Convertible, Wagon, Minivan
        ]
        rng = random.randint(100)

        car_selected = cars_sample.sample(n=1, random_state=rng)
        return car_selected.index[0]
    except:
        return None
