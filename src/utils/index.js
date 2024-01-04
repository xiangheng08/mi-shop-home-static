const base = import.meta.env.BASE_URL;

export const withBase = (path) => {
  return (base + "/" + path).replace(/\/+/, "/");
};
