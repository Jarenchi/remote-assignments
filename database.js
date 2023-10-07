import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";

const pool = mysql
  .createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUser(id) {
  const [rows] = await pool.query("SELECT * FROM user WHERE id=?", [id]);
  return rows[0];
}
export async function createUser(name, email, password) {
  const [existingUser] = await pool.query("SELECT id FROM user WHERE email=?", [email]);
  if (existingUser.length > 0) {
    const error = new Error("Email Already Exists");
    error.status = 409;
    throw error;
  }
  const [result] = await pool.query("INSERT INTO user (name,email,password) VALUES (?,?,?)", [name, email, password]);
  const id = result.insertId;
  return getUser(id);
}
