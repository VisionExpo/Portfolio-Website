import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Potato Crop Disease Detection',
      description: 'This project uses deep learning techniques to identify and classify diseases in potato crops from images, helping farmers protect their crops and improve yield.',
      image: 'Assets/Images/Project/potato.jpeg',
      link: 'https://github.com/VisionExpo/Potato-Disease-Detection',
      techStack: ['Deep Learning', 'CNN', 'Python', 'TensorFlow']
    },
    {
      id: 2,
      title: 'Q&A System Using Gemini-Pro API',
      description: 'A Q&A system that utilizes the Gemini-Pro API to provide accurate responses to user inquiries, enhancing user experience in various applications.',
      image: 'Assets/Images/Project/Q&A.jpeg',
      link: 'https://github.com/VisionExpo/QA-System-using-Gemini-Pro-API',
      techStack: ['LLM', 'Gemini API', 'Python', 'Streamlit']
    },
    {
      id: 3,
      title: 'Stock Price Prediction',
      description: 'This project focuses on predicting stock prices using historical data and ML models, aiding investors in making informed trading decisions.',
      image: 'Assets/Images/Project/stock price.jpeg',
      link: 'https://github.com/VisionExpo/Stock_price_prediction',
      techStack: ['Machine Learning', 'LSTM', 'Python', 'Pandas']
    }
  ];

  return (
    <div className="section-bg">
      <div className="container">
        <h2 className="mb-5 text-center">Projects</h2>
        <div className="row">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
