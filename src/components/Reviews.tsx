import { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-8">Что говорят наши клиенты?</h2>
        {/* Elfsight Google Reviews | Untitled Google Reviews */}
        <div 
          className="elfsight-app-8d921e3b-61b7-4130-bcda-cbdec3bc0015" 
          data-elfsight-app-lazy 
          style={{ paddingBottom: '50px' }}
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
