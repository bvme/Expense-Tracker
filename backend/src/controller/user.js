import { sql } from "../../config/database.js"
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
    try {
        const data = await sql`SELECT * FROM users`
        res.send(data);
    } catch (err) {
        console.log(err);
    }
}
export const signUp = async (req, res) => {
    const {name, email, password, amount, currData} = req.body;
    console.log(req.body);
    try {
        const salt = bcrypt.genSaltSync(1);
        const hashedPassword = await bcrypt.hash(password, salt);
        const data = await sql `INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword}, ${amount}, ${currData})`
        res.send(data)
    } catch (err) {
        console.log(err);
    }
}
export const signIn = async (req, res) => {
    const { password } = req.body;
    try {
        const isValid = await bcrypt.compare(password, user[0].password);
        if (isValid) {
            window.alert("login succesfully")
            res.send("login succesfully");
        }
            window.alert("login unsuccesfull")
            res.send("password & email not valid");
    } catch (err) {
        console.log(err);
    }
}