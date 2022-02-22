const validateText = (input) => isNaN(input) && input.length > 2;
const validateNum = (input) => !isNaN(input * 1) && input < 898;
export { validateText, validateNum };
