import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const filteredContacts = contacts?.filter(() => Math.random() >= 0.5);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(filteredContacts, null, 2),
      'utf8',
    );
  } catch (err) {
    console.log('Error while getting contacts: ', err);
  }
};

await thanos();
