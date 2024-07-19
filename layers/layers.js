var wms_layers = [];


        var lyr_FonddecarteOpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Fond de carte (OpenStreetMap)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TrocCDMArbresremarquables_1 = new ol.format.GeoJSON();
var features_TrocCDMArbresremarquables_1 = format_TrocCDMArbresremarquables_1.readFeatures(json_TrocCDMArbresremarquables_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrocCDMArbresremarquables_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrocCDMArbresremarquables_1.addFeatures(features_TrocCDMArbresremarquables_1);
var lyr_TrocCDMArbresremarquables_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrocCDMArbresremarquables_1, 
                style: style_TrocCDMArbresremarquables_1,
                popuplayertitle: "Troc-CDM Arbres remarquables",
                interactive: true,
    title: 'Troc-CDM Arbres remarquables<br />\
    <img src="styles/legend/TrocCDMArbresremarquables_1_0.png" /> Arbre remarquable ACM (demande PLU)<br />\
    <img src="styles/legend/TrocCDMArbresremarquables_1_1.png" /> Arbre remarquable <br />'
        });

lyr_FonddecarteOpenStreetMap_0.setVisible(true);lyr_TrocCDMArbresremarquables_1.setVisible(true);
var layersList = [lyr_FonddecarteOpenStreetMap_0,lyr_TrocCDMArbresremarquables_1];
lyr_TrocCDMArbresremarquables_1.set('fieldAliases', {'fid': 'fid', 'idbase': 'idbase', 'typeemplace': 'typeemplace', 'domanialite': 'domanialite', 'arrondissem': 'arrondissem', 'complementa': 'complementa', 'numero': 'numero', 'adresse': 'adresse', 'idemplaceme': 'idemplaceme', 'nomCommun': 'nomCommun', 'genre': 'genre', 'espece': 'espece', 'varieteoucu': 'varieteoucu', 'circonferen': 'circonferen', 'hauteurenm': 'hauteurenm', 'stadedevelo': 'stadedevelo', 'remarquable': 'remarquable', 'demandeClassRem': 'demandeClassRem', 'photo': 'photo', 'Droits d\'utilisation': 'Droits d\'utilisation', });
lyr_TrocCDMArbresremarquables_1.set('fieldImages', {'fid': 'TextEdit', 'idbase': 'TextEdit', 'typeemplace': 'TextEdit', 'domanialite': 'TextEdit', 'arrondissem': 'TextEdit', 'complementa': 'TextEdit', 'numero': 'TextEdit', 'adresse': 'TextEdit', 'idemplaceme': 'TextEdit', 'nomCommun': 'TextEdit', 'genre': 'TextEdit', 'espece': 'TextEdit', 'varieteoucu': 'TextEdit', 'circonferen': 'TextEdit', 'hauteurenm': 'TextEdit', 'stadedevelo': 'TextEdit', 'remarquable': 'TextEdit', 'demandeClassRem': 'TextEdit', 'photo': 'ExternalResource', 'Droits d\'utilisation': 'TextEdit', });
lyr_TrocCDMArbresremarquables_1.set('fieldLabels', {'fid': 'hidden field', 'idbase': 'hidden field', 'typeemplace': 'hidden field', 'domanialite': 'hidden field', 'arrondissem': 'hidden field', 'complementa': 'hidden field', 'numero': 'hidden field', 'adresse': 'hidden field', 'idemplaceme': 'hidden field', 'nomCommun': 'inline label - visible with data', 'genre': 'inline label - visible with data', 'espece': 'inline label - visible with data', 'varieteoucu': 'hidden field', 'circonferen': 'hidden field', 'hauteurenm': 'hidden field', 'stadedevelo': 'hidden field', 'remarquable': 'hidden field', 'demandeClassRem': 'hidden field', 'photo': 'header label - visible with data', 'Droits d\'utilisation': 'inline label - visible with data', });
lyr_TrocCDMArbresremarquables_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});