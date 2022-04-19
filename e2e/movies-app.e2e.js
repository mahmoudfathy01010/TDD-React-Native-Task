describe('Showing Movies', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should all showing Movies', async () => {
    await expect(element(by.label('First Movie'))).toBeVisible();
  });
});
