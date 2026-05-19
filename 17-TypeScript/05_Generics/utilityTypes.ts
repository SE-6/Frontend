type User = {
  id: number;
  name: string;
  email: string;
};

function updateUser(id: number, newData: Partial<User>) {
  console.log('Updating:', newData);
}

updateUser(1, { name: 'Alice' });
updateUser(2, { name: 'Something', email: 'someone@mail.com' });

type Settings = {
  darkMode?: boolean;
  language?: string;
};

function initSettings(config: Required<Settings>) {
  console.log('Darkmode:', config.darkMode, 'Language:', config.language);
}

initSettings({ darkMode: true, language: 'en' });
// initSettings({ darkMode: false });

type ToDo = {
  title: string;
  done: boolean;
};

const todo: Readonly<ToDo> = { title: 'Learn TypeScript', done: false };

// todo.title = 'Something else';
