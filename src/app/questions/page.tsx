"use client";
import {GetQuestions, Question} from "../on_server";
import { useEffect, useState } from "react";
    




function first_few_words(question: string) {
    let spaces_seen = 0;
    let words_collected = "";
    for (let i = 0; i < question.length; i++) {
        if (question[i] === " ") {
            spaces_seen++;
        }
        if (spaces_seen === 4) {
            break;
        }
        words_collected += question[i];
    }
    return words_collected;
}

 function AnswerForm({question}: {question: Question}) {
    return <form className="p-2 my-2 border border-gray-300 rounded-md shadow-sm" action="">
        <label className="block text-sm font-medium text-gray-70 opacity-50" htmlFor="answer">Answer:</label>
        <textarea className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={`in response to your question: "${first_few_words(question.question)}.."`} name="answer" />
        <button className="bg-blue-800 hover:bg-blue-800 text-white font-bold py mt-2 px-1 rounded" type="submit">Send</button>
    </form>
}
export default function Questions() {
    const [questions, setQuestions] = useState<Question[]>([]);
    useEffect(() => {
        GetQuestions().then((questions) => setQuestions(questions.map((question) => {
                return {
                    ...question,
                    is_shown: false,
                };
            })));
    }, []);
    console.log({questions});
    // if (questions === "loading") {
    //     return <div
    //     className="container mx-auto px-4 py-8"
    //     >Loading...</div>;
    // }
    return (
        <div className="container mx-auto px-4 py-8">
            {questions.map((question: Question) => <QuestionCard key={question.id} question={question} />)}

        </div>  
    );
}



function QuestionCard({question}: {question: Question}) {
    const [showing_answer_form, setShowingAnswerForm] = useState(false);
                return<div key={question.id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                    <h2 className="text-2xl font-bold">{question.name}</h2>
                    <p className="text-sm opacity-50">{question.email}</p>
                    <p className="text-sm flex items-center gap-1 pt-2">
                        {question.is_shown ? <ActiveSignal/> : ""}
                        {question.question}</p>
                    {question.is_shown ? (
                        <button 
                            className="bg-red-800 hover:bg-red-800 text-white font-bold py-1 mt-2 px-2 rounded"
                        onClick={() => setShowingAnswerForm(false)}>Hide</button>
                    ) : (
                        <button
                        className="bg-blue-800 hover:bg-blue-800 text-white font-bold py-1 mt-2 px-2 rounded"
                        onClick={() => setShowingAnswerForm(true)}>Show on main page</button>
                    )}
                    {showing_answer_form ? <AnswerForm question={question} /> :""}
                </div>
            
        }
    

function ActiveSignal() {
    return (
        <svg className="w-6 h-6" fill="#000000" viewBox="0 -1.5 27 27" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24 24h-24v-24h18.4v2.4h-16v19.2h20v-8.8h2.4v11.2zm-19.52-12.42 1.807-1.807 5.422 5.422 13.68-13.68 1.811 1.803-15.491 15.491z"></path></g></svg>
    );
}