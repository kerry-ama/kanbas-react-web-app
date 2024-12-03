import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function QuizPreview() {
    const { quizId } = useParams(); // Get the quiz ID from the route
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [answers, setAnswers] = useState<Record<string, string>>({}); // Faculty's answers
    const [score, setScore] = useState<number | null>(null); // Allow both number and null // Calculated score
    const [lastAttempt, setLastAttempt] = useState<LastAttempt | null>(null); // Previous attempt
  
  type Question = {
    id: string;
    title: string;
    text: string;
    type: 'mc' | 'true_false' | 'fill_in_the_blank';
    options?: string[]; // Only for multiple-choice questions
    correctAnswers: string[] | string; // Array for MC/FITB, string for TF
    points: number;
  };
  
   type Quiz = {
    id: string;
    title: string;
    description: string;
    totalPoints: number;
    questions: Question[];
  };
  type LastAttempt = {
    timestamp: string; // Ensure this matches your API response
    answers: Record<string, string>; // A map of question IDs to answers
  };

    // Fetch quiz and last attempt on load
    useEffect(() => {
        async function fetchQuizData() {
          try {
            const quizResponse = await axios.get(`/api/quiz/${quizId}`);
            const attemptResponse = await axios.get(`/api/quiz/${quizId}/attempt`);
    
            setQuiz(quizResponse.data);
    
            if (attemptResponse.data) {
              setLastAttempt(attemptResponse.data);
              setAnswers(attemptResponse.data.answers || {});
            }
          } catch (error) {
            console.error('Error fetching quiz data:', error);
          }
        }
    
        fetchQuizData();
      }, [quizId]);

      // Handle answer changes
  const handleAnswerChange = (questionId: any, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  if (!quiz) {
    return (
      <div className="loading-screen">
        <p>Loading quiz...</p>
      </div>
    );
  }

  // Calculate score
  const calculateScore = () => {
    let totalScore = 0;

  

    quiz.questions.forEach((question: any) => {
      const userAnswer = answers[question.id];

      if (Array.isArray(question.correctAnswers)) {
        // For MC or Fill-in-the-blank
        if (
          question.correctAnswers.some(
            (correct: any) => correct.toLowerCase() === userAnswer?.toLowerCase()
          )
        ) {
          totalScore += question.points;
        }
      } else {
        // For True/False
        if (question.correctAnswers === userAnswer) {
          totalScore += question.points;
        }
      }
    });

    setScore(totalScore);
  };

  // Save answers
  const saveAnswers = async () => {
    try {
      await axios.post(`/api/quiz/${quizId}/attempt`, {
        answers,
        timestamp: new Date().toISOString(),
      });

      calculateScore();
      alert('Answers saved successfully!');
    } catch (error) {
      console.error('Error saving answers:', error);
      alert('Failed to save answers.');
    }
  };

  // Navigate to Quiz Editor
  const navigateToQuizEditor = () => {
    navigate(`/quiz/${quizId}/edit`);
  };

  if (!quiz) {
    return <div>Loading quiz...</div>;
  }
  return(
    <div className="quiz-preview">
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      {lastAttempt && (
        <p>
          Last attempt on: {new Date(lastAttempt.timestamp).toLocaleString()}
        </p>
      )}
      <form>
        {quiz.questions.map((question) => (
          <div key={question.id} className="question-block">
            <h3>{question.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: question.text }} />
            {question.type === 'mc' && (
              <div>
                {question.options?.map((option, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={(e) =>
                        handleAnswerChange(question.id, e.target.value)
                      }
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
            {question.type === 'true_false' && (
              <div>
                <label>
                  <input
                    type="radio"
                    name={question.id}
                    value="true"
                    checked={answers[question.id] === 'true'}
                    onChange={() => handleAnswerChange(question.id, 'true')}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name={question.id}
                    value="false"
                    checked={answers[question.id] === 'false'}
                    onChange={() => handleAnswerChange(question.id, 'false')}
                  />
                  False
                </label>
              </div>
            )}
            {question.type === 'fill_in_the_blank' && (
              <div>
                <input
                  type="text"
                  value={answers[question.id] || ''}
                  onChange={(e) =>
                    handleAnswerChange(question.id, e.target.value)
                  }
                />
              </div>
            )}
          </div>
        ))}
      </form>
      <div className="quiz-actions">
        <button
          type="button"
          onClick={saveAnswers}
          className="btn btn-primary"
        >
          Save Answers
        </button>
        {score !== null && <p>Your score: {score}/{quiz.totalPoints}</p>}
        <button
          type="button"
          onClick={navigateToQuizEditor}
          className="btn btn-secondary"
        >
          Edit Quiz
        </button>
      </div>
    </div>
  
  );

}