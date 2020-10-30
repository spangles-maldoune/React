// 1. Что будет выведено в консоль?

// let a = { c: 'there' };
// let b = a;
// a.c = 'here';
// a.s = 'no';
// console.log(b); //{a.c = 'here', a.s = 'no'}


// 2. Написать функцию которая будет возвращать формат файла
// если формат отсутсвует то пустую строку.

// ‘https://www.googletagmanager.com/gtag/reddit/image-basket.png’ -> ‘png’

// ‘/some/thing/toParse.json’ -> ‘json’

// ‘not.so.easy/as/youd/expect.’ -> ‘’

// function returnFileFormat(filename) {
// 	return filename.split('.').pop();
// }
//
// const srt = 'https://www.googletagmanager.com/gtag/reddit/image-basket.png';
// const strTwo = '/some/thing/toParse.json';
// const notEasy = 'not.so.easy/as/youd/expect.';
//
// console.log(returnFileFormat(srt));


// 3. Написать функцию которая будет возвращать массив уникальных значений

// [1, 1, 2, 3, 4, 4] => [1, 2, 3, 4]
// [4, 4, 2, 3, 1, 1] => [1, 2, 3, 4]
// [3, 4, 5, 4, 5] => [3, 4, 5]

// function uniqueValue(val) {
//   return new Set(val);
// }
//
// const arr = [1, 1, 2, 3, 4, 4];
// const arrTwo = [3, 4, 5, 4, 5];
//
// console.log(uniqueValue(arrTwo));


// 4. Дан массив объектов, необходимо написать функцию которая объединит все объекты в один

// const array = [{ a: 1 }, { b: 2 }, { c: 3 }];

// function objMerge(array) {
// 	return Object.assign({}, ...array);
// }
//
// const array = [{ a: 1 }, { b: 2 }, { c: 3 }];
//
// console.log(objMerge(array));


// 5. Удалить из массива все не уникальные элементы

// [1, 2, 3, 1, 3] => [1, 3, 1, 3]

function deleteAllNonUniqueElem(array) {
	let counts = {};
	array.forEach(item => counts[item] ? counts[item]++ : counts[item] = 1);
	return array.filter(item => counts[item] === 1);
}

const arrThree = [1, 2, 3, 1, 3];
console.log(deleteAllNonUniqueElem(arrThree));