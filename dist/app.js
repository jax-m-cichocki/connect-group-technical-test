(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _VehicleList = require('./components/VehicleList');

var _VehicleList2 = _interopRequireDefault(_VehicleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_VehicleList2.default.init();

},{"./components/VehicleList":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    container: $('#vehicle-list'),
    vehicles: [],

    init: function init() {
        this.getVehicles();
    },
    getVehicles: function getVehicles() {
        var _this = this;

        this.call('/api/vehicle', function (data) {
            _this.vehicles = data.vehicles;
            _this.getVehicleDetails();
        });
    },
    getVehicleDetails: function getVehicleDetails() {
        var _this2 = this;

        $.each(this.vehicles, function (key, vehicle) {
            _this2.call(vehicle.url, function (data) {
                _this2.vehicles[key] = $.extend(_this2.vehicles[key], data);
                _this2.display(key);
            });
        });
    },
    call: function call(uri, callback) {
        $.ajax({
            url: uri,
            dataType: 'json'
        }).done(function (data) {
            callback(data);
        });
    },
    display: function display(key) {
        var vehicle = this.vehicles[key];
        console.log(vehicle);
        var vehicleEl = $('<div class="col-md-6 col-lg-3 vehicle-list__single"></div>');
        var vehicleImage = $('<img src="' + vehicle.media[0].url + '"/>');

        var vehicleDetails = $('<div class="details"></div>');
        var vehicleName = $('<h2 class="title">Jaguar ' + vehicle.id + '</h2>');
        var vehiclePrice = $('<p class="price">From ' + vehicle.price + '</p>');
        var vehicleDescription = $('<p>' + vehicle.description + '</p>');
        vehicleDetails.append(vehicleName, vehiclePrice, vehicleDescription);

        vehicleEl.append(vehicleImage, vehicleDetails);
        this.container.append(vehicleEl);
    }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvVmVoaWNsZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxzQkFBWSxJQUFaOzs7Ozs7OztrQkNGZTtBQUNYLGVBQVcsRUFBRSxlQUFGLENBREE7QUFFWCxjQUFVLEVBRkM7O0FBSVgsUUFKVyxrQkFJSjtBQUNILGFBQUssV0FBTDtBQUNILEtBTlU7QUFRWCxlQVJXLHlCQVFHO0FBQUE7O0FBQ1YsYUFBSyxJQUFMLENBQVUsY0FBVixFQUEwQixVQUFDLElBQUQsRUFBVTtBQUNoQyxrQkFBSyxRQUFMLEdBQWdCLEtBQUssUUFBckI7QUFDQSxrQkFBSyxpQkFBTDtBQUNILFNBSEQ7QUFJSCxLQWJVO0FBZVgscUJBZlcsK0JBZVM7QUFBQTs7QUFDaEIsVUFBRSxJQUFGLENBQVEsS0FBSyxRQUFiLEVBQXVCLFVBQUUsR0FBRixFQUFPLE9BQVAsRUFBb0I7QUFDdkMsbUJBQUssSUFBTCxDQUFVLFFBQVEsR0FBbEIsRUFBdUIsVUFBQyxJQUFELEVBQVU7QUFDN0IsdUJBQUssUUFBTCxDQUFjLEdBQWQsSUFBcUIsRUFBRSxNQUFGLENBQVMsT0FBSyxRQUFMLENBQWMsR0FBZCxDQUFULEVBQTZCLElBQTdCLENBQXJCO0FBQ0EsdUJBQUssT0FBTCxDQUFhLEdBQWI7QUFDSCxhQUhEO0FBSUgsU0FMRDtBQU1ILEtBdEJVO0FBd0JYLFFBeEJXLGdCQXdCTixHQXhCTSxFQXdCRCxRQXhCQyxFQXdCUztBQUNoQixVQUFFLElBQUYsQ0FBTztBQUNILGlCQUFLLEdBREY7QUFFSCxzQkFBVTtBQUZQLFNBQVAsRUFHRyxJQUhILENBR1EsVUFBQyxJQUFELEVBQVU7QUFDZCxxQkFBUyxJQUFUO0FBQ0gsU0FMRDtBQU1ILEtBL0JVO0FBaUNYLFdBakNXLG1CQWlDSCxHQWpDRyxFQWlDRTtBQUNULFlBQU0sVUFBVSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQWhCO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxZQUFNLFlBQVksRUFBRSw0REFBRixDQUFsQjtBQUNBLFlBQU0sZUFBZSxpQkFBZSxRQUFRLEtBQVIsQ0FBYyxDQUFkLEVBQWlCLEdBQWhDLFNBQXJCOztBQUVBLFlBQU0saUJBQWlCLEVBQUUsNkJBQUYsQ0FBdkI7QUFDSSxZQUFNLGNBQWMsZ0NBQThCLFFBQVEsRUFBdEMsV0FBcEI7QUFDQSxZQUFNLGVBQWUsNkJBQTJCLFFBQVEsS0FBbkMsVUFBckI7QUFDQSxZQUFNLHFCQUFxQixVQUFRLFFBQVEsV0FBaEIsVUFBM0I7QUFDQSx1QkFBZSxNQUFmLENBQXNCLFdBQXRCLEVBQW1DLFlBQW5DLEVBQWlELGtCQUFqRDs7QUFFSixrQkFBVSxNQUFWLENBQWlCLFlBQWpCLEVBQStCLGNBQS9CO0FBQ0EsYUFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixTQUF0QjtBQUNIO0FBL0NVLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgVmVoaWNsZUxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1ZlaGljbGVMaXN0JztcblxuVmVoaWNsZUxpc3QuaW5pdCgpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbnRhaW5lcjogJCgnI3ZlaGljbGUtbGlzdCcpLFxuICAgIHZlaGljbGVzOiBbXSxcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0VmVoaWNsZXMoKTtcbiAgICB9LFxuXG4gICAgZ2V0VmVoaWNsZXMoKSB7XG4gICAgICAgIHRoaXMuY2FsbCgnL2FwaS92ZWhpY2xlJywgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmVoaWNsZXMgPSBkYXRhLnZlaGljbGVzO1xuICAgICAgICAgICAgdGhpcy5nZXRWZWhpY2xlRGV0YWlscygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0VmVoaWNsZURldGFpbHMoKSB7XG4gICAgICAgICQuZWFjaCggdGhpcy52ZWhpY2xlcywgKCBrZXksIHZlaGljbGUgKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGwodmVoaWNsZS51cmwsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWhpY2xlc1trZXldID0gJC5leHRlbmQodGhpcy52ZWhpY2xlc1trZXldLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoa2V5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2FsbCh1cmksIGNhbGxiYWNrKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVyaSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcbiAgICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5KGtleSkge1xuICAgICAgICBjb25zdCB2ZWhpY2xlID0gdGhpcy52ZWhpY2xlc1trZXldO1xuICAgICAgICBjb25zb2xlLmxvZyh2ZWhpY2xlKTtcbiAgICAgICAgY29uc3QgdmVoaWNsZUVsID0gJCgnPGRpdiBjbGFzcz1cImNvbC1tZC02IGNvbC1sZy0zIHZlaGljbGUtbGlzdF9fc2luZ2xlXCI+PC9kaXY+Jyk7XG4gICAgICAgIGNvbnN0IHZlaGljbGVJbWFnZSA9ICQoYDxpbWcgc3JjPVwiJHt2ZWhpY2xlLm1lZGlhWzBdLnVybH1cIi8+YCk7XG5cbiAgICAgICAgY29uc3QgdmVoaWNsZURldGFpbHMgPSAkKCc8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgY29uc3QgdmVoaWNsZU5hbWUgPSAkKGA8aDIgY2xhc3M9XCJ0aXRsZVwiPkphZ3VhciAke3ZlaGljbGUuaWR9PC9oMj5gKTtcbiAgICAgICAgICAgIGNvbnN0IHZlaGljbGVQcmljZSA9ICQoYDxwIGNsYXNzPVwicHJpY2VcIj5Gcm9tICR7dmVoaWNsZS5wcmljZX08L3A+YCk7XG4gICAgICAgICAgICBjb25zdCB2ZWhpY2xlRGVzY3JpcHRpb24gPSAkKGA8cD4ke3ZlaGljbGUuZGVzY3JpcHRpb259PC9wPmApO1xuICAgICAgICAgICAgdmVoaWNsZURldGFpbHMuYXBwZW5kKHZlaGljbGVOYW1lLCB2ZWhpY2xlUHJpY2UsIHZlaGljbGVEZXNjcmlwdGlvbik7XG5cbiAgICAgICAgdmVoaWNsZUVsLmFwcGVuZCh2ZWhpY2xlSW1hZ2UsIHZlaGljbGVEZXRhaWxzKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHZlaGljbGVFbCk7XG4gICAgfVxufTtcbiJdfQ==
