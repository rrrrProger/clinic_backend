<template>
    <input type="file" @change="getViewFiles($event)">
    <div id="dwv-simpl0" class="dwv"></div>
    <!-- Third party (dwv) -->
    <script type="text/javascript" src="../../../../node_modules/jszip/dist/jszip.min.js"></script>
    <script type="text/javascript" src="../../../../node_modules/konva/konva.min.js"></script>
    <!-- decoders -->
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/dwv/rle.js"></script>
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/pdfjs/jpx.js"></script>
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/pdfjs/util.js"></script>
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/pdfjs/arithmetic_decoder.js"></script>
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/pdfjs/jpg.js"></script>
    <script type="text/javascript" src="../../../../node_modules/dwv/decoders/rii-mango/lossless-min.js"></script>
    <!-- dwv -->
    <script type="text/javascript" src="../../../../node_modules/dwv/dist/dwv.min.js"></script>
</template>
<script setup lang="ts">
import {
  App,
  AppOptions,
  ViewConfig,
  ToolConfig,
  decoderScripts,
  getDwvVersion,
} from 'dwv';

var dwv = dwv || {};

var dwvApp = new App();
const viewConfig0 = new ViewConfig('dwvAppp');
const viewConfigs = {'*': [viewConfig0]};
const options = new AppOptions(viewConfigs);
var tools = {
    Scroll: new ToolConfig(),
    ZoomAndPan: new ToolConfig(),
    WindowLevel: new ToolConfig(),
    Draw: new ToolConfig(['Ruler']),
};

options.tools = tools;

// "x-lml/x-evm"

dwvApp.init(options);
console.log('HERE');

dwvApp.addEventListener('renderend', function (/*event*/) {
    console.log('render endend');
});

dwvApp.addEventListener('loaditem', function (/*event*/) {
    console.log('loaditem');
});

dwvApp.addEventListener('loadstart', function (/*event*/) {
    console.log('loadstart');
});

dwvApp.addEventListener('loaderror', function (event) {
    console.log('loaderror');
    console.log(event);
});

dwvApp.addEventListener('loadend', function (/*event*/) {
    console.log('loadend');
});


//dwvApp.image.decoderScripts = {
//        "jpeg2000": "decoders/pdfjs/decode-jpeg2000.js",
//        "jpeg-lossless": "decoders/rii-mango/decode-jpegloss.js",
//        "jpeg-baseline": "decoders/pdfjs/decode-jpegbaseline.js"
//    };
function getViewFiles(e) {
    const target = e.target as HTMLInputElement;

    console.log('Go to getFileToView');
    if (target && target.files) {
        const files = Array.from(target.files);
        for (var file of target.files) {
            console.log("file : ", file);
        }

        console.log('files: ', files);
        dwvApp.loadFiles(files);
    }
}
</script>