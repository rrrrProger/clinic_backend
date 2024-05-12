<template>
    <div id="dwvAppp">
    </div>
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

const p = document.createElement('p');
p.appendChild(document.createTextNode('Drag and drop data here or '));
// input file
const input = document.createElement('input');
input.onchange = getFileToView;
input.type = 'file';
input.multiple = true;
input.id = 'input-file';
input.style.display = 'none';
const label = document.createElement('label');
label.htmlFor = 'input-file';
const link = document.createElement('a');
link.appendChild(document.createTextNode('click here'));
link.id = 'input-file-link';
label.appendChild(link);
p.appendChild(input);
p.appendChild(label);

document.body.appendChild(p);

function getFileToView(e) {
    const target = e.target as HTMLInputElement;
    if (target && target.files) {
      const files = Array.from(target.files);
      dwvApp.loadFiles(files);
    }
}
</script>