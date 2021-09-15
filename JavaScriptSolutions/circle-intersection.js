// function that takes the center of co-ordinates and radius of two circles as input and returns the intersection points of the two circles.
// Language: javascript
// Path: JavaScriptSolutions\circle-intersection.js
function getIntersectionPoints(center1, radius1, center2, radius2) {
    var a = (center2.x - center1.x) * (center2.x - center1.x) + (center2.y - center1.y) * (center2.y - center1.y) - (radius1 + radius2) * (radius1 + radius2);
    var b = 2 * ((center2.x - center1.x) * (center1.x - center1.x) + (center2.y - center1.y) * (center1.y - center1.y));
    var c = (center1.x - center1.x) * (center1.x - center1.x) + (center1.y - center1.y) * (center1.y - center1.y) - (radius1 * radius1);
    var delta = b * b - 4 * a * c;
    var x1, x2, y1, y2;
    if (delta < 0) {
        return null;
    }
    else if (delta == 0) {
        x1 = (-b) / (2 * a);
        y1 = (center1.y + center2.y) / 2;
        return [{ x: x1, y: y1 }];
    }
    else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        y1 = (center1.y + center2.y) / 2;
        y2 = (center1.y + center2.y) / 2;
        return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    }
}


// takes the center co-ordinates and radius of two circles and gives output Yes. if the two circles intersect, No otherwise.
function isIntersecting(x1, y1, c1, x2, y2, c2) {
    var d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    if (d > c1 + c2) {
        return "NO";
    }
    else if (d == c1 + c2) {
        return "YES";
    }
    else {
        return "YES";
    }
}

console.log(isIntersecting(0, 0, 1, 0, 0, 2)); // Yes

console.log(isIntersecting(0, 0, 1, 4, 0, 2)); // NO
