
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



// problem 3

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}





// problem 4

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};


console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2, 3], [3, 4], [5]));

// problem 5

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (
    courses: Course[],
    minStudents: number
): Course[] => {

    return courses.filter((course) => {
        return (
            course.isPublished === true &&
            course.students >= minStudents
        );
    });
};

const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

const result = getPopularCourses(courses, 80);

console.log(result);

// problem 6

const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map((item) => item[key]);
};

const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];



