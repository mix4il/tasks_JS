const classNames = ['link', 'body', 'link', 'link', 'head','div', 'header', 'div', 'div', 'div'];


function getCLassNames(classNames) {
    const classMap = {};

    classNames.forEach(function(className) {
        classMap[className] = classMap[className] + 1 || 1;
    })

    const arrayMap = [];

    for(const [key , value] of Object.entries(classMap)) {
        arrayMap.push([key, value]);
    }

    arrayMap.sort((a, b) => {
        return b[1] - a[1];
    });

    return arrayMap.map((selector) =>  selector[0]);

}

console.log(getCLassNames(classNames));