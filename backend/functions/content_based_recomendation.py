def get_content_based_recommendation(
    car_id, data, cosine_sim_matrix, n_recommendation=5
):
    sim_scores = list(enumerate(cosine_sim_matrix[car_id]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1 : (n_recommendation + 1)]
    sim_cars = [i[0] for i in sim_scores]
    sim_cars = data.iloc[sim_cars]
    return sim_cars
