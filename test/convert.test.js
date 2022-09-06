import convert from '../src/convert';

// roman number to integer.
// I, II, III, IV, V, VI, VII, VIII, IX, X, XIX, L, XL.

describe('convert tests', function () {
  it('should return correct integer number of a roman string of I', () => {
    expect(convert('I')).toBe(1);
  });

  it('should return correct integer number of a roman string of II', () => {
    expect(convert('II')).toBe(2);
  });
  
  it('should return correct integer number of a roman string of III', () => {
    expect(convert('III')).toBe(3);
  });

  it('should return correct integer number of a roman string of IV', () => {
    expect(convert('IV')).toBe(4);
  });

  it('should return correct integer number of a roman string of V', () => {
    expect(convert('V')).toBe(5);
  });

  it('should return correct integer number of a roman string of VI', () => {
    expect(convert('VI')).toBe(6);
  });

  it('should return correct integer number of a roman string of VII', () => {
    expect(convert('VII')).toBe(7);
  });

  it('should return correct integer number of a roman string of VIII', () => {
    expect(convert('VIII')).toBe(8);
  });

  it('should return correct integer number of a roman string of IX', () => {
    expect(convert('IX')).toBe(9);
  });

  it('should return correct integer number of a roman string of X', () => {
    expect(convert('X')).toBe(10);
  });

  it('should return correct integer number of a roman string of XIX', () => {
    expect(convert('XIX')).toBe(19);
  });

  it('should return correct integer number of a roman string of L', () => {
    expect(convert('L')).toBe(50);
  });

  it('should return correct integer number of a roman string of XL', () => {
    expect(convert('XL')).toBe(40);
  });
});