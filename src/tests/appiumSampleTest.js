const { remote } = require('webdriverio');

(async () => {
  let driver;
  try {
    // Set capabilities for your mobile device
    const capabilities = {
      platformName: 'Android',
      deviceName: 'emulator-5554',
      app: '/path/to/your/app.apk', // Update this path to your actual .apk file
      automationName: 'UiAutomator2'
    };

    // Initialize the Appium driver
    driver = await remote({
      path: '/wd/hub',
      port: 4723,
      capabilities
    });

    // Example: Find an element by XPath
    const element = await driver.$('//android.widget.TextView[@text="Albums"]');
    await element.click();

    console.log('Test passed!');
  } catch (err) {
    console.error('Error during test execution:', err);
  } finally {
    if (driver) {
      await driver.deleteSession();
    }
  }
})();
