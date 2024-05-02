import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function BasicTextFields() {
    const [formData, setFormData] = useState({
        "id": "",
        "radius_mean": "",
        "texture_mean": "",
        "perimeter_mean": "",
        "area_mean": "",
        "smoothness_mean": "",
        "compactness_mean": "",
        "concavity_mean": "",
        "concave_points_mean": "",
        "symmetry_mean": "",
        "fractal_dimension_mean": "",
        "radius_se": "",
        "texture_se": "",
        "perimeter_se": "",
        "area_se": "",
        "smoothness_se": "",
        "compactness_se": "",
        "concavity_se": "",
        "concave_points_se": "",
        "symmetry_se": "",
        "fractal_dimension_se": "",
        "radius_worst": "",
        "texture_worst": "",
        "perimeter_worst": "",
        "area_worst": "",
        "smoothness_worst": "",
        "compactness_worst": "",
        "concavity_worst": "",
        "concave_points_worst": "",
        "symmetry_worst": "",
        "fractal_dimension_worst": "",
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        axios.post('http://127.0.0.1:5000/predict', formData) // Send a POST request to your Flask server
            .then((response) => {
                setPrediction(response.data.predictions);  // Receive the prediction result
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
            >
                {Object.keys(formData).map((field) => (
                    <TextField
                        key={field}
                        id={field}
                        label={field}
                        variant="outlined"
                        value={formData[field]}
                        onChange={handleChange}
                    />
                ))}
            </Box>

            <button type="submit">Submit</button>

            {prediction && (
                <div>
                    <h2>Prediction:</h2>
                    {prediction.map((result, index) => (
                        <p key={index}>
                            {result === 1 ? "Malignant" : "Benign"}
                        </p>
                    ))}
                </div>
            )}
        </form>
    );
}
