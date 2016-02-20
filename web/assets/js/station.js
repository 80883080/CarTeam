var map = null;
var geocoder = null;
var searchMarker = null;

$(document).ready(function () {


});


function initMap() {

    map = new AMap.Map('mapbox', {
        zoom: 14,
        center: [116.39, 39.9]
    });

    geocoder = new AMap.Geocoder({});

    $("#map-show-search").click(function (event) {
        $("#map-keyword").val("恒通商务园");
        $('.dialog.map-search').modal({backdrop: "static", keyboard: false});
    });
    $("#map-keyword").keyup(function (event) {
        if (event.keyCode == "13") {

            $("#map-search").trigger("click");
        }
    });
    $("#map-search").click(function () {

        $(".alert").hide();

        var keyword = $("#map-keyword").val();
        if (keyword == "") {
            warning("请输入查询关键字！");
            return;
        }
        geocoder.getLocation(keyword, function (status, result) {
            if (status == "complete") {

                $(".list-group.map-list").children().remove();
                var list = result.geocodes;
                for (var i = 0; i < list.length; i++) {
                    var rs = list[i];
                    var $item = $('<a href="#" class="list-group-item map-list-item">' + rs.formattedAddress + '</a>');
                    $item.data("geo", rs);
                    $(".list-group.map-list").append($item);
                    $item.click(function () {
                        $(".map-list-item").removeClass("active");
                        $(this).addClass("active");
                        var geo = $(this).data("geo");

                        if (searchMarker != null) {
                            map.remove(searchMarker);
                        }

                        searchMarker = new AMap.Marker({
                            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                            position: geo.location,
                            animation: "AMAP_ANIMATION_BOUNCE",
                            label: {content: keyword, offset: new AMap.Pixel(0, -32)}
                        });
                        searchMarker.setMap(map);

                        map.panTo(geo.location);
                        map.setZoomAndCenter(20, geo.location);
                    })
                }
                console.log(result);


                var lat = result.geocodes[0].location.lat;
                var lng = result.geocodes[0].location.lng;
                // warning(lat + "," + lng);

            }
            else if (status == "no_data") {

                warning("很抱歉，未找到对应的地址信息！");
            }
            else if (status == "error") {
                error(result);
            }
        });
    })
}

function warning(text) {

    $(".alert.search-alert").removeClass("alert-*");
    $(".alert.search-alert").addClass("alert-warning");
    $(".alert.search-alert").html(text);
    $(".alert.search-alert").fadeIn(500);
}

function error(text) {
    $(".alert.search-alert").removeClass("alert-*");
    $(".alert.search-alert").addClass("alert-danger");
    $(".alert.search-alert").html(text);
    $(".alert.search-alert").fadeIn(500);
}
