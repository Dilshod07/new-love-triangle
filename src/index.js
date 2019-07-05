/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //  your implementation
  const length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let sled = preferences[i] - 1;
      if (sled == i) continue;
      let sled2 = preferences[sled] - 1;
      if (sled == sled2) continue;
      let sled3 = preferences[sled2] - 1;
      if (sled3 == sled2) continue;
      if (sled3 == i) {
          count++;
      }
   }
   return count / 3;
};
 
