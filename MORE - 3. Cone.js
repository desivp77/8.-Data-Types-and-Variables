
// Translation results
// Напишете функция за изчисляване на обема на конуса и общата повърхност на дадена височина и радиус на основата.
// Входът идва като два числови аргумента. Първият елемент е радиусът на конуса, а вторият е неговата височина.
// Резултатът трябва да бъде отпечатан на конзолата на нов ред за всеки резултат. Резултатът трябва да бъде форматиран до четвъртата десетична запетая.

// V = (1/3)πr2h
// L = πrs = πr√(r2 + h2) lateral surface area
// B = πr2 base surface
// S = √(r2 + h2) Slant height of a cone
// A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2))



function fuckingCone(radius, height) {

    let pi = Math.PI;
    let volume = ((pi*(radius*radius))*height)/3;

    let slantHeight = Math.sqrt((radius*radius) + (height*height));
    let lateralSurface = pi*radius*slantHeight;
    let baseSurface = pi*(radius*radius);

    totalSurface = lateralSurface + baseSurface;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);

}

fuckingCone(3, 5);
fuckingCone(3.3, 7.8);