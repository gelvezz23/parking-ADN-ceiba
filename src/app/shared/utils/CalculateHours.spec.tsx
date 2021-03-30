import { CalculateHours } from './CalculateHours';

describe('test of calculate date to hours', () => {
  it('testing of 3600 seconds to hours', () => {
    const seconds = 3600;

    expect(CalculateHours(seconds)).toBe('00:01:00:00');
  });

  it('testing of 86400 seconds to one day', () => {
    const seconds = 86400;

    expect(CalculateHours(seconds)).toBe('01:00:00:00');
  });

  it('testing of 3600 seconds not is one day', () => {
    const seconds = 3600;

    expect(CalculateHours(seconds)).not.toBe('01:00:00:00');
  });
});
