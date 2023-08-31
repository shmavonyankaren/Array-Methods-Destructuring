function convert(string) {
	return string
           .split(" ")
           .map(val => {
           			return val.toUpperCase().split("").shift()
           })
           .join("");
}

console.log(convert("I don't know JS"));