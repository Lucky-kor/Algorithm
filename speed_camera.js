  /*
    탐욕법 문제
    자동차의 진입시점을 기준으로 정렬
    처음 카메라 위치를 첫차의 출차지점으로 설정
    반복문을 돌면서 현재 카메라의 위치보다 진입시점이 빠를시 카메라 설치할 필요가 없습니다.
    하지만 해당 조건에서 한번더 조건문으로 진출시점이 카메라보다 빠르다면 카메라의 위치를 변경해야 합니다.

    이후 카메라의 위치보다 늦게 진입하는 차가 등장했을때, 추가로 카메라를 설치해줍니다.
    카메라의 위치는 새로 진입한 차량이 출차하는 시점으로 설정합니다.
 */

function solution(routes) {
  var answer = 1;
  routers.sort((a,b) => a[0] - b[0]);
  let checkPoint = routers[0][1];
  for(let i = 0; i < routers.length-1; i++) {
    if(checkPoint >= routers[i+1][0]) {
      if(checkPoint > routers[i+1][1]) {
        checkPoint = routers[i+1][1]
      }
    }else{
      answer++;
      checkPoint = routers[i+1][1]
    }
  }
  return answer;
}

const routers = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]]
const result = solution(routers);
console.log(result)

// print(solution([[-2,-1], [1,2],[-3,0]])) #2
// print(solution([[0,0],])) #1
// print(solution([[0,1], [0,1], [1,2]])) #1
// print(solution([[0,1], [2,3], [4,5], [6,7]])) #4
// print(solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])) #2
// print(solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]])) #2
// print(solution([[-20,15], [-20,-15], [-14,-5], [-18,-13], [-5,-3]])) #2