import {ActionType, div, mult, numberReducer, sub, sum} from "./tasks"

const a: number = 10
const b: number = 20

test('sum of two numbers', () => {
    //1. Тестовые данные:
    const a: number = 10
    const b: number = 20
    //2. Выполнение тестируемого кода:
    const result = sum(a, b)
    //3. Проверка результата:
    expect(result).toBe(30)
})

test('sub of two numbers', () => {
    expect(sub(a, b)).toBe(-10)
})

test('mult of two numbers', () => {
    expect(mult(a, b)).toBe(200)
})

test('div of two numbers', () => {
    expect(div(a, b)).toBe(0.5)
})

test('sum with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType =
        {type: 'SUM',
        num: 300}

    const result = numberReducer(salary, action)

    expect(result).toBe(1300)
})

test('sub with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType =
        {type: 'SUB',
            num: 300}

    const result = numberReducer(salary, action)

    expect(result).toBe(700)
})

test('mult with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType =
        {type: 'MULT',
            num: 3}

    const result = numberReducer(salary, action)

    expect(result).toBe(3000)
})

test('div with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType =
        {type: 'DIV',
            num: 2}

    const result = numberReducer(salary, action)

    expect(result).toBe(500)
})