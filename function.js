// ALL FUNCTION LOGIC!

export function LEVER() {
    return {
        component: "lever",
    };
}

export function COMP(inputLeft, inputRight, subtract = false) {
    return {
        component: "comparator",
        input: [inputLeft, inputRight],
        subtract: subtract == false ? false : true,
    };
}

export function TORCH() {
    return {
        component: "torch",
    };
}
