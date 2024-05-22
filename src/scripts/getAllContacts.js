import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    return contacts;
  } catch (err) {
    console.log('Error while reading file: ', err);
  }
};

console.log(await getAllContacts());
