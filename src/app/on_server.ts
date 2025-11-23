"use server";
import Database from "better-sqlite3";

const db = new Database("questions.db");






export type Question = {
    id: number;
    name: string;
    email: string;
    question: string;
    is_shown: boolean;
}

export async function GetQuestions() {
    const questions = db.prepare(`
    select id, name, email, question, is_shown from questions
`).all() as Question[];

    return questions;
}
