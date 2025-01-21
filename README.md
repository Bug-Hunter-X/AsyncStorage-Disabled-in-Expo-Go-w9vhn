# AsyncStorage Issue in Expo Go

This repository demonstrates a common issue encountered when using AsyncStorage within an Expo managed workflow and provides a solution.

**Problem:** AsyncStorage is disabled by default in Expo Go.  Attempts to use AsyncStorage will result in the error: "AsyncStorage has been disabled in Expo Go."

**Solution:** Utilize the `expo-secure-store` or `MMKVStorage` libraries as alternatives, offering secure and performant data storage.  This repository showcases how to replace AsyncStorage effectively.

To run this example:
1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install dependencies.
4. Start the development server with `expo start`. 