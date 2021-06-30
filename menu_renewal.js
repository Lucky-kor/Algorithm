function solution(orders, course) {
  /*
  조합문제
  주어진 배열에서 겹치는 조합을 구한 후,
  해당 조합에서 course의 수만큼 배열마다 최대한 겹치는 수가 많은 조합만 리턴
  */
  // var answer = [];
  // return answer;
  let list = {};
  let result = [];
  
  const getCombination = (arr, n) => {  //일반적인 순열 알고리즘
    const result = [];
    if (n === 1) return arr.map((e) => [e]);
    arr.forEach((e, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombination(rest, n - 1);
      const attached = combinations.map((combi) => [e, ...combi]);
      result.push(...attached);
    });
    return result;
  };

  orders.map((data, idx, origin) => {
    const tempArr = data.split('').sort((a, b) => a - b); //해당 order배열내 데이터를 전부 배열로 나눠줍니다.
    for (let i = 2; i <= tempArr.length; i++) {   //반복문으로 2부터 배열내 모든 데이터의 길이까지 체크, 체크하는 데이터의 길이가 course에 포함되었을때 해당 조합을 구해서 list에 넣어줍니다.
      if (course.includes(i)) {
        const orderArr = getCombination(tempArr, i);
        orderArr.map((data, idx, origin) => {
          const key = data.sort().join('');   //여기서 sort()가 없을경우 XY !== YX가 되므로 꼭 정렬 필효
          list[key] = list[key] ? list[key] + 1 : 1;    //해당 key가 배열에 존재할시 +1 , 없을떄 1로 새로운값 넣기
        });
      }
    }
  });
  course.map((data) => {
    let curMax = 0;
    Object.keys(list).forEach((item, idx) => {    //list를 순회하며, 해당 길이의 데이터중 최대값을 구합니다.
      if (item.length === data) {
        if (curMax <= list[item] && list[item] >= 2) {
          curMax = list[item];
        }
      }
    });
    if(curMax !== 0) {    
      Object.keys(list).forEach((item, idx) => {
        if(item.length === data && list[item] === curMax) {
          result.push(item)
        }
      })
    }
    
  });
  return result.sort();
}
let arr = ["XYZ", "XWY", "WXA"]
let course = [2, 3, 4];
let result = solution(arr, course);
console.log(result);
