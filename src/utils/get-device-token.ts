import DeviceInfo from 'react-native-device-info';
import * as Keychain from 'react-native-keychain';

const DEVICE_TOKEN_KEY = 'deviceToken';

async function setSecureValue(key: string, value: string): Promise<void> {
  await Keychain.setGenericPassword(key, value, { service: key, storage: Keychain.STORAGE_TYPE.AES_GCM_NO_AUTH });
}

async function getSecureValue(key: string): Promise<string | null> {
  try {
    const result = await Keychain.getGenericPassword({ service: key });
    return result ? result.password : null;
  } catch {
    return null;
  }
}

async function removeSecureValue(key: string): Promise<void> {
  await Keychain.resetGenericPassword({ service: key });
}

async function getDeviceToken(): Promise<string> {
  const stored = await getSecureValue(DEVICE_TOKEN_KEY);
  if (stored) return stored;

  const deviceToken = await DeviceInfo.getUniqueId();
  await setSecureValue(DEVICE_TOKEN_KEY, deviceToken);
  return deviceToken;
}

async function clearDeviceToken(): Promise<void> {
  await removeSecureValue(DEVICE_TOKEN_KEY);
}

export { clearDeviceToken, getDeviceToken };
