import pickle
import pandas as pd
import os
import sys
from   pathlib import Path

scaler_path = os.path.join(os.getcwd(), 'routes', 'scaler.pkl')
model_path = os.path.join(os.getcwd(), 'routes', 'model.pkl')

print('file : ', scaler_path, file=sys.stderr)
print('file : ', model_path, file=sys.stderr)

cols = ['radius_mean', 'texture_mean', 'smoothness_mean', 'compactness_mean',
        'symmetry_mean', 'fractal_dimension_mean', 'radius_se', 'texture_se',
        'smoothness_se', 'compactness_se', 'symmetry_se', 'fractal_dimension_se']

data = [(13.4, 20.52, 0.11, 0.14, 0.2116, 0.07325, 0.39060, 0.930600, 0.005414, 0.022650, 0.017050, 0.004005)]

df = pd.DataFrame(data, columns=cols)

with open(scaler_path, 'rb') as f:
    f.seek(0)
    sc = pickle.load(f)


with open(model_path, 'rb') as f:
    svc = pickle.load(f)
    y_PRED = svc.predict(sc.transform(df))
    print('y_PRED : ', y_PRED)