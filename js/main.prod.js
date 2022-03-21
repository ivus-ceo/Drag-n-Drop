"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}var dragContainers=document.querySelectorAll(".fill-container"),dropContainers=document.querySelectorAll(".empty-container"),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_loop=function(){var r=_step.value;r.addEventListener("dragstart",function(){r.classList.add("ondrag")}),r.addEventListener("dragend",function(){r.classList.remove("ondrag")})},_iterator=dragContainers[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)_loop()}catch(r){_didIteratorError=!0,_iteratorError=r}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_loop2=function(){var o=_step2.value;o.addEventListener("dragover",function(r){r.preventDefault();var t=document.querySelector(".fill-container.ondrag"),e=getDragAfterElement(o,r.clientY);void 0===e?o.appendChild(t):o.insertBefore(t,e)}),o.addEventListener("dragenter",function(){o.classList.add("ondrop")}),o.addEventListener("dragleave",function(){o.classList.remove("ondrop")}),o.addEventListener("drop",function(r){o.classList.remove("ondrop")})},_iterator2=dropContainers[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)_loop2()}catch(r){_didIteratorError2=!0,_iteratorError2=r}finally{try{_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return()}finally{if(_didIteratorError2)throw _iteratorError2}}function getDragAfterElement(r,n){return _toConsumableArray(r.querySelectorAll(".fill-container:not(.ondrag)")).reduce(function(r,t){var e=t.getBoundingClientRect(),o=n-e.top-e.height/2;return o<0&&o>r.offset?{offset:o,element:t}:r},{offset:Number.NEGATIVE_INFINITY}).element}