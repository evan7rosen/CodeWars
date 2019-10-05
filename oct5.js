function buildTheWall(array) {
  const star = "*";
  console.log(star.repeat(array[0].length + 2));
  array.map(string => console.log("*" + string + "*"));
  console.log(star.repeat(array[0].length + 2));
  return "covfefe";
}

buildTheWall(["whats", "up-my", "dudes"]);

function addBorder(matrix) {
  const wall = "*".repeat(matrix[0].length);
  matrix.unshift(wall);
  matrix.push(wall);
  matrix.map(item => console.log("*" + item + "*"));
}

addBorder(["abc", "def"]);
