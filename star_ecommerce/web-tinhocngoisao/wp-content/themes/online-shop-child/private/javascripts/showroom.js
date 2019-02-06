var data_init = [];
var showRooms = {
    initialize: function() {
        var myOptions = {
            zoom: 13,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        map = new google.maps.Map(document.getElementById("list_address_store"), myOptions);
        this.insertMarkers();
    },

    insertMarkers: function() {
        for (let index in list_address_store) {
            let item = list_address_store[index];
            this.renderMarkerFromAddress(item);
        }
    },

    renderMarkerFromAddress: function(item) {
        var geo = new google.maps.Geocoder;
        geo.geocode({'address': item.address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var image = {
                    url: item.image_icon,
                    size: new google.maps.Size(20, 32),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 32)
                };
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    position: results[0].geometry.location,
                    title: item.store_name
                });
                marker.addListener('click', function() {
                    new google.maps.InfoWindow({
                        content: `<div class="marker-item"><h2>${item.store_name}</h2>
                                    <p>Địa chỉ: ${item.address}</p>
                                    <a href="tel:${item.phone}">Hotline:${item.phone}</a>
                                </div>`
                    }).open(map, marker);
                });
                data_init[data_init.length] = {
                    "location" : results[0].geometry.location,
                    "marker" : marker
                }
            } else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });
    },

    init: function() {
        if (typeof google_map_key !== 'undefined' && google_map_key !== '' && typeof list_address_store !== 'undefined') {
            this.initialize();
            $('.show-map').on('click', function() {
                var item = data_init[$(this).attr('data')];
                if (item.length > 0) {
                    map.setCenter(item.location);
                    map.setZoom(20);
                    new google.maps.event.trigger( item.marker, 'click' );

                    var top = $('#list_address_store').position().top - 50;
                    $('html, body').animate({
                        scrollTop: top
                    }, 1000);
                }
            });
        }
    }
}

module.exports = showRooms;