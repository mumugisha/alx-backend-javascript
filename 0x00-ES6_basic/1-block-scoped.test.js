import { taskBlock } from './1-block-scoped';

describe('taskBlock', () => {
  test('should return [false, true] when passed false', () => {
    expect(taskBlock(false)).toEqual([false, true]);
  });

  test('should return [true, false] when passed true', () => {
    expect(taskBlock(true)).toEqual([true, false]);
  });
});
