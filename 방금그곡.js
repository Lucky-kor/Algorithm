function solution(m, musicinfos) {
  var answer = '';
  let result = [];
  let checkStr = m
    .replace(/(A#)/g, 'a')
    .replace(/(B#)/g, 'b')
    .replace(/(C#)/g, 'c')
    .replace(/(D#)/g, 'd')
    .replace(/(E#)/g, 'e')
    .replace(/(F#)/g, 'f')
    .replace(/(G#)/g, 'g')
  for (let i = 0; i < musicinfos.length; i++) {
    const arr = musicinfos[i].split(',');
    let [time1, time2, name, code] = arr;
    const time = timeConveter(time1, time2);
    const _code = code
    .replace(/(A#)/g, 'a')
    .replace(/(B#)/g, 'b')
    .replace(/(C#)/g, 'c')
    .replace(/(D#)/g, 'd')
    .replace(/(E#)/g, 'e')
    .replace(/(F#)/g, 'f')
    .replace(/(G#)/g, 'g')
    let str = '';
    for(let j = 0; j < Math.ceil(time / _code.length); j++) str = str + _code;
    str = str.slice(0,time)
    if (str.includes(checkStr)) {
      result.push([name,time])
    }
  }
  let count = 0;
  for(let i = 0; i < result.length; i++) {
    if(count < result[i][1]) {
      count = result[i][1];
      answer = result[i][0];
    }
  }
  return answer === '' ? '(None)' : answer;
  // return answer;
}
const timeConveter = (start, end) => {
  end = end.split(':');
  start = start.split(':');
  end = end.map((data) => Number(data));
  start = start.map((data) => Number(data));
  let result = 0;
  let min = end[1] - start[1];
  let clock = (end[0] - start[0]) * 60;
  return min + clock;
};

// const m = 'CC#BCC#BCC#BCC#B';
// const music = ['03:00,03:30,FOO,CC#B', '04:00,04:09,BAR,CC#BCC#BCC#B'];
const m = 'ABC';
const music = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:14,WORLD,ABCDEF"];
let result = solution(m, music);
console.log(result);
