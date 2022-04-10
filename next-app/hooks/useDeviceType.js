import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(null);
  useEffect(() => {
    const ua = navigator?.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setDeviceType("tablet");
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setDeviceType("mobile");
    }
    setDeviceType("desktop");
  });
  return deviceType;
};

export default useDeviceType;
