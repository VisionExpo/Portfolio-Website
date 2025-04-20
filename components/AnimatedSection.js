// AnimatedSection.js - Reusable animated section component
const AnimatedSection = ({ id, title, children, className = '' }) => {
  // Reference to the section element
  const sectionRef = React.useRef(null);
  
  // Set up animation when component mounts
  React.useEffect(() => {
    const section = sectionRef.current;
    
    // Create animation for the section title
    gsap.from(`#${id} h2`, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      },
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: 'power2.out'
    });
    
    // Create a timeline for staggered animations of children
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      }
    });
    
    // Add animations to the timeline
    tl.from(`#${id} .animated-item`, {
      duration: 0.6,
      opacity: 0,
      y: 30,
      stagger: 0.15,
      ease: 'power2.out'
    });
    
  }, [id]);
  
  return (
    <section id={id} ref={sectionRef} className={`py-5 section-bg ${className}`}>
      <div className="container">
        <h2 className="text-center mb-4">{title}</h2>
        {children}
      </div>
    </section>
  );
};
