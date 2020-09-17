// write your own test cases
import { flipped } from './flipArgs';

  describe('Check if args are being flipped', () => {
    test('test 1,2,3,4', () => {
        let test = [1,2,3,4]
        let result = [4,3,2,1];
      expect(flipped(test)).toStrictEqual(result);
    });

    test('test 0', () => {
        let test = [0]
        let result = [0];
      expect(flipped(test)).toStrictEqual(result);
    });

    test('test empty array ', () => {
        let test = []
        let result = [];
      expect(flipped(test)).toStrictEqual(result);
    });

    test('null and undefined edge cases ', () => {
      expect(flipped(null)).toStrictEqual([]);
      expect(flipped(undefined)).toStrictEqual([]);
    });
  });