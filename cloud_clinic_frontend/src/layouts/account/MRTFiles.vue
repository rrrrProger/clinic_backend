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
var inputUrls = [ 'https://raw.githubusercontent.com/ivmartel/dwv/master/tests/data/bbmri-53323851.dcm' ];

options.tools = tools;
dwvApp.init(options);
console.log('HERE');

if( inputUrls && inputUrls.length > 0 ) {
    dwvApp.loadURLs(inputUrls);
}
</script>