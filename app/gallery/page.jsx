'use client';

import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Fetch photos from Supabase
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          'https://fhbbstzltatuvwwamnjq.supabase.co/rest/v1/location_photos',
          {
            headers: {
              'apikey': 'sb_publishable_e4vn5J2Nn33IL6AqcU8FkA_aIQ9lDPL',
              'Authorization': 'Bearer sb_publishable_e4vn5J2Nn33IL6AqcU8FkA_aIQ9lDPL',
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('Photos loaded from Supabase:', data);
          setPhotos(data);
        } else {
          console.warn(`Supabase API error: ${response.status}. Loading sample photos instead.`);
          // Load sample photos if Supabase fails
          loadSamplePhotos();
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
        // Load sample photos if fetch fails
        loadSamplePhotos();
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const loadSamplePhotos = () => {
    const samplePhotos = [
      {
        id: 1,
        location: 'Pleasanton, CA',
        city: 'Pleasanton',
        latitude: 37.6624,
        longitude: -121.8863,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F927acefb64d04613a1d8213eb181373d?format=webp&width=800&height=1200',
        title: 'Valiant Signature - Premium Hardware',
        description: 'Valiant Signature - Premium Hardware - Pleasanton CA',
        alt_text: 'Premium garage door hardware installation in Pleasanton',
        service_type: 'Hardware',
      },
      {
        id: 2,
        location: 'Dublin, CA',
        city: 'Dublin',
        latitude: 37.7019,
        longitude: -121.8135,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fcd4b183cef7c48988b3ebf04b1cecc11?format=webp&width=800&height=1200',
        title: 'Garage Door Opener Repair : Replacement',
        description: 'Garage Door Opener Repair : Replacement - Dublin CA 94568',
        alt_text: 'Garage door opener repair and replacement in Dublin',
        service_type: 'Opener Repair',
      },
      {
        id: 3,
        location: 'San Francisco, CA',
        city: 'San Francisco',
        latitude: 37.7749,
        longitude: -122.4194,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fa8591852f92546739051efeb19b96dfd?format=webp&width=800&height=1200',
        title: 'Full Wood Classic Recessed Panel Garage Door Replacement',
        description: 'Full Wood Classic Recessed Panel Garage Door Repacement - San Fransisco CA',
        alt_text: 'Wood panel garage door replacement in San Francisco',
        service_type: 'Panel Replacement',
      },
      {
        id: 4,
        location: 'San Lorenzo, CA',
        city: 'San Lorenzo',
        latitude: 37.6843,
        longitude: -122.0857,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F1d061ee5deda499790ed6a86b0442b22?format=webp&width=800&height=1200',
        title: 'Liftmaster Garage Door Opener Repair',
        description: 'Liftmaster Garage Door Opener Repair - San Lorenzo',
        alt_text: 'Liftmaster opener repair in San Lorenzo',
        service_type: 'Opener Repair',
      },
      {
        id: 5,
        location: 'Livermore, CA',
        city: 'Livermore',
        latitude: 37.6821,
        longitude: -121.7670,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fc3764fb0de2341c6bdb213b3ad9ae931?format=webp&width=800&height=1200',
        title: 'Valiant Logo - Livermore CA',
        description: 'Valiant Logo - Livermore CA',
        alt_text: 'Valiant garage door service in Livermore',
        service_type: 'Service',
      },
      {
        id: 6,
        location: 'Castro Valley, CA',
        city: 'Castro Valley',
        latitude: 37.6915,
        longitude: -122.0881,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F934dd114c73d4800945651b0df39c4ad?format=webp&width=800&height=1200',
        title: 'Garage Door Panel : Section Replacement',
        description: 'Garage Door Panel : Section Replacement - Castro Valley CA',
        alt_text: 'Panel section replacement in Castro Valley',
        service_type: 'Panel Replacement',
      },
      {
        id: 7,
        location: 'Camino Tassajara, CA',
        city: 'Camino Tassajara',
        latitude: 37.7333,
        longitude: -121.8333,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fed684d475d2046f58eee3cee072fa481?format=webp&width=800&height=1200',
        title: 'Valiant Signature - Premium Hardware',
        description: 'Valiant Signature - Premium Hardware - Camino Tassajara CA',
        alt_text: 'Premium hardware installation in Camino Tassajara',
        service_type: 'Hardware',
      },
      {
        id: 8,
        location: 'Berkeley, CA',
        city: 'Berkeley',
        latitude: 37.8716,
        longitude: -122.2727,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fe49a70f99a6b417ebf6c71793b540e9a?format=webp&width=800&height=1200',
        title: 'Dual Carriage Overlay Garage Doors',
        description: 'Dual Carriage Overlay Garage Doors - Berkeley CA',
        alt_text: 'Carriage overlay doors in Berkeley',
        service_type: 'Carriage Overlay',
      },
      {
        id: 9,
        location: 'Berkeley, CA',
        city: 'Berkeley',
        latitude: 37.8716,
        longitude: -122.2727,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fc862eb0aec1e4c1bbe520ebd4c2732fc?format=webp&width=800&height=1200',
        title: 'Beautiful Quiet Carriage Overlay Garage Doors',
        description: 'Beautiful Quiet Carriage Overlay Garage Doors - Berkeley CA',
        alt_text: 'Quiet carriage overlay doors in Berkeley',
        service_type: 'Carriage Overlay',
      },
      {
        id: 10,
        location: 'Danville, CA',
        city: 'Danville',
        latitude: 37.8244,
        longitude: -121.9289,
        photo_url: 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F1a45b00d02794aa3a96539c597417eed?format=webp&width=800&height=1200',
        title: 'Garage Door Parts Organization On The Job',
        description: 'Garage Door Parts Organization on The Job - Danville CA',
        alt_text: 'Professional parts organization on job site in Danville',
        service_type: 'Service',
      },
    ];
    setPhotos(samplePhotos);
  };

  const uniqueCities = [...new Set(photos.map((p) => p.city))];
  const filteredPhotos = selectedCity
    ? photos.filter((p) => p.city === selectedCity)
    : photos;

  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Garage Door Service Gallery',
    description: 'Portfolio of professional garage door repair and installation projects across the Bay Area',
    url: 'https://www.valiantdoor.com/gallery',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Valiant Garage Door',
      url: 'https://www.valiantdoor.com',
    },
    mainEntity: {
      '@type': 'ImageGallery',
      associatedMedia: photos.map((photo) => ({
        '@type': 'ImageObject',
        url: photo.photo_url,
        name: photo.title,
        description: photo.description,
        contentLocation: {
          '@type': 'Place',
          name: photo.location,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: photo.latitude,
            longitude: photo.longitude,
          },
        },
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />

      <header className="gallery-header">
        <div className="gallery-container">
          <h1>Professional Garage Door Service Gallery</h1>
          <p className="gallery-subtitle">
            See our work across Pleasanton, Dublin, Livermore, Fremont, San Ramon, and the Bay Area
          </p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="gallery-container">
          {/* City Filter */}
          <div className="city-filter">
            <button
              className={`filter-btn ${!selectedCity ? 'active' : ''}`}
              onClick={() => setSelectedCity(null)}
            >
              All Locations
            </button>
            {uniqueCities.map((city) => (
              <button
                key={city}
                className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {loading ? (
            <div className="loading">Loading gallery...</div>
          ) : (
            <div className="photos-grid">
              {filteredPhotos.map((photo) => (
                <article
                  key={photo.id}
                  className="photo-card"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="photo-wrapper">
                    <img
                      src={photo.photo_url}
                      alt={photo.alt_text}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="photo-overlay">
                      <p className="photo-location">{photo.city}</p>
                      <p className="photo-type">{photo.service_type}</p>
                    </div>
                  </div>
                  <div className="photo-info">
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPhotos.length === 0 && !loading && (
            <div className="no-photos">No photos found for this location.</div>
          )}
        </div>
      </section>

      {/* Modal for full photo view */}
      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPhoto(null)}>
              ✕
            </button>
            <img
              src={selectedPhoto.photo_url}
              alt={selectedPhoto.alt_text}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedPhoto.title}</h2>
              <p className="modal-location">{selectedPhoto.location}</p>
              <p>{selectedPhoto.description}</p>
              <p className="modal-service">Service: {selectedPhoto.service_type}</p>
              <div className="modal-coordinates">
                <small>
                  📍 {selectedPhoto.latitude}, {selectedPhoto.longitude}
                </small>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-header {
          padding: 60px 20px;
          background: linear-gradient(135deg, #0b0b0c 0%, #111214 100%);
          border-bottom: 2px solid #c7a34b;
          text-align: center;
        }

        .gallery-header h1 {
          font-size: 2.5rem;
          color: #f5f2ec;
          margin: 0 0 15px 0;
        }

        .gallery-subtitle {
          font-size: 1.1rem;
          color: #e0c783;
          margin: 0;
        }

        .gallery-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .gallery-section {
          padding: 60px 20px;
          background: #f5f2ec;
          min-height: 600px;
        }

        .city-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #c7a34b;
          background: white;
          color: #0b0b0c;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #c7a34b;
          color: white;
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .photo-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .photo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        }

        .photo-wrapper {
          position: relative;
          overflow: hidden;
          height: 200px;
        }

        .photo-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .photo-card:hover .photo-wrapper img {
          transform: scale(1.05);
        }

        .photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 15px;
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .photo-card:hover .photo-overlay {
          transform: translateY(0);
        }

        .photo-location {
          margin: 0 0 5px 0;
          font-weight: 600;
        }

        .photo-type {
          margin: 0;
          font-size: 0.9rem;
          color: #e0c783;
        }

        .photo-info {
          padding: 20px;
        }

        .photo-info h3 {
          margin: 0 0 10px 0;
          font-size: 1.1rem;
          color: #0b0b0c;
        }

        .photo-info p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .loading,
        .no-photos {
          text-align: center;
          padding: 60px 20px;
          color: #666;
          font-size: 1.1rem;
        }

        /* Modal Styles */
        .photo-modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #0b0b0c;
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .modal-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .modal-info {
          padding: 30px;
        }

        .modal-info h2 {
          margin: 0 0 10px 0;
          color: #0b0b0c;
          font-size: 1.8rem;
        }

        .modal-location {
          margin: 0 0 15px 0;
          font-weight: 600;
          color: #c7a34b;
        }

        .modal-info p {
          margin: 0 0 10px 0;
          color: #555;
          line-height: 1.7;
        }

        .modal-service {
          margin: 20px 0 15px 0;
          padding: 10px;
          background: #f5f2ec;
          border-left: 4px solid #c7a34b;
          color: #0b0b0c;
        }

        .modal-coordinates {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #e0e0e0;
        }

        .modal-coordinates small {
          color: #999;
        }

        @media (max-width: 768px) {
          .gallery-header h1 {
            font-size: 1.8rem;
          }

          .photos-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
          }

          .city-filter {
            margin-bottom: 30px;
          }

          .modal-content {
            max-height: 100vh;
          }
        }
      `}</style>
    </main>
  );
}
