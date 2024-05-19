<script setup lang="ts">
import axios from 'axios';
axios.post("/predict-patient", {data: [13.4, 20.52, 0.11, 0.14,
                                       0.2116, 0.07325, 0.39060, 0.930600,
                                       0.005414, 0.022650, 0.017050, 0.004005]}).then(response => {
    console.log("predict-patient : ", response);
});
</script>

<template>
    <h1>Hi Predict</h1>
</template>