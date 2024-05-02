
from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS
from sklearn.preprocessing import MinMaxScaler

xgb_model = joblib.load("C://Users//KIIT//Desktop//Major Project//ML DEPLOYMENT//xgboost_model.joblib")
scaler = MinMaxScaler()

app = Flask(__name__)
CORS(app)


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        print("Received data:", data)

        # Define the column names as per your dataset
        column_names = [
            "id",
            "radius_mean",
            "texture_mean",
            "perimeter_mean",
            "area_mean",
            "smoothness_mean",
            "compactness_mean",
            "concavity_mean",
            "concave_points_mean",
            "symmetry_mean",
            "fractal_dimension_mean",
            "radius_se",
            "texture_se",
            "perimeter_se",
            "area_se",
            "smoothness_se",
            "compactness_se",
            "concavity_se",
            "concave_points_se",
            "symmetry_se",
            "fractal_dimension_se",
            "radius_worst",
            "texture_worst",
            "perimeter_worst",
            "area_worst",
            "smoothness_worst",
            "compactness_worst",
            "concavity_worst",
            "concave_points_worst",
            "symmetry_worst",
            "fractal_dimension_worst",
        ]

        # Create an empty DataFrame with specified column names
        df = pd.DataFrame(columns=column_names)

        # Convert the input data to a DataFrame row
        input_data = [float(data[col]) if col in data else None for col in column_names]

        # Add the input data as a new row to the DataFrame
        df.loc[0] = input_data

        # Apply Min-Max scaling
        print(df)
        # df_scaled = pd.DataFrame(scaler.transform(df), columns=column_names)

        # Now, you can use the scaled DataFrame to make predictions
        predictions = xgb_model.predict(df)
        return jsonify({"predictions": predictions.tolist()})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True, port=5000)