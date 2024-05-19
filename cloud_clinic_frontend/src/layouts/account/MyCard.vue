<template>
  <v-container>
    <v-row>
      <v-col cols="12">
          <v-autocomplete
                  :items="['Iван Іванович', 'Сергій Сергійович']"
                  class="w-33"
                  density="compact"
                  variant="solo"
                  label="Введіть ім'я пацієнта"
                  :append-inner-icon="mdiMagnify"
                  single-line
                  hide-details
          ></v-autocomplete>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels v-model="panels" multiple>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex justify-space-between align-center">
              Загальна інформація
              <!--            <v-btn @click="editMode = true" v-if="!editMode">Edit</v-btn>-->
            </v-expansion-panel-title>
            <!--            <span class="headline">{{ userData.name }}</span>-->
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Прізвище:</strong></v-expansion-panel-text>
              <v-expansion-panel-text>Іванов</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Ім'я:</strong></v-expansion-panel-text>
              <v-expansion-panel-text>Іван</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>По батькові:</strong></v-expansion-panel-text>
              <v-expansion-panel-text>Іванович</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Стать:</strong></v-expansion-panel-text>
              <v-expansion-panel-text>MALE</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Дата народження:</strong></v-expansion-panel-text>
              <v-expansion-panel-text> 15.04.1992</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Вік:</strong></v-expansion-panel-text>
              <v-expansion-panel-text> 32</v-expansion-panel-text>
            </div>

            <!--            <v-list>-->
            <!--              <v-list-item v-for="(value, key) in userData.additionalInfo" :key="key">-->
            <!--                <v-expansion-panel-text>{{ key }}</v-expansion-panel-text>-->
            <!--                <v-list-item-subtitle v-if="!editMode">{{ value }}</v-list-item-subtitle>-->
            <!--                <v-text-field v-if="editMode" v-model="editedData[key]"></v-text-field>-->
            <!--              </v-list-item>-->
            <!--            </v-list>-->


            <!--          <v-card-actions v-if="editMode">-->
            <!--            <v-btn @click="saveChanges" color="success">Save</v-btn>-->
            <!--            <v-btn @click="cancelEdit" color="error">Cancel</v-btn>-->
            <!--          </v-card-actions>-->
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex justify-space-between align-center">
              Контакти
              <!--            <v-btn @click="editMode = true" v-if="!editMode">Edit</v-btn>-->
            </v-expansion-panel-title>
            <!--            <span class="headline">{{ userData.name }}</span>-->
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Адреса:</strong></v-expansion-panel-text>
              <v-expansion-panel-text> Київ Вознесенська 2</v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Електронна адреса:</strong></v-expansion-panel-text>
              <v-expansion-panel-text> test@mail.com </v-expansion-panel-text>
            </div>
            <div class="d-flex">
              <v-expansion-panel-text class="w-50"><strong>Телефон:</strong></v-expansion-panel-text>
              <v-expansion-panel-text> +38095036213</v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex justify-space-between align-center">
              Поточні плани
              <!--            <v-btn @click="editMode = true" v-if="!editMode">Edit</v-btn>-->
            </v-expansion-panel-title>
            <!--            <span class="headline">{{ userData.name }}</span>-->
            <div class="d-flex justify-center">
              <v-expansion-panel-text><strong>Активних планів немає</strong></v-expansion-panel-text>
            </div>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title class="d-flex justify-space-between align-center">
              Завантажити Файли МРТ
              <!--            <v-btn @click="editMode = true" v-if="!editMode">Edit</v-btn>-->
            </v-expansion-panel-title>
            <!--            <span class="headline">{{ userData.name }}</span>-->
            <div class="d-flex justify-center">
              <v-file-input multiple truncate-length="15" ref="myfile" model="files" @change="selectFile($event)" type="file"></v-file-input>
              <v-btn text @click="send_files($event)">Завантажити</v-btn>
            </div>
          </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-title class="d-flex justify-space-between align-center">
              Переглянути Файли МРТ
              <!--            <v-btn @click="editMode = true" v-if="!editMode">Edit</v-btn>-->
            </v-expansion-panel-title>
            <div id="dwv">
            <div id="layerGroup0"></div>
            </div>
            <div class="d-flex justify-center">
              <v-btn text @click="receive_files($event)">Переглянути</v-btn>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {mdiMagnify} from "@mdi/js";
import axios from 'axios';
import fs from "react-native-fs"
import { saveAs } from 'file-saver';


let object = {
  currentFile: null
};

const userData = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  additionalInfo: {
    age: 30,
    location: 'City',
    gender: 'male'
  },
});

const isDoctor = ref(true)
const panels = ref([])
const editedData = ref({age:30, location: 'City', gender: 'male'});
const editMode = ref(false);

onMounted(() => {
  editedData.value = {...userData.value.additionalInfo};
});

const saveChanges = () => {
  userData.value.additionalInfo = {...editedData.value};
  editMode.value = false;
};

const cancelEdit = () => {
  editMode.value = false;
  editedData.value = {...userData.value.additionalInfo};
};

function selectFile(event) {
  const target= event.target as EventTarget ;
  const filesArr = (target as HTMLInputElement).files;

  object.currentFile = filesArr;
}

function send_files() {
  if (object.currentFile) {
    let formData = new FormData();

    for (let file of object.currentFile) {
      formData.append("files", file, file.name);
    }
    axios.post("/card", formData);
  }
}
function blobToFile(theBlob: Blob, fileName:string) {
  const b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;
    
  //Cast to a File() type
  return theBlob as File;
}

function download_files(fileData) {
  if (fileData.name.endsWith(".dcm")) {
      let arrFile = fileData.buf;
      let arrLen = arrFile.data.length;
      let name = fileData.name;
      var fileBuf = new Uint8Array(arrLen);

      console.log(arrFile);
      for (var i = 0; i < arrLen; i++) {
        fileBuf[i] = arrFile.data[i];
      }
      var blob = new Blob([fileBuf], {type: 'application/dicom'});
//      add_link();
      saveAs(blob, name);
  }
}

function receive_files() {
  axios.post("/mrt-files", { name: 'Roman' }).then(response => {
    if (response.status === 200 && response.data) {
      let dataArr = response.data;
      for (var fileData of dataArr) {
        download_files(fileData);
        console.log(fileData.name);
      }
    }
  });
}

</script>