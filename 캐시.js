function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  var answer = 0;
  let arr = [];
  for (let i = 0; i < cities.length; i++) {
    const str = cities[i].toLowerCase();
    const idx = arr.indexOf(str);
    if (idx !== -1) {
      //배열안에 해당 데이터가 있을때
      answer++;
      let frontArr = arr.slice(0, idx);
      let backArr = arr.slice(idx + 1);
      arr = [...frontArr, ...backArr, str];
    } else {
      //배열내에 해당 데이터가 없을때
      if (arr.length >= cacheSize) {
        //캐시가 가득 찼을때
        answer = answer + 5;
        let tempArr = arr.slice(1);
        arr = [...tempArr, str];
      } else {
        //캐시가 가득 차있지 않을때
        answer = answer + 5;
        arr.push(str);
      }
    }
  }
  return answer;
}
