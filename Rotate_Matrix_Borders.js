function solution(rows, columns, queries) {
  let matrix = createMatrix(rows, columns);
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const [rotateMatrixs, min] = rotateMatrix(matrix, queries[i]);
    result.push(min);
    matrix = rotateMatrixs;
  }
  return result;
}
// const changeMatrix = (matrix, queries , arr) => {
//   console.log(arr)
//   for (let i = (queries[0]-1); i < queries[2]-(queries[0]-1); i++) {
//     if (i === (queries[0]-1) || i === queries[2]-(queries[0]-1)) {
//       for (let j = (queries[1]-1); j < queries[3]-(queries[1]-1); j++) {
//         matrix[i][j] = arr.unshift();
//       }
//     }
//     else{
//       matrix[i][0] = arr.unshift();
//       matrix[i][matrix[i].length-1] = arr.unshift();
//     }
//   }
//   return matrix
// };
// const createPartMatrix = (matrix, queries) => {
//   const rowLength = queries[2] - (queries[0] - 1);
//   const colLength = queries[3] - (queries[1] - 1);
//   const partMatrix = new Array(rowLength);
//   for (let r = queries[0] - 1; r < queries[2]; r++) {
//     partMatrix[r - (queries[0] - 1)] = new Array(colLength).fill(0);
//     for (let c = queries[1] - 1; c < queries[3]; c++) {
//       partMatrix[r - (queries[0] - 1)][c - (queries[1] - 1)] = matrix[r][c];
//     }
//   }
//   return partMatrix;
// };
const createMatrix = (rows, columns) => {
  const matrix = new Array(rows);
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(columns);
    for (let j = 0; j < matrix[i].length; j++) {
      num++;
      matrix[i][j] = num;
    }
  }
  return matrix;
};
const rotateMatrix = (matrix, queries) => {
  let [ys, xs, ye, xe] = queries
  let arr = [];
  let temp1 = matrix[ys-1][xs-1];
  for (let i = xs; i < xe; i++) {
    let temp2 = matrix[ys-1][i];
    matrix[ys-1][i] = temp1;
    temp1 = temp2;
    arr.push(matrix[ys-1][i]);
  }
  for (let i = ys; i < ye-1; i++) {
    let temp2 = matrix[i][xe-1];
    matrix[i][xe-1] = temp1;
    temp1 = temp2;
    arr.push(matrix[i][xe-1])
  }
  for (let i = xe-1; i >= xs-1; i--) {
    temp2 = matrix[ye-1][i];
    matrix[ye-1][i] = temp1;
    temp1 = temp2;
    arr.push(matrix[ye-1][i]);
  }
  for (let i = ye-2; i>= ys; i--) {
    temp2 = matrix[i][xs-1];
    matrix[i][xs-1] = temp1;
    temp1 = temp2;
    arr.push(matrix[i][xs-1]);
  }
  matrix[ys-1][xs-1] = temp1;
  arr.push(matrix[ys-1][xs-1]);
  return [matrix, Math.min(...arr)];
};

const result = solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);
console.log(result);
