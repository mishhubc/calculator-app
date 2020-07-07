let defaultResult = 0;

let currentResult = defaultResult;
let logEntrries = [];
//Gets input from input field
const getUserInputNumber = () => {
	return parseInt(userInput.value);
};

//generates and writes calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); //from vendor file
};

let mySuperNumber = null;
const mySuper = !mySuperNumber ? 'we did not find' : 'we find';

const writeToLog = (
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) => {
	const logEntery = {
		operation: operationIdentifier,
		prevResult,
		number: operationNumber,
		result: newResult,
	};

	logEntrries.push(logEntery);
	console.log(logEntrries);
};

const calculateResult = (calculationType) => {
	const enteredNumber = getUserInputNumber();
	const initialResult = currentResult;
	let mathOperator;

	switch (calculationType) {
		case 'add':
			currentResult += enteredNumber;
			mathOperator = '+';
			break;
		case 'substract':
			currentResult -= enteredNumber;
			mathOperator = '-';
			break;
		case 'multiply':
			currentResult *= enteredNumber;
			mathOperator = '*';
			break;
		case 'divide':
			currentResult /= enteredNumber;
			mathOperator = '/';
			break;
	}
	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
};

const add = () => {
	calculateResult('add');
};
const substract = () => {
	calculateResult('substract');
};
const multiply = () => {
	calculateResult('multiply');
};
const divide = () => {
	calculateResult('divide');
};

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
