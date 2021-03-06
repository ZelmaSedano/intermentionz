import path from "path";
import { URL } from "url";

import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

// gets tasks based off sub?
export const getTasks = (sub) =>
  db.any(
    "SELECT tasks.* FROM tasks LEFT JOIN users on user_id=users.id WHERE sub=$<sub>",
    { sub },
  );

// adds tasks using sub & name
export const addTask = (sub, name) =>
  // insert into tasks the user_id where sub=sub
  // insert task name into that row's name column
  db.one(
    `INSERT INTO tasks(user_id, name)
      VALUES((SELECT id FROM users WHERE sub=$<sub>), $<name>)
      RETURNING *`,
    { sub, name },
  );
// correct syntax? should I be returning after?
export const deleteTask = (id) =>
  db.one("DELETE FROM tasks WHERE id=$<id> RETURNING *", { id });

// updateTask takes two parameters, id & object
// toggle is_default from false to true
export const updateIsDefault = (id, sub) => {
  db.tx((t) => {
    // 1st func - sets everything to false
    const q1 = t.none(
      `UPDATE tasks SET is_default=false WHERE id!=(SELECT id FROM users WHERE sub=$<sub>)`,
      {
        sub,
      },
    );
    // 2nd func/query - sets is_default to true & id
    const q2 = t.one(
      `UPDATE tasks SET is_default=true WHERE id=$<id> RETURNING *`,
      {
        id,
      },
    );

    // returning a promise that determines a successful tx
    return t.batch([q1, q2]);
  });
};
// true & false will come from front-end
// another DB query that will update (use where clause where user is the same user as the task you specified, and the id is NOT id you specified && is_dfault = true; <- set those to false)
// id != $<id>

// adds phone using sub & phone
export const addPhone = (sub, phone) =>
  // insert into tasks the user_id where sub=sub
  // insert phone into that row's phone column
  // *you can't insert into existing row, must use UPDATE SET
  db.one(
    `UPDATE users SET phone = $<phone> WHERE id=(SELECT id FROM users WHERE sub=$<sub>)
      RETURNING *`,
    { sub, phone },
  );

// MUST GO AFTER GETTASKS
// get the user's phone #
export const getPhone = async (sub) => {
  const user = await db.one(`SELECT phone from users WHERE sub=$<sub>`, {
    sub,
  });
  return user.phone;
};

export const getMessage = async (sub, id) => {
  const task = await db.one(
    `SELECT name FROM tasks WHERE id = $<id> AND user_id=(SELECT id FROM users WHERE sub=$<sub>)`,
    {
      sub,
      id,
    },
  );
  return task.name;
};
// // add phone
// // adds tasks using sub & name
// export const addTask = (sub, phone) =>
//   db.one(
//     `INSERT INTO tasks(user_id, name)
//       VALUES((SELECT id FROM users WHERE sub=$<sub>), $<name>)
//       RETURNING *`,
//     { sub, phone },
//   );

// adds a user to the database
export const addOrUpdateUser = (user) =>
  db.one(
    `INSERT INTO users(given_name, family_name, picture, email, sub)
      VALUES($<given_name>, $<family_name>, $<picture>, $<email>, $<sub>)
      ON CONFLICT (sub) DO
        UPDATE SET given_name = $<given_name>, family_name = $<family_name>,
          picture = $<picture>, email=$<email>
      RETURNING *`,
    user,
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({
      path: path.join(new URL(".", import.meta.url).pathname, "../../.env"),
    });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
