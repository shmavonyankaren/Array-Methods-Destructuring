function change(arr) {
	return arr.filter(val => (typeof val === "number" &&  isNaN(val) !== true));
}

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

console.log(change(arr));