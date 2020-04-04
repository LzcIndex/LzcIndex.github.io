var translateTime = function(strTime){
  let timeArr = strTime.split(':')
 return timeArr[0]*60 + timeArr[1]*1

}

module.exports = {
  translateTime
}