Using `expo-secure-store`:

```javascript
import * as SecureStore from 'expo-secure-store';

async function storeData(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getData(key) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

// Example usage:
await storeData('myKey', 'myValue');
let retrievedValue = await getData('myKey');
console.log(retrievedValue); // Output: myValue
```

Using `MMKVStorage`:

```javascript
import MMKVStorage from 'react-native-mmkv-storage';

const storage = new MMKVStorage.Loader().initialize();

async function storeData(key, value) {
  await storage.setStringAsync(key, value);
}

async function getData(key) {
  return await storage.getStringAsync(key);
}

// Example Usage:
await storeData('myKey', 'myValue');
let retrievedValue = await getData('myKey');
console.log(retrievedValue); // Output: myValue
```