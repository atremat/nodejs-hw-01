import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf8');
  } catch (err) {
    console.log('Error while removing contacts: ', err);
  }
};

await removeAllContacts();
