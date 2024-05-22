import pandas as pd

from flask import Flask, request, abort, Response
from flask_cors import CORS, cross_origin

from json import dumps

from functions.cosine_similarity import get_cosine_similarity
from functions.sample_car import get_sample_car_id
from functions.content_based_recomendation import get_content_based_recommendation

from models.car import Car


df_cars = pd.read_csv("./data/cars_dataset.csv")
cosine_sim = get_cosine_similarity()
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

    if partial_car.fuel == "electric" and partial_car.transmission == "AUTOMATIC":
        partial_car.transmission = "DIRECT_DRIVE"

    abort_data_not_found(partial_car)

    sample_car_id = get_sample_car_id(partial_car, df_cars)

    count = -1
    while sample_car_id == None:
        if count == -13:
            break

        while count > -10:
            if count == -9:
                partial_car.category[0] = True
                count -= 1
                break
            if partial_car.category[count] == True:
                partial_car.category[count] = False
                count -= 1
                break
            count -= 1

        if count == -10:
            partial_car.city_preference = partial_car.city_preference != True

        if count == -11:
            partial_car.min_price = 0

        if count == -12:
            partial_car.max_price *= 1.1

        if count == -13:
            if partial_car.fuel == "gasoline":
                partial_car.fuel = "flex-fuel"
            elif partial_car.fuel == "flex-fuel":
                partial_car.fuel = "gasoline"

        if count < -9:
            count -= 1

        sample_car_id = get_sample_car_id(partial_car, df_cars)

    abort_car_not_found(sample_car_id)

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

    recommended_response = recommended_response.to_json(orient="records")

    return recommended_response, 200


if __name__ == "__main__":
    app.run(debug=True)
