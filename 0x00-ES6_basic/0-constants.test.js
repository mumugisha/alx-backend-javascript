import { taskFirst, taskNext } from './0-constants';

describe('Task constants tests', () => {
  test('taskFirst returns correct string', () => {
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  test('taskNext returns correct string', () => {
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});

