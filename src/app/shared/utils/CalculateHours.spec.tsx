import { CalculateHours } from './CalculateHours';

describe('test of calculate date to hours', () => {
  it('testing of 3600 seconds to hours', () => {
    expect(CalculateHours(3600)).toBe('00:01:00:00');
  });

  it('testing of 86400 seconds to one day', () => {
    expect(CalculateHours(86400)).toBe('01:00:00:00');
  });

  it('testing of 3600 seconds not is one day', () => {
    expect(CalculateHours(3600)).not.toBe('01:00:00:00');
  });
});
