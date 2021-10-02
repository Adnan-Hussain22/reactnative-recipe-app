import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tokens, User } from "src/typings/entities";

export enum StorageKeys {
  TOKEN = "TOKEN",
  CURRENT_USER = "CURRENT_USER",
}

async function GetStorage<D = unknown>(key: StorageKeys): Promise<D | null> {
  const item = await AsyncStorage.getItem(`@recipeApp_${key}`);
  return item ? JSON.parse(item) : null;
}

async function SaveStorage<D = unknown>(key: StorageKeys, data: D) {
  await AsyncStorage.setItem(`@recipeApp_${key}`, JSON.stringify(data));
}

export class StorageService {
  static async getToken() {
    return await GetStorage<Tokens>(StorageKeys.TOKEN);
  }

  static async saveToken(data: Tokens) {
    await SaveStorage<Tokens>(StorageKeys.TOKEN, data);
  }

  static async getUser() {
    return await GetStorage<User>(StorageKeys.CURRENT_USER);
  }

  static async saveUser(data: User) {
    await SaveStorage<User>(StorageKeys.CURRENT_USER, data);
  }
}
