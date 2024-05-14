import pandas as pd

def get_content_based_recommendation(car_id, cosine_sim_matrix, n_recommendation=5):
    df_cars = pd.read_csv("./data/cars_dataset.csv")
    sim_scores = list(enumerate(cosine_sim_matrix[car_id]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1 : (n_recommendation + 1)]
    sim_cars = [i[0] for i in sim_scores]
    sim_cars = df_cars.iloc[sim_cars]
    return sim_cars