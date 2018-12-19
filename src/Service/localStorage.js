const storage = global.localStorage;

export const getItem = key => {
  const item = storage.getItem(key);
  if (item === null) {
    return undefined
  }
  try {
    const json = JSON.parse(item)
    return json;
  } catch (e) {
    return undefined;
  }
}

export const setItem = (key, item) => {
  const string = JSON.stringify(item)
  storage.setItem(key, string);
}