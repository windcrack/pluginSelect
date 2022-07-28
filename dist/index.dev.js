"use strict";

var _select = require("./select/select.js");

require("./select/styles.scss");

var select = new _select.Select('#select', {
  placeholder: 'Выбери, пожалуйста, элемент',
  selecetedId: '4',
  data: [{
    id: '1',
    value: 'React'
  }, {
    id: '2',
    value: 'Angular'
  }, {
    id: '3',
    value: 'Vue'
  }, {
    id: '4',
    value: 'React Native'
  }, {
    id: '5',
    value: 'Next'
  }, {
    id: '6',
    value: 'Nest'
  }],
  onSelect: function onSelect(item) {
    console.log('Select item -> ', item);
  }
});
window.s = select;
//# sourceMappingURL=index.dev.js.map
