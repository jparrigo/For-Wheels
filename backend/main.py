import pandas as pd
from flask import Flask, request, jsonify, abort
from flask_cors import CORS, cross_origin
from functions.cosine_similarity import get_cosine_similarity
from functions.sample_car import get_sample_car_id
from functions.content_based_recomendation import get_content_based_recommendation
from models.car import Car


df_cars = pd.read_csv("./data/cars_dataset.csv")
cosine_sim = get_cosine_similarity()
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


def abort_car_not_found(cars):
    if cars is None:
        abort(400, message="No car with filters found")


@app.route("/cars/get-recommendation", methods=["POST"])
@cross_origin()
def get_recomendation():
    data = request.get_json()

    partial_car = Car(
        data["min_price"],
        data["max_price"],
        data["city_preference"],
        data["size"],
        data["transmission"],
        data["fuel"],
        data["category"],
        data["style"],
    )

    abort_car_not_found(partial_car)

    sample_car_id = get_sample_car_id(partial_car, df_cars)
    recommended_cars = get_content_based_recommendation(
        sample_car_id, df_cars, cosine_sim, n_recommendation=5
    )

    unused_columns = [
        "carId",
        "Make",
        "Model",
        "Year",
        "Popularity",
        "City Preference",
        "Highway Preference",
    ]
    recommended_response = recommended_cars.drop(columns=unused_columns)

    response = recommended_response.to_json(orient="records")

    return response, 200


if __name__ == "__main__":
    app.run(debug=True)

# get_content_based_recommendation(car_id=1, cosine_sim_matrix=cosine_sim, n_recommendation=5)
