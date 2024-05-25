import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity


def get_cosine_similarity(car_data):
    cars_numeric = pd.read_csv("./data/cars_dataset_numbers.csv")
    sample_car = [
        car_data.car_id,
        car_data.fuel,
        car_data.hp,
        car_data.cylinders,
        car_data.transmission,
        car_data.wheels,
        car_data.doors,
        car_data.size,
        car_data.style,
        car_data.popularity,
        car_data.msrp,
        car_data.category[0],
        car_data.category[1],
        car_data.category[2],
        car_data.category[3],
        car_data.category[4],
        car_data.category[5],
        car_data.category[6],
        car_data.category[7],
        car_data.category[8],
        car_data.city_preference,
        (car_data.city_preference != True),
    ]
    cars_numeric.loc[len(cars_numeric)] = sample_car
    used_column = [
        # "carId",
        "Engine Fuel Type",
        # "Engine HP",
        # "Engine Cylinders",
        "Transmission Type",
        # "Driven_Wheels",
        # "Number of Doors",
        "Vehicle Size",
        "Vehicle Style",
        "Popularity",
        # "MSRP",
        # "Common",
        "Crossover",
        "Exotic",
        "Factory Tuner",
        "Hatchback",
        "High-Performance",
        "Hybrid",
        "Luxury",
        "Performance",
        "City Preference",
        # "Highway Preference",
    ]
    numeric_data = cars_numeric[used_column]
    scaler = StandardScaler()
    normalized_data = scaler.fit_transform(numeric_data)
    cosine_sim = cosine_similarity(normalized_data, normalized_data)
    return cosine_sim
