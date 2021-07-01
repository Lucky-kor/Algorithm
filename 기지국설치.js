/*
단순 길이만 비교해서 풀이해봤지만, 단절된 구간때문에 정답이 나오질 않음,
각각의 남는 길이를 찾아 배열에 넣어서,
해당 길이를 나눈 값을 올림해서 모두 더한값을 리턴하면 될듯

효율성 체크 모두 통과못함
로직 수정 필요

 */
function solution(n, stations, w) {
  var answer = 0;
  // let area = n;
  let index = 1;
  let cut = (w*2)+1;

  for(let i = 0; i < stations.length; i++) {
    const area = stations[i] - index - w;
    answer = answer + Math.ceil(area / cut);
    index = stations[i]+w+1;
  }
  if(stations[stations.length -1] + w < n) {
    const area = n - (stations[stations.length -1] + w);
    console.log('area : '+ area)
    answer = answer + Math.ceil(area / cut);
  }
  return answer;
  // const arr = new Array(n).fill(false);
  // for(let i = 0; i < stations.length; i++) {
  //   if(stations[i] === 0) {
  //     for(let j = 0; j < w+1; j++) {
  //       arr[j] = true;
  //     }
  //   }else if(stations[i] === 0){
  //     for(let j = area.length-1; j > n - w - 2; j-- ){
  //       arr[j] = true;
  //     }
  //   }else{
  //     for(let j = stations[i]-w-1; j < stations[i]+w; j++) {
  //       arr[j] = true;
  //     }
  //   }
  // }
  // let count = 0;
  // let result = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] === false) count++;
  //   else{
  //     result = result+Math.ceil(count / cut);
  //     count = 0;
  //   }
  // }
  // if(count !== 0) { //마지막 남는부분 체크
  //   result = result+Math.ceil(count / cut);
  // }
  // return result;
}
const n = 16;
const s = [9]
const w = 2;
const result = solution(n,s,w);
console.log('result')
console.log(result);