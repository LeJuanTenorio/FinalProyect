export enum PersistanceKeys {
    "STORE" = "STORE",
    "SERIES" = "SERIES"
  }
  
  const get = <T>({
    key,
    defaultValue,
  }: {
    key: PersistanceKeys;
    defaultValue: T;
  }): T => {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  };
  


  const set = ({
    key,
    value,
    session = false,
  }: {
    key: PersistanceKeys;
    value: unknown;
    session?: boolean;
  }) => {
    const storage = session ? sessionStorage : localStorage;
    const parsed = JSON.stringify(value);
    storage.setItem(key, parsed);
  };

  const getUserFromStorage = async () => {
    try{const getUserFromStorage = localStorage.getItem("STORE") || sessionStorage.getItem("STORE");
    
    if (getUserFromStorage) {
        const parse = JSON.parse(getUserFromStorage);
        const userFound = parse.user;
        console.log("GOTTTTTTTTTTTTTT" + userFound);
    } else {
        console.log("No data found in storage");
    }} 
    catch{}
    } 
  
  export default {
    get,
    set,
    getUserFromStorage
  };

  