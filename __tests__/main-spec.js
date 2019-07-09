const createMultiplyTable = require('../main');
/*
1.
given i hava two number:2,4

when i should create a multiplyTable 

then  i should  create Multiply table such as 
2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16

2.
given i hava two number:0,3

when i should create a multiplyTable 

then  i should  get null

*/
it ('should print correct multiply table', () => {
    expect(createMultiplyTable(2, 4)).toBe('2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12  4*4=16  ');
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(0, 3)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(1, 0)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(1, 1001)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(1001, 1)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(1001, 1002)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(-2, -1)).toBe(null);
});

it ('should print correct multiply table', () => {
    expect(createMultiplyTable(3, 2)).toBe(null);
});