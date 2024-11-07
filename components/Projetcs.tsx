const Projects = () => {
  const images = [
    'image-3.png',
    'image-1.png',
    'image-5.png',
    // 'image-8.png',
    'image-4.png',
    'image-6.png',
    'image.png',
    'image-2.png',
    'image-7.png',
    // 'image-9.png',
  ];

  return (
    <div className="projects-container flex flex-wrap gap-1 mb-28">
      {images.map((img, index) => (
        <div key={index} className="project-item flex-grow">
          <img
            src={`/images/${img}`}
            alt={`Project ${index + 1}`}
            className="project-image grayscale object-cover"
          />
          <div className="project-overlay">
            <img
              src={`/images/${img}`}
              alt={`Project ${index + 1}`}
              className="project-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
