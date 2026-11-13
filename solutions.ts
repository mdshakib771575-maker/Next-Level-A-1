


const multiplyValue = (value: number, multiplier?: number): number => {
    if (typeof multiplier === "number") {
        return value * multiplier;
    } else {

        return value * 2
    }
}



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




const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};




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




class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}






const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};



