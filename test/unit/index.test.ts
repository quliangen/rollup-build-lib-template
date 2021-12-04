import { foo } from '../../src/index';

describe('BrowserBackend', () => {
  describe('sendEvent()', () => {
    it('should use NoopTransport', () => {
      const result = foo()
      expect(result).toBe(undefined);
    });
  });
});
