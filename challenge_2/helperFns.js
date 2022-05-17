/*
firstName,lastName,county,city,role,sales
Joshie,Wyattson,San Mateo,San Mateo,Broker,1000000
Beth Jr.,Johnson,San Mateo,Pacifica,Manager,2900000
Smitty,Won,San Mateo,Redwood City,Sales Person,4800000
Allen,Price,San Mateo,Burlingame,Sales Person,2500000
Beth,Johnson,San Francisco,San Francisco,Broker/Sales Person,7500000

*/



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

exports.jsonToCsv = jsonToCsv;