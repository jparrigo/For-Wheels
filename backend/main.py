import pandas as pd

from flask import Flask, request, abort, Response
from flask_cors import CORS, cross_origin

from json import dumps

from functions.cosine_similarity import get_cosine_similarity
from functions.sample_car import transform_car_values_to_numbers
from functions.content_based_recomendation import get_content_based_recommendation

from models.car import Car


df_cars = pd.read_csv("./data/cars_dataset.csv")
app = Flask(__name__)
cors = CORS(app, resources={r"/cars/get-recommendation": {"origins": "*"}})
app.config["CORS_HEADERS"] = "Content-Type"


def abort_data_not_found(data):
    if data == None:
        message = dumps({"message": "No request data found"})
        abort(Response(message, 404))


def abort_car_not_found(cars):
    if cars == None:
        message = dumps({"message": "No car with similar filters found"})
        abort(Response(message, 404))


@app.route("/cars/get-recommendation", methods=["POST", "OPTIONS"])
@cross_origin(origin="*", headers=["Content-Type", "Authorization"])
def get_recomendation():
    data = request.get_json()

    car_min_price = data["min_price"]
    car_max_price = data["max_price"]

    partial_car = Car(
        data["fuel"],
        data["transmission"],
        data["size"],
        data["style"],
        int(car_min_price),
        int(car_max_price),
        data["category"],
        data["city_preference"],
    )

    abort_data_not_found(partial_car)

    if partial_car.fuel == "electric" and partial_car.transmission == "AUTOMATIC":
        partial_car.transmission = "DIRECT_DRIVE"

    partial_car = transform_car_values_to_numbers(partial_car)

    cosine_sim = get_cosine_similarity(partial_car)

    recommended_cars = get_content_based_recommendation(
        partial_car,
        df_cars,
        cosine_sim,
        car_min_price,
        car_max_price,
        n_recommendation=5,
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

    recommended_response = recommended_response.to_json(orient="records")

    return recommended_response, 200


if __name__ == "__main__":
    app.run(debug=True)
