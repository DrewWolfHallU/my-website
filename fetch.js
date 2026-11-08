window.onload = function() {
     fetch('flowers.json')

 .then(function(response) {

return response.json();

 })

 .then(function(json) {

var tableCode = '<table><caption>Flowers</caption><thead><tr><th>Flower</th><th>Family</th><th>Planting Season</th><th>Water Needs</th></tr></thead><tbody>';

for (var i = 0; i < json.length; i++) {

 tableCode += '<tr><td>' + json[i].flower + '</td><td>' + json[i].family + '</td><td>' + json[i].season + '</td><td>' + json[i].water + '</td></tr>';

 }

 tableCode += '</tbody><tfoot><tr><td colspan="4">Source: USDA Plants Database</td></tr></tfoot></table>';

 document.getElementById('flowers').innerHTML = tableCode;

 })

 }