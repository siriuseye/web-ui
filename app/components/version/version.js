'use strict';

angular.module('SiriusEye.version', [
  'SiriusEye.version.interpolate-filter',
  'SiriusEye.version.version-directive'
])

.value('version', '0.1');
