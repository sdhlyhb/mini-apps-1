

var jsonToCsv = function(jsonObj) {
  var keywords = Object.keys(jsonObj).filter(ele => Array.isArray(jsonObj[ele]) === false);
  let allLines = [];
  let flattened = [];
  let finalCSV = '';


//helper function: (kind of ) flatten nested objs
  var flattenObjs = function(obj) {

    flattened.push(obj);
    for(var key in obj) {
        var cur = obj[key];
        if(Array.isArray(cur) && cur.length > 0) {
            for(var i = 0; i < cur.length; i++) {
                var curEle = cur[i];
                if(typeof(curEle) === 'object' && curEle!== null){

                    flattenObjs(curEle) ;

                }
            }

        }
    }
    // return flattened;
}

flattenObjs(jsonObj);

allLines.push(keywords.join(',')); //add the header: keywords;

flattened.map(ele => {
  for(var key in ele) {
    if(!keywords.includes(key)) {
      delete ele[key];
    }
  }
  return ele;

});

flattened.forEach(ele => {
  var curValues = Object.values(ele);
  allLines.push(curValues.join(','));
})


finalCSV = allLines.join('\r\n');

return finalCSV;


}


// csv file to table format

// var csvToTableHtml = function(csvData) {
//   var rows = csvData.split('\r\n');
//   var html = '<table border = "1">';
//   rows.forEach((data, index) => {
//     html += '<tr>';
//     var value = data.split(',');
//     var len = value.length;
//     for(var i = 0; i < len; i++) {
//       html += "<td>" + value[i] + "</td>";
//     }
//     html += '</tr>';
//   });
//   html += '</table>';

//   return html;
// }


exports.jsonToCsv = jsonToCsv;
