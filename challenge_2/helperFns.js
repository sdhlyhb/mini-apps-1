

var jsonToCsv = function(jsonObj, filteredContent) {
  var keywords = Object.keys(jsonObj).filter(ele => Array.isArray(jsonObj[ele]) === false);
  let allLines = [];
  let flattened = [];
  let finalCSV = '';
  var id = 0;
  var filteredContent = '' || filteredContent;


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



flattened.map(ele => {
  for(var key in ele) {
    if(!keywords.includes(key)) {
      delete ele[key];
    }
  }
  return ele;

});

flattened.forEach(ele => {
  id++;

  var curValues = Object.values(ele);

  allLines.push(id + ',' + curValues.join(',') );
})

if(!filteredContent.length) {
  var filtered = allLines;
} else {
  filtered = allLines.filter(line => line.includes(filteredContent) === false);
}

filtered.unshift(['ID'].concat(keywords).join(',')); //add the header: keywords;

finalCSV = filtered.join('\r\n');

return finalCSV;


}

exports.jsonToCsv = jsonToCsv;


















