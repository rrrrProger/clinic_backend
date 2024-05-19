<script setup lang="ts">
import axios from 'axios';
import VueNumberInput from '@chenfengyuan/vue-number-input';

function get_py_prediction() {
    if (radius_mean && texture_mean && smoothness_mean &&
        compactness_mean && symmetry_mean && fractal_dimension_mean &&
        radius_se && texture_se && smoothness_se &&
        compactness_se && symmetry_se && fractal_dimension_se) {

            
            console.log(radius_mean, fractal_dimension_se);
            axios.post("/predict-patient", {data: [radius_mean, texture_mean, smoothness_mean, compactness_mean,
                symmetry_mean, fractal_dimension_mean, radius_se, texture_se,
                smoothness_se, compactness_se, symmetry_se, fractal_dimension_se]}).then(response => {
                if (response.data) {
                    console.log("predict-patient : ", response.data);
                }
            });
        } else {
            console.log("Dont get all values")
        }
}

var radius_mean, texture_mean, smoothness_mean;
var compactness_mean, symmetry_mean, fractal_dimension_mean;
var radius_se, texture_se, smoothness_se;
var compactness_se, symmetry_se, fractal_dimension_se;

</script>

<template>
    <label>Введіть radius mean</label>
    <vue-number-input v-model="radius_mean" :model-value="13.4"></vue-number-input>

    <label>Введіть texture mean</label>
    <vue-number-input v-model="texture_mean" :model-value="20.52"></vue-number-input>

    <label>Введіть smoothness mean</label>
    <vue-number-input v-model="smoothness_mean" :model-value="0.11"></vue-number-input>

    <label>Введіть compactness mean</label>
    <vue-number-input v-model="compactness_mean" :model-value="0.14"></vue-number-input>

    <label>Введіть symmetry mean</label>
    <vue-number-input v-model="symmetry_mean" :model-value="0.2116"></vue-number-input>

    <label>Введіть fractal dimension mean</label>
    <vue-number-input v-model="fractal_dimension_mean" :model-value="0.07325"></vue-number-input>

    <label>Введіть radius se mean</label>
    <vue-number-input v-model="radius_se" :model-value="0.39060"></vue-number-input>

    <label>Введіть texture se mean</label>
    <vue-number-input v-model="texture_se" :model-value="0.930600"></vue-number-input>

    <label>Введіть smoothness se mean</label>
    <vue-number-input v-model="smoothness_se" :model-value="0.005414"></vue-number-input>

    <label>Введіть compactness se mean</label>
    <vue-number-input v-model="compactness_se" :model-value="0.022650"></vue-number-input>

    <label>Введіть symmetry se mean</label>
    <vue-number-input v-model="symmetry_se" :model-value="0.017050"></vue-number-input>

    <label>Введіть fractal dimension se mean</label>
    <vue-number-input v-model="fractal_dimension_se" :model-value="0.004005"></vue-number-input>

    <v-btn text @click="get_py_prediction($event)">Отримати результат</v-btn>
</template>