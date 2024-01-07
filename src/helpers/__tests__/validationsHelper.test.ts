import { validateEmail } from '..';

describe('validationsHelper.ts > validateEmail', () => {
  test('should return the expected values', () => {
    const isValid1 = validateEmail('test');

    expect(isValid1).toBe(false);

    const isValid2 = validateEmail('test@test.com');

    expect(isValid2).toBe(true);
  });
});