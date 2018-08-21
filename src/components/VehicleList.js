export default {
    container: $('#vehicle-list'),
    vehicles: [],

    init() {
        this.getVehicles();
    },

    getVehicles() {
        this.call('/api/vehicle', (data) => {
            this.vehicles = data.vehicles;
            this.getVehicleDetails();
        });
    },

    getVehicleDetails() {
        $.each( this.vehicles, ( key, vehicle ) => {
            this.call(vehicle.url, (data) => {
                this.vehicles[key] = $.extend(this.vehicles[key], data);
                this.display(key);
            });
        });
    },

    call(uri, callback) {
        $.ajax({
            url: uri,
            dataType: 'json'
        }).done((data) => {
            callback(data);
        });
    },

    display(key) {
        const vehicle = this.vehicles[key];

        const vehicleEl = $('<div class="col-md-6 col-lg-3 vehicle-list__single"></div>');
        const vehicleImage = $(`<img src="${vehicle.media[0].url}"/>`);

        const vehicleDetails = $('<div class="details"></div>');
            const vehicleName = $(`<h2 class="title">Jaguar ${vehicle.id}</h2>`);
            const vehiclePrice = $(`<p class="price">From ${vehicle.price}</p>`);
            const vehicleDescription = $(`<p>${vehicle.description}</p>`);
            vehicleDetails.append(vehicleName, vehiclePrice, vehicleDescription);

        vehicleEl.append(vehicleImage, vehicleDetails);
        this.container.append(vehicleEl);
    }
};
