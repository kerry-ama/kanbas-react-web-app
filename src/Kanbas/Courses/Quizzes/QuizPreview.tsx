import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function QuizPreview() {
    const { quizId } = useParams(); // Get the quiz ID from the route
    const navigate = useNavigate();

}