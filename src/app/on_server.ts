// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}
const sql = neon(process.env.DATABASE_URL);




export type Question = {
    id: number;
    name: string;
    email: string;
    question: string;
    is_shown: boolean;
}

export async function GetQuestions() {
    const data = await sql`select id, name, email, question, is_shown from questions`;
    const questions = data as Question[];
    return questions;
}
