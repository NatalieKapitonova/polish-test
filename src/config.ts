export const sha = import.meta.env.VITE_GIT_SHA || "unset_sha";
export const version = import.meta.env.VITE_VERSION || "unset_version";
export const title = "polish-test";
export const basename = import.meta.env.VITE_BASE || "";
export const ghUrl = "https://github.com/NatalieKapitonova/polish-test";

export const github = {
  sha: `${ghUrl}/commit/${sha}`,
  version: `${ghUrl}/releases/tag/${version}`,
  url: ghUrl,
};
