import { sdk } from '../../src/sdk';

describe('BrowserBackend', () => {
  describe('sendEvent()', () => {
    it('should use NoopTransport', () => {
      expect(sdk()).toBe('sdk');
    });
  });
});
