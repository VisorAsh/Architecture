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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mb-28 px-1">
      {images.map((img, index) => (
        <div 
          key={index} 
          className="relative aspect-square overflow-hidden group"
        >
          <img
            src={`/images/${img}`}
            alt={`Project ${index + 1}`}
            className="w-full h-full object-cover grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
            <img
              src={`/images/${img}`}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
