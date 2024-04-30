var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_neeleshwaram_1 = new ol.format.GeoJSON();
var features_neeleshwaram_1 = format_neeleshwaram_1.readFeatures(json_neeleshwaram_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neeleshwaram_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neeleshwaram_1.addFeatures(features_neeleshwaram_1);
var lyr_neeleshwaram_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_neeleshwaram_1, 
                style: style_neeleshwaram_1,
                popuplayertitle: "neeleshwaram",
                interactive: true,
                title: '<img src="styles/legend/neeleshwaram_1.png" /> neeleshwaram'
            });
var format_stream_2 = new ol.format.GeoJSON();
var features_stream_2 = format_stream_2.readFeatures(json_stream_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stream_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stream_2.addFeatures(features_stream_2);
var lyr_stream_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stream_2, 
                style: style_stream_2,
                popuplayertitle: "stream",
                interactive: true,
    title: 'stream<br />\
    <img src="styles/legend/stream_2_0.png" /> 0<br />\
    <img src="styles/legend/stream_2_1.png" /> 1<br />\
    <img src="styles/legend/stream_2_2.png" /> 2<br />\
    <img src="styles/legend/stream_2_3.png" /> 3<br />\
    <img src="styles/legend/stream_2_4.png" /> 4<br />\
    <img src="styles/legend/stream_2_5.png" /> 5<br />\
    <img src="styles/legend/stream_2_6.png" /> 6<br />'
        });
var format_Main_3 = new ol.format.GeoJSON();
var features_Main_3 = format_Main_3.readFeatures(json_Main_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Main_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Main_3.addFeatures(features_Main_3);
var lyr_Main_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Main_3, 
                style: style_Main_3,
                popuplayertitle: "Main",
                interactive: true,
                title: '<img src="styles/legend/Main_3.png" /> Main'
            });

lyr_OSMStandard_0.setVisible(true);lyr_neeleshwaram_1.setVisible(true);lyr_stream_2.setVisible(true);lyr_Main_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_neeleshwaram_1,lyr_stream_2,lyr_Main_3];
lyr_neeleshwaram_1.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_stream_2.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_Main_3.set('fieldAliases', {'id': 'id', });
lyr_neeleshwaram_1.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_stream_2.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_Main_3.set('fieldImages', {'id': 'TextEdit', });
lyr_neeleshwaram_1.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'inline label - always visible', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_stream_2.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_Main_3.set('fieldLabels', {'id': 'no label', });
lyr_Main_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});