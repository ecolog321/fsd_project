import { getQueryParams } from "./addQueryParams";

describe('addQueryParams.test', () => {
  test('test with 1 params', () => {
    const params = getQueryParams({
        text:'value',
    })
    expect(params).toBe('?text=value')
  });
  test('test with some params', () => {
    const params = getQueryParams({
        text:'value',
        second:'2'
    })
    expect(params).toBe('?text=value&second=2')
  });
  test('test with undefined params', () => {
    const params = getQueryParams({
        text:'value',
        second:undefined,
    })
    expect(params).toBe('?text=value')
  });
});