const useIsMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Regular expressions to match mobile devices
  const mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

  return mobileRegex.test(userAgent.toLowerCase());
};

export default useIsMobile;
