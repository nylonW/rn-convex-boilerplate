import React, { createContext, useEffect, useState } from "react";
import { getDeviceToken } from "react-native-device-info";

// Device token context provider

export const DeviceTokenContext = createContext({
  deviceToken: null as string | null,
  setDeviceToken: (deviceToken: string) => {}
});

function DeviceTokenProvider({ children }: { children: React.ReactNode }) {
  const [deviceToken, setDeviceToken] = useState<string | null>(null);
  
  useEffect(() => {
    getDeviceToken().then(setDeviceToken);
  }, []);
  
  return React.createElement(DeviceTokenContext.Provider, {
    value: { deviceToken, setDeviceToken }
  }, children);
}

export default DeviceTokenProvider;