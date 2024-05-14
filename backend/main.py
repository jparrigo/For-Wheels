import pandas as pd
from flask import Flask, request, jsonify, abort
from flask_cors import CORS, cross_origin
from functions.cosine_similarity import get_cosine_similarity
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
        data.min_price,
        data.max_price,
        data.use_preference,
        data.size,
        data.transmission,
        data.fuel,
        data.category,
        data.style,
    )

    abort_car_not_found(partial_car)

    recommended_cars = []

    return jsonify(recommended_cars), 200


if __name__ == "__main__":
    app.run(debug=True)

# get_content_based_recommendation(car_id=1, cosine_sim_matrix=cosine_sim, n_recommendation=5)
