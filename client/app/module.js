angular.module('app', [
  'ngMaterial',
  'ngMessages'
])
.directive('datepickerValidationFix', function () {
    return {
        restrict: 'A',
        require: 'mdDatepicker',
        link: function (scope, element, attrs, mdDatepickerCtrl) {
            // Fix to run validation when a datepicker's minDate changes
            // Bug #5938
            mdDatepickerCtrl.$scope.$watch(function () { return mdDatepickerCtrl.minDate; }, function () {
                if (mdDatepickerCtrl.dateUtil.isValidDate(mdDatepickerCtrl.date)) {
                    mdDatepickerCtrl.updateErrorState.call(mdDatepickerCtrl);
                }
            });

            // Fix to clear error state when setting date programatically from null
            // Bug #6086
            mdDatepickerCtrl.$scope.$watch(function () { return mdDatepickerCtrl.date; }, function (newVal, oldVal) {
                mdDatepickerCtrl.updateErrorState.call(mdDatepickerCtrl);
            });
        }
    };
});
