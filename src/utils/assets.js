/**
 * Menggabungkan base path (misalnya subfolder GitHub Pages) dengan path aset di folder public.
 * @param {string} path - Path aset, contoh: "/images/teenmovie-picks.jpg"
 * @returns {string} - Full path dengan base URL, contoh: "/alfinafrizamaulana.github.io/images/teenmovie-picks.jpg"
 */
export function getAssetPath(path) {
  if (!path) return "";
  // Jika path adalah URL eksternal atau data URL, biarkan apa adanya
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
