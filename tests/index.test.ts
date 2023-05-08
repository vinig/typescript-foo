import { assert } from "console";
import { foo } from '../src/index'

describe('Test foo', () => {
  test('hello foo is returned', () => {
    expect(foo()).toBe('Hello Foo!');
  });
});