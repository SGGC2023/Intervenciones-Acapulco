var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });

        var lyr_CartoPositron_1 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_gro_municipio_2 = new ol.format.GeoJSON();
var features_gro_municipio_2 = format_gro_municipio_2.readFeatures(json_gro_municipio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gro_municipio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gro_municipio_2.addFeatures(features_gro_municipio_2);
var lyr_gro_municipio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gro_municipio_2, 
                style: style_gro_municipio_2,
                interactive: false,
                title: '<img src="styles/legend/gro_municipio_2.png" /> gro_municipio'
            });
var format_iNTERVENCIONES_3 = new ol.format.GeoJSON();
var features_iNTERVENCIONES_3 = format_iNTERVENCIONES_3.readFeatures(json_iNTERVENCIONES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iNTERVENCIONES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iNTERVENCIONES_3.addFeatures(features_iNTERVENCIONES_3);
var lyr_iNTERVENCIONES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iNTERVENCIONES_3, 
                style: style_iNTERVENCIONES_3,
                interactive: true,
    title: 'iNTERVENCIONES<br />\
    <img src="styles/legend/iNTERVENCIONES_3_0.png" /> Auditorio Municipal Ethel Diego<br />\
    <img src="styles/legend/iNTERVENCIONES_3_1.png" /> Auditorio Parque Papagayo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_2.png" /> Cancha de la CROM<br />\
    <img src="styles/legend/iNTERVENCIONES_3_3.png" /> Cancha de los bomberos<br />\
    <img src="styles/legend/iNTERVENCIONES_3_4.png" /> Cancha de usos Multiples El Espinalillo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_5.png" /> Cancha deportiva de usos múltiples, Santa Cruz<br />\
    <img src="styles/legend/iNTERVENCIONES_3_6.png" /> Cancha Jardin de los Angeles<br />\
    <img src="styles/legend/iNTERVENCIONES_3_7.png" /> Cancha Las Palmitas<br />\
    <img src="styles/legend/iNTERVENCIONES_3_8.png" /> Cancha Paseo de la Cañada<br />\
    <img src="styles/legend/iNTERVENCIONES_3_9.png" /> Cancha Pie de la Cuesta<br />\
    <img src="styles/legend/iNTERVENCIONES_3_10.png" /> Cancha Principal Antorcha Revolucionaria<br />\
    <img src="styles/legend/iNTERVENCIONES_3_11.png" /> Cancha Puerto Marqués<br />\
    <img src="styles/legend/iNTERVENCIONES_3_12.png" /> Cancha SEXA 1<br />\
    <img src="styles/legend/iNTERVENCIONES_3_13.png" /> Cancha UH José López Portillo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_14.png" /> CDC La Venta / Cancha Rosa Bailón<br />\
    <img src="styles/legend/iNTERVENCIONES_3_15.png" /> Centro Cultural y DIF Jardín Palmas<br />\
    <img src="styles/legend/iNTERVENCIONES_3_16.png" /> Centro Deportivo Av. Revolución<br />\
    <img src="styles/legend/iNTERVENCIONES_3_17.png" /> Cici acuático<br />\
    <img src="styles/legend/iNTERVENCIONES_3_18.png" /> Constituyentes Exp. Fastina Benites<br />\
    <img src="styles/legend/iNTERVENCIONES_3_19.png" /> Deportivo Base Lince<br />\
    <img src="styles/legend/iNTERVENCIONES_3_20.png" /> Deportivo Calle Unidad<br />\
    <img src="styles/legend/iNTERVENCIONES_3_21.png" /> Deportivo maquina<br />\
    <img src="styles/legend/iNTERVENCIONES_3_22.png" /> Distancia máxima bahia Acapulco<br />\
    <img src="styles/legend/iNTERVENCIONES_3_23.png" /> Mdo. de Artesanías Tianguis Turístico Papagayo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_24.png" /> Mercado Emiliano Zapata<br />\
    <img src="styles/legend/iNTERVENCIONES_3_25.png" /> Mercado Hogar Moderno<br />\
    <img src="styles/legend/iNTERVENCIONES_3_26.png" /> Mercado Icacos<br />\
    <img src="styles/legend/iNTERVENCIONES_3_27.png" /> Mercado Palma Sola<br />\
    <img src="styles/legend/iNTERVENCIONES_3_28.png" /> Mercado Puerto Marqués<br />\
    <img src="styles/legend/iNTERVENCIONES_3_29.png" /> Mercado Santa Lucia<br />\
    <img src="styles/legend/iNTERVENCIONES_3_30.png" /> Parque deportivo Elena Nambo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_31.png" /> Parque Ejidal Icacos<br />\
    <img src="styles/legend/iNTERVENCIONES_3_32.png" /> Parque Lineal Durango<br />\
    <img src="styles/legend/iNTERVENCIONES_3_33.png" /> Parque Merle Oberón<br />\
    <img src="styles/legend/iNTERVENCIONES_3_34.png" /> Parque Navidad de Llano Largo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_35.png" /> Plaza -  Cancha Llano Largo<br />\
    <img src="styles/legend/iNTERVENCIONES_3_36.png" /> Tianguis Turístico Caletilla<br />\
    <img src="styles/legend/iNTERVENCIONES_3_37.png" /> UH Alta Progreso<br />\
    <img src="styles/legend/iNTERVENCIONES_3_38.png" /> UH El Coloso<br />\
    <img src="styles/legend/iNTERVENCIONES_3_39.png" /> Unidad Deportiva Acapulco<br />\
    <img src="styles/legend/iNTERVENCIONES_3_40.png" /> Unidad deportiva Jardín Azteca<br />\
    <img src="styles/legend/iNTERVENCIONES_3_41.png" /> Unidad Deportiva San Miguel<br />\
    <img src="styles/legend/iNTERVENCIONES_3_42.png" /> Unidad Deportiva Vicente Suárez<br />\
    <img src="styles/legend/iNTERVENCIONES_3_43.png" /> xxx<br />'
        });

lyr_Googlesatellite_0.setVisible(true);lyr_CartoPositron_1.setVisible(true);lyr_gro_municipio_2.setVisible(true);lyr_iNTERVENCIONES_3.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_CartoPositron_1,lyr_gro_municipio_2,lyr_iNTERVENCIONES_3];
lyr_gro_municipio_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_iNTERVENCIONES_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gro_municipio_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_iNTERVENCIONES_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_gro_municipio_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_iNTERVENCIONES_3.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_iNTERVENCIONES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});