from numpy import random

fuel_dictionary = {0: "gasoline", 1: "flex-fuel", 2: "diesel", 3: "electric"}


def get_content_based_recommendation(
    car, data, cosine_sim_matrix, min_price, max_price, n_recommendation=5
):
    sim_scores = list(enumerate(cosine_sim_matrix[car.car_id]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1 : (n_recommendation + 1)]
    sim_cars = [i[0] for i in sim_scores]

    car_df = data
    car_df = car_df.loc[
        (car_df["MSRP"] > car.min_price)
        & (car_df["MSRP"] < car.max_price)
        & (car_df["Engine Fuel Type"] == fuel_dictionary[car.fuel])
    ]
    rng = random.randint(100)
    car_df = car_df.sample(n=len(car_df), random_state=rng)

    sim_cars = car_df.iloc[sim_cars]
    return sim_cars
