// SkillCard.js - Component for skill cards with hover animations
const SkillCard = ({ skill }) => {
  const cardRef = React.useRef(null);
  
  // Set up hover animations
  React.useEffect(() => {
    const card = cardRef.current;
    
    // Create hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,
        ease: 'power2.out'
      });
      
      // Animate the image
      gsap.to(card.querySelector('img'), {
        duration: 0.4,
        rotation: 10,
        scale: 1.1,
        ease: 'power1.out'
      });
      
      // Animate the title
      gsap.to(card.querySelector('h5'), {
        duration: 0.3,
        color: '#ff007f',
        ease: 'power1.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      });
      
      // Reset the image
      gsap.to(card.querySelector('img'), {
        duration: 0.4,
        rotation: 0,
        scale: 1,
        ease: 'power1.out'
      });
      
      // Reset the title
      gsap.to(card.querySelector('h5'), {
        duration: 0.3,
        color: '#212529',
        ease: 'power1.out'
      });
    });
    
    // Cleanup event listeners on unmount
    return () => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
    };
  }, []);
  
  return (
    <div className="col-md-3 mb-4 animated-item skill-card">
      <div className="text-center" ref={cardRef}>
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="mb-3" 
          style={{ width: '80px', height: '80px' }} 
        />
        <h5 className="font-weight-bold">{skill.name}</h5>
        <p className="text-muted">{skill.description}</p>
      </div>
    </div>
  );
};

// Skills Section Component
const SkillsSection = () => {
  // Skills data
  const skills = [
    {
      id: 1,
      name: 'Python',
      description: 'A versatile programming language known for its readability and extensive libraries. Ideal for AI, data science, and web development.',
      icon: 'Assets/Icons/Skills and Tools/python.png'
    },
    {
      id: 2,
      name: 'SQL',
      description: 'Structured Query Language used for managing and querying relational databases, essential for data management and analysis.',
      icon: 'Assets/Icons/Skills and Tools/sql.png'
    },
    {
      id: 3,
      name: 'TensorFlow',
      description: 'An open-source platform for machine learning, widely used for building, training, and deploying complex neural network models.',
      icon: 'Assets/Icons/Skills and Tools/tensorflow.png'
    },
    {
      id: 4,
      name: 'PyTorch',
      description: 'An open-source machine learning framework widely used for building deep learning models and neural networks.',
      icon: 'Assets/Icons/Skills and Tools/pytorch.png'
    },
    {
      id: 5,
      name: 'Pandas',
      description: 'A data manipulation and analysis library in Python, offering powerful tools for working with structured data.',
      icon: 'Assets/Icons/Skills and Tools/pandas.png'
    },
    {
      id: 6,
      name: 'NumPy',
      description: 'A fundamental package for numerical computation in Python, providing support for large multi-dimensional arrays and matrices.',
      icon: 'Assets/Icons/Skills and Tools/numpy.png'
    },
    {
      id: 7,
      name: 'Matplotlib',
      description: 'A powerful plotting library for Python, Matplotlib enables the creation of static, animated, and interactive visualizations.',
      icon: 'Assets/Icons/Skills and Tools/matplotlib.png'
    },
    {
      id: 8,
      name: 'Scikit-Learn',
      description: 'A machine learning library in Python offering simple and efficient tools for predictive data analysis.',
      icon: 'Assets/Icons/Skills and Tools/sklearn.png'
    },
    {
      id: 9,
      name: 'Keras',
      description: 'A high-level neural networks API written in Python, making it easy to build and train deep learning models.',
      icon: 'Assets/Icons/Skills and Tools/keras.png'
    },
    {
      id: 10,
      name: 'GitHub',
      description: 'A code hosting platform for version control and collaboration, enabling multiple people to work on projects together.',
      icon: 'Assets/Icons/Skills and Tools/github.png'
    },
    {
      id: 11,
      name: 'Hugging Face',
      description: 'A platform and library for natural language processing, known for its Transformers library.',
      icon: 'Assets/Icons/Skills and Tools/hugging face.png'
    },
    {
      id: 12,
      name: 'AWS',
      description: 'Amazon Web Services, a popular cloud computing platform offering a wide range of services for scalable applications.',
      icon: 'Assets/Icons/Skills and Tools/aws.png'
    }
  ];
  
  return (
    <AnimatedSection id="skills" title="Skills">
      <div className="row">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </AnimatedSection>
  );
};
