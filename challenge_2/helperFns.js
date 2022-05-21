

var jsonToCsv = function(jsonObj) {
  var keywords = Object.keys(jsonObj).filter(ele => Array.isArray(jsonObj[ele]) === false);
  let allLines = [];
  let flattened = [];
  let finalCSV = '';
  var id = 0;


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

allLines.push(['ID'].concat(keywords).join(',')); //add the header: keywords;

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


finalCSV = allLines.join('\r\n');

return finalCSV;


}

exports.jsonToCsv = jsonToCsv;


















