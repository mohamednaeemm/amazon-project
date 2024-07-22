import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('Basic Test');

if (formatCurrency(2095) === '20.95') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('Test 0 Case');

if (formatCurrency(0) === '0.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
    console.log('Passed');
} else {
    console.log('Failed');
}