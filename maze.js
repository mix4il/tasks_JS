const maze = [
    [1,1,1,0,0,0],
    [0,0,0,1,0,1],
    [0,1,0,0,0,1],
    [0,1,1,1,1,1],
    [0,0,0,0,0,0]
]

console.log(maze);

console.log(checkPath({x: 3, y:0}, {x: 5, y:5}))