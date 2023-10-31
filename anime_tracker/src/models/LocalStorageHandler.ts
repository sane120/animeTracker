export class LocalStorageHandler{
  static getLocalStorage = (storageKey: string) => {
    const localStorageObject = localStorage.getItem(storageKey);
    return localStorageObject ? JSON.parse(localStorageObject) : [];
  }

  static saveLocalStorage = (storageKey: string, storageValue: any) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
  };

}

