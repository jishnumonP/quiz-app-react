import React, { useState } from 'react';
import quizData from '../../StaticData/data';
import Question from '../Quiz/Question';
function Home() {
  const [questions, setQuestions] = useState(quizData);
  return (
    <main>
      <div className='container'>
        <h3>techflix AI <br/>Quiz App</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Home;
