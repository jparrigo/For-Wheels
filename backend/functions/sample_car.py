from numpy import random

size_dictionary = {"Midsize": 0, "Compact": 1, "Large": 2}

transmission_dictionary = {
    "AUTOMATIC": 0,
    "MANUAL": 1,
    "AUTOMATED_MANUAL": 2,
    "DIRECT_DRIVE": 3,
}

fuel_dictionary = {"gasoline": 0, "flex-fuel": 1, "diesel": 2, "electric": 3}

style_dictionary = {
    "Sedan": 0,
    "SUV": 1,
    "Pickup": 2,
    "Hatchback": 3,
    "Coupe": 4,
    "Convertible": 5,
    "Wagon": 6,
    "Minivan": 7,
}

boolean_dictionary = {True: 1, False: 0}


def transform_car_values_to_numbers(car_data):
    car_data.fuel = fuel_dictionary[car_data.fuel]
    car_data.transmission = transmission_dictionary[car_data.transmission]
    car_data.size = size_dictionary[car_data.size]
    car_data.style = style_dictionary[car_data.style]
    car_data.city_preference = boolean_dictionary[car_data.city_preference]
    car_data.category[0] = boolean_dictionary[car_data.category[0]]
    car_data.category[1] = boolean_dictionary[car_data.category[1]]
    car_data.category[2] = boolean_dictionary[car_data.category[2]]
    car_data.category[3] = boolean_dictionary[car_data.category[3]]
    car_data.category[4] = boolean_dictionary[car_data.category[4]]
    car_data.category[5] = boolean_dictionary[car_data.category[5]]
    car_data.category[6] = boolean_dictionary[car_data.category[6]]
    car_data.category[7] = boolean_dictionary[car_data.category[7]]
    car_data.category[8] = boolean_dictionary[car_data.category[8]]

    return car_data
