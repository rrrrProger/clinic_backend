import pickle
import pandas as pd
import os
import sys
from   pathlib import Path

def convert_strings_to_floats(input_array):
    output_array = []
    for element in input_array:
        converted_float = float(element)
        output_array.append(converted_float)
    return output_array

scaler_path = os.path.join(os.getcwd(), 'routes', 'scaler.pkl')
model_path = os.path.join(os.getcwd(), 'routes', 'model.pkl')

cols = ['radius_mean', 'texture_mean', 'smoothness_mean', 'compactness_mean',
        'symmetry_mean', 'fractal_dimension_mean', 'radius_se', 'texture_se',
        'smoothness_se', 'compactness_se', 'symmetry_se', 'fractal_dimension_se']

data_arr = sys.argv[1].split(',')
data_arr = convert_strings_to_floats(data_arr)

data = [tuple(data_arr)]

df = pd.DataFrame(data, columns=cols)

with open(scaler_path, 'rb') as f:
    f.seek(0)
    sc = pickle.load(f)


with open(model_path, 'rb') as f:
    svc = pickle.load(f)
    y_PRED = svc.predict(sc.transform(df))
    print(y_PRED)