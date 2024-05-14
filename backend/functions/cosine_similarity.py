import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity

def get_cosine_similarity():
    cars_numeric = pd.read_csv("./data/cars_dataset_numbers.csv")
    used_column = [
        "Engine Fuel Type",
        "Engine HP",
        "Engine Cylinders",
        "Transmission Type",
        "Driven_Wheels",
        "Number of Doors",
        "Vehicle Size",
        "Vehicle Style",
        "Popularity",
        "MSRP",
        "Common",
        "Crossover",
        "Exotic",
        "Factory Tuner",
        "Hatchback",
        "High-Performance",
        "Hybrid",
        "Luxury",
        "Performance",
        "City Preference",
        "Highway Preference",
    ]
    numeric_data = cars_numeric[used_column]
    scaler = StandardScaler()
    normalized_data = scaler.fit_transform(numeric_data)
    cosine_sim = cosine_similarity(normalized_data, normalized_data)
    return cosine_sim