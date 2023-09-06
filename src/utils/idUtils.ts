import uuid from 'react-native-uuid';

/*
  This util was only to follow dependency injection, in case we want to change the
  library used to generate id's
*/
export function generateID(): string {
  return uuid.v4().toString();
}
