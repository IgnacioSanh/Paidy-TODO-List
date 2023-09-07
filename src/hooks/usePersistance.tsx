import {useMMKV} from 'react-native-mmkv';

export default function usePersistance() {
  type Value = boolean | string | number;

  const mmkv = useMMKV();

  function setKey(key: string, value: Value): void {
    mmkv.set(key, value);
  }

  function getStringValue(key: string): string {
    return mmkv.getString(key);
  }

  function getBooleanValue(key: string): boolean {
    return mmkv.getBoolean(key);
  }

  function getNumberValue(key: string): number {
    return mmkv.getNumber(key);
  }

  return {setKey, getStringValue, getBooleanValue, getNumberValue};
}
