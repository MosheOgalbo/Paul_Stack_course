function detectCollision1(objects, point) {
    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        if (
            point.x >= object.x &&
            point.x <= object.x + object.width &&
            point.y >= object.y &&
            point.y <= object.y + object.height
        )
            return object;
    }
}

function detectCollision2(objects, point) {

    for (let object of objects) {
        const {x, y, width, height} = object
        const{ x:px, y:py} = point
        if (px >= x && py >= y && px <= x+width && py <= y+height) {return object}
        }
}

const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
];


//console.log(myObjects)
console.log(detectCollision1(myObjects, { x: 20, y: 20 }));
console.log(detectCollision2(myObjects, { x: 20, y: 20 }));