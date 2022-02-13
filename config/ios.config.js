const {config} = require('./wdio.sauce.conf');
const IosInfo = require('./ios.info');


// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        orientation: 'PORTRAIT',
        automationName: 'XCUITest',
        deviceName: IosInfo.deviceName(),
        platformVersion: IosInfo.platFormVersion(),
        app: IosInfo.appName(),//use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
        newCommandTimeout: 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        language: 'en',
        locale: 'en',
        name: '',
        shouldTerminateApp: true,
    }
];

config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;
