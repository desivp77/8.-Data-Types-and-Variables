
// Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.

// semi-perimeter / s = (a + b + c) / 2
// area of triangle / a = koren ot s*(s - a)*(s-b)*(s-c)


function fuckingTriangle(sideA, sideB, sideC) {
    let semiPerimeter = (sideA + sideB + sideC)/2;
    let triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter - sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideC));
    console.log(triangleArea);
}

fuckingTriangle(2, 3.5, 4);
fuckingTriangle(3, 5.5, 4);