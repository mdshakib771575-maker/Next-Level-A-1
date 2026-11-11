
// problem 1
const multiplyValue = (value: number, multiplier?: number): number => {
    if (typeof multiplier === "number") {
        return value * multiplier;
    } else {

        return value * 2
    }
}

// console.log(multiplyValue(5));


// problem 2
type Value = number | string | boolean
const processInput = (value: Value): number | string => {

    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } else if (typeof value === "boolean") {
        if (value === true) {
            return "Active"
        } else {
            return "Inactive"
        }
    } else {
        return value * 10
    }

}

console.log(processInput(true));




const formatCoordinate = (coordinate: readonly [number, number, string]):string => {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}


// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));