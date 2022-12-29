const userAgentString = navigator.userAgent;

const userAgentContainsSafari = userAgentString.indexOf("Safari") > -1;
const userAgentContainsChrome = userAgentString.indexOf("Chrome") > -1;

export const isSafari = userAgentContainsSafari && !userAgentContainsChrome;
