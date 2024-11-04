import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
const initialState = {
    quizzes: quizzes,
}

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState, 
    reducers: {
        addQuiz: (state, {payload: quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                course: quiz.course,
                quiz_type: quiz.quiz_type, 
                points: quiz.points,
                group: quiz.group,
                shuffle_answers: quiz.shuffle_answers,
                time_limit: quiz.time_limit, 
                multiple_attempts: quiz.multiple_attempts, 
                view_responses: quiz.view_responses,
                show_answers: quiz.show_answers,
                access_code: quiz.access_code,
                one_question: quiz.one_question, 
                webcam: quiz.webcam,
                lock_questions: quiz.lock_questions, 
                due: quiz.due,
                availability: quiz.availability,
                until: quiz.until,

            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId}) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId);
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz: q
            )  as any; 
        },
        editQuiz: (state, {payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quizId ? { ...q, editing: true} : q
        ) as any;
        },
    },
});
export const {addQuiz, deleteQuiz, updateQuiz, editQuiz} =
    quizzesSlice.actions;
export default quizzesSlice.reducer;