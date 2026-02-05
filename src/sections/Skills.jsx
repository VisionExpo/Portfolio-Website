import React from 'react';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skills = [
    { id: 1, name: 'Python', description: 'Versatile language for AI & Backend.', icon: 'Assets/Icons/Skills and Tools/python.png' },
    { id: 2, name: 'SQL', description: 'Database management & querying.', icon: 'Assets/Icons/Skills and Tools/sql.png' },
    { id: 3, name: 'TensorFlow', description: 'Deep learning framework.', icon: 'Assets/Icons/Skills and Tools/tensorflow.png' },
    { id: 4, name: 'PyTorch', description: 'Dynamic neural networks.', icon: 'Assets/Icons/Skills and Tools/pytorch.png' },
    { id: 5, name: 'Pandas', description: 'Data manipulation & analysis.', icon: 'Assets/Icons/Skills and Tools/pandas.png' },
    { id: 6, name: 'NumPy', description: 'Numerical computing.', icon: 'Assets/Icons/Skills and Tools/numpy.png' },
    { id: 7, name: 'Matplotlib', description: 'Data visualization.', icon: 'Assets/Icons/Skills and Tools/matplotlib.png' },
    { id: 8, name: 'Scikit-Learn', description: 'Machine learning algorithms.', icon: 'Assets/Icons/Skills and Tools/sklearn.png' },
    { id: 9, name: 'Keras', description: 'High-level neural networks API.', icon: 'Assets/Icons/Skills and Tools/keras.png' },
    { id: 10, name: 'GitHub', description: 'Version control & collaboration.', icon: 'Assets/Icons/Skills and Tools/github.png' },
    { id: 11, name: 'Hugging Face', description: 'Transformers & NLP.', icon: 'Assets/Icons/Skills and Tools/hugging face.png' },
    { id: 12, name: 'AWS', description: 'Cloud infrastructure.', icon: 'Assets/Icons/Skills and Tools/aws.png' }
  ];

  return (
    <div className="section-bg">
      <div className="container">
        <h2 className="mb-5 text-center">Skills</h2>
        <div className="row">
          {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
