function solution(s) {
  /*
  문자열을 잘랐을때 가장 짧게 나오는 상황의 문자열의 길이를 리턴하는 문제
  전체 문자열의 길이 / 2만큼을 모두 순회하여,
  자른 문자열중 낮을 숫자의 길이를 리턴하는식으로 먼저 문제풀이
  
  문자열의 길이는 1이상 1000 이하, 위 순서대로면 500번은 리턴하게 되어있습니다.
  시간복잡도 매우 별로,
  다른 풀이방법 필요할듯합니다
  
  입출력 예시 5번째를 본다면 문자열을 제일 앞부터 잘라야 함
  하나하나 비교하는 방법 이외에는 불가능합니다.
  앞열부터 숫자만큼 잘라서 전체 길이 비교 필요
  */
  //문자열 길이 1인 경우
  if (s.length === 1) return 1;
  let strings = [];
  let maxLength = Math.floor(s.length / 2);

  //첫번째 반복문은 압축할 문자열 길이 1부터 시작 ~ 문자열 길이 / 2
  for (let i = 1; i <= maxLength; i++) {
    const string = comparedString(s, i);
    strings.push(string.length);
  }
  return Math.min(...strings);
}

const comparedString = (str, len) => {
  let cnt = 1;
  let string = '';
  for (let j = 0; j < str.length; j += len) {
    const current = str.substr(j, len);
    const next = str.substr(j + len, len);
    if (current === next) {
      cnt++;
    } else {
      string = cnt > 1 ? string + cnt + current : string + current;
      cnt = 1;
    }
  }
  return string;
};

const string = 'ababcdcdababcdcd';
const result = solution(string);
console.log(result);
