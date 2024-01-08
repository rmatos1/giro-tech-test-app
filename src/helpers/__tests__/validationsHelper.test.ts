import { validateEmail, validatePassword } from '..';

describe('validationsHelper.ts > validateEmail', () => {
  test('should return the expected values', () => {
    const isValid1 = validateEmail('test');

    expect(isValid1).toBe(false);

    const isValid2 = validateEmail('test@test.com');

    expect(isValid2).toBe(true);
  });
});

describe('validationsHelper.ts > validatePassword', () => {
  test('should return the expected values', () => {
    const isValid1 = validatePassword('test');

    expect(isValid1).toBe(false);

    const isValid2 = validatePassword('123456');

    expect(isValid2).toBe(true);
  });
});