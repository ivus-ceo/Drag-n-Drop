"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var dragContainers = document.querySelectorAll('.fill-container');
var dropContainers = document.querySelectorAll('.empty-container');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var dragContainer = _step.value;
    dragContainer.addEventListener('dragstart', function () {
      dragContainer.classList.add('ondrag');
    });
    dragContainer.addEventListener('dragend', function () {
      dragContainer.classList.remove('ondrag');
    });
  };

  for (var _iterator = dragContainers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop2 = function _loop2() {
    var dropContainer = _step2.value;
    dropContainer.addEventListener('dragover', function (e) {
      e.preventDefault();
      var dragContainer = document.querySelector('.fill-container.ondrag');
      var afterElement = getDragAfterElement(dropContainer, e.clientY);

      if (afterElement === undefined) {
        dropContainer.appendChild(dragContainer);
      } else {
        dropContainer.insertBefore(dragContainer, afterElement);
      }
    });
    dropContainer.addEventListener('dragenter', function () {
      dropContainer.classList.add('ondrop');
    });
    dropContainer.addEventListener('dragleave', function () {
      dropContainer.classList.remove('ondrop');
    });
    dropContainer.addEventListener('drop', function (e) {
      dropContainer.classList.remove('ondrop');
    });
  };

  for (var _iterator2 = dropContainers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function getDragAfterElement(dropContainer, y) {
  var dragContainers = _toConsumableArray(dropContainer.querySelectorAll('.fill-container:not(.ondrag)'));

  return dragContainers.reduce(function (accumulator, currentElement) {
    var box = currentElement.getBoundingClientRect();
    var offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > accumulator.offset) {
      return {
        offset: offset,
        element: currentElement
      };
    } else {
      return accumulator;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}