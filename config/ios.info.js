class IosInfo {
    static deviceName() {
        return 'iPad Air 4 2020'; // pass the device name
    }

    static platFormVersion() {
        return '15.1'; // pass the platform version
    }

    static appName() {
        return 'storage:filename=com.**.ipa'; // pass the bundleid or ipa name
    }
}

module.exports = IosInfo;
