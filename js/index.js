$(function () {
    const property = 'hc-key';
    const visited_countries = [
        'de', // Germany
        'fr', // France
        'gb', // Britain
        'pl', // Poland
        'ru', // Russia
        'ua', // Ukraine
        'cz', // Czech
        'si', // Slovenia
        'sk', // Slovakia
        'al', // Albania
        'at', // Österreich
        'kr', // South Korea
    ];

    function getDrilldown(data, visited) {
        $.each(data, function (i) {
            this.value = visited.indexOf(this.properties[property]);
        });
        return data;
    }
    var world_data = Highcharts.geojson(Highcharts.maps['custom/world']);
    var us_data = Highcharts.geojson(Highcharts.maps['countries/us/us-all']);
    var india_data = Highcharts.geojson(Highcharts.maps['countries/in/custom/in-all-disputed']);

    $.each(world_data, function(i) {
        if(this.properties[property] == 'us') {
            this.drilldown = getDrilldown(
                us_data
            );
        }
    })
    this.valude = visited_countries.indexOf(this.properties[property]);
});

$('#containers').highcharts('Map',{
    chart: {
        spacingBottom: 20, 
        events: {
            drilldown: function (e) {
                if(!e.seriesOptions){
                
                }
            }
        }
    }
})