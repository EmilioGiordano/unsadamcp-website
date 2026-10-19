// BASE_URL keeps a trailing slash only if the configured base has one; links append paths to it.
export const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
