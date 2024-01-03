import { useEffect, useRef } from 'react';
import './DownloadSection.scss';

const DownloadSection = () => {
  const downloadImageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fadeIn');
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(downloadImageRef.current);
  }, []);

  return (
    <section className="downloadSection">
      <img
        ref={downloadImageRef}
        src="/images/massage-therapy-1612308_1280.jpg"
      />
    </section>
  );
};

export default DownloadSection;
