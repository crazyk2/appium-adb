import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';
import ADB from '../lib/adb.js';

const should = chai.should();
chai.use(chaiAsPromised);

describe('ADB', () => {
  it('should correctly return adb if present', async () => {
    let adb = new ADB();
    let temp = await adb.createADB();
    should.exist(temp.path);
  });
  it('should correctly return adb from path when ANDROID_HOME is not set', async () => {
    let opts = {sdkRoot: ''};
    let adb = new ADB(opts);
    let temp = await adb.createADB(opts);
    should.exist(temp.path);
  });
  it.skip('should error out if binary not persent', async () => {
    // TODO write a negative test
  });
  it('should initialize aapt', async () => {
    let adb = new ADB();
    await adb.initAapt();
    adb.binaries.aapt.should.contain('aapt');
  });
  it('should initialize zipAlign', async () => {
    let adb = new ADB();
    await adb.initZipAlign();
    adb.binaries.zipalign.should.contain('zipalign');
  });
});

describe.skip('ADB To be implemented methods', () => {

  //it('processFromManifest', async () => { });
  //it('packageAndLaunchActivityFromManifest', async () => { });
  it('processExists', async () => { });
  //it('compileManifest', async () => { });
  //it('insertManifest', async () => { });
  it('signWithDefaultCert', async () => { });
  it('signWithCustomCert', async () => { });
  it('sign', async () => { });
  it('zipAlignApk', async () => { });
  it('checkApkCert', async () => { });
  it('checkCustomApkCert', async () => { });
  it('getKeystoreMd5', async () => { });
  it('checkApkKeystoreMatch', async () => { });
//  it('getDevicesWithRetry', async () => { });
//  it('getApiLevel', async () => { });
  it('getEmulatorPort', async () => { });
  it('rimraf', async () => { });
  it('push', async () => { });
  it('pull', async () => { });
  it('getPortFromEmulatorString', async () => { });
  it('getRunningAVD', async () => { });
  it('getRunningAVDWithRetry', async () => { });
  it('killAllEmulators', async () => { });
  it('launchAVD', async () => { });
  it('waitForEmulatorReady', async () => { });
//  it('getConnectedDevices', async () => { });
  it('getConnectedEmulators', async () => { });
  it('forwardPort', async () => { });
  it('forwardAbstractPort', async () => { });
//  it('isDeviceConnected', async () => { });
  it('ping', async () => { });
  it('setDeviceId', async () => { });
  it('setEmulatorPort', async () => { });
  it('waitForDevice', async () => { });
//  it('restartAdb', async () => { });
  it('restart', async () => { });
  it('stopLogcatstartLogcat', async () => { });
  it('getLogcatLogs', async () => { });
  it('getPIDsByName', async () => { });
  it('killProcessesByName', async () => { });
  it('killProcessByPID', async () => { });
  it('startApp', async () => { });
  //it('isValidClass', async () => { });
  it('broadcastProcessEnd', async () => { });
  it('broadcast', async () => { });
  it('endAndroidCoverage', async () => { });
  it('androidCoverage', async () => { });
  it('getFocusedPackageAndActivity', async () => { });
  it('waitForActivityOrNot', async () => { });
  it('waitForActivity', async () => { });
  it('waitForNotActivity', async () => { });
  it('uninstallApk', async () => { });
  it('installRemote', async () => { });
  it('install', async () => { });
  it('mkdir', async () => { });
  it('instrument', async () => { });
  it('checkAndSignApk', async () => { });
  it('forceStop', async () => { });
  it('clear', async () => { });
  it('stopAndClear', async () => { });
  it('isAppInstalled', async () => { });
  it('lock', async () => { });
  it('back', async () => { });
  it('goToHome', async () => { });
  it('keyevent', async () => { });
  it('isScreenLocked', async () => { });
  it('isSoftKeyboardPresent', async () => { });
  it('sendTelnetCommand', async () => { });
  it('isEmulator', async () => { });
  it('isAirplaneModeOn', async () => { });
  it('setAirplaneMode', async () => { });
  it('broadcastAirplaneMode', async () => { });
  it('isWifiOn', async () => { });
  it('setWifi', async () => { });
  it('isDataOn', async () => { });
  it('setData', async () => { });
  it('setWifiAndData', async () => { });
  //it('availableIMEs', async () => { });
//  it('defaultIME', async () => { });
//  it('enableIME', async () => { });
//  it('disableIME', async () => { });
  it('setIME', async () => { });
  //it('hasInternetPermissionFromManifest', async () => { });
  it('reboot', async () => { });
  it('getAdbServerPort', async () => { });
});