export enum STORAGE_KEY {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  USER_INFO = 'USER_INFO',
}

export const setStorageItem = (key: STORAGE_KEY, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: STORAGE_KEY) => {
  return JSON.parse(localStorage.getItem(key) || 'null');
};

export const removeStorageItem = (key: STORAGE_KEY) => {
  return localStorage.removeItem(key);
};
