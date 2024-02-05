import React, { useState } from "react";

function AgencyCard({ name, image, onClick }) {
    const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://i.ibb.co/cbDYYGc/food-services.jpg",
    "https://i.ibb.co/Bf3Z2zk/housing-services.jpg",
    "https://i.ibb.co/4VpZ6M7/Legal-Services.jpg",
    "https://i.ibb.co/7GKXYy4/health-service.jpg",
  ];

  const previous = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

    return (

        <main className="grid place-content-center">
                    <div className="agency-card cursor-pointer" onClick={() => onClick(name)}>
            <h2 className="text-center text-lg font-semibold mt-2">{name}</h2>
        </div>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
          <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
            <span>{currentIndex}</span>/<span>{images.length}</span>
          </div>
  
          <button
            onClick={previous}
            className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
          >
            <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
          </button>
  
          <button
            onClick={forward}
            className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
          >
            <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
          </button>
  
          <div className="relative h-80" style={{ width: "30rem" }}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  opacity: currentIndex === index + 1 ? 1 : 0,
                  transition: "opacity 300ms ease-in-out",
                }}
                className="absolute top-0"
              >
                <img src={image} alt={`image ${index + 1}`} className="rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
}

export default AgencyCard;
