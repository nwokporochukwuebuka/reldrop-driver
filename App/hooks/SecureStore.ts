import * as SecureStore from "expo-secure-store";

async function save(key: string, value: string): Promise<void> {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string): Promise<string | null | undefined> {
  return SecureStore.getItemAsync(key)
  .then(value => {
    return value; // Return the value
  })
  .catch(error => {
    return null; // Return null in case of error
  });
}

async function removeValueFor(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key);
}

export { save, getValueFor, removeValueFor };
