const LIGHT_DARK_SWITCHING_TIME = 18;

export function determineLightMode() {
  const hour = new Date().getHours();
  if (hour < LIGHT_DARK_SWITCHING_TIME) return true;
  else {
    return false;
  }
}
