-- Create location_photos table for SEO gallery
CREATE TABLE IF NOT EXISTS location_photos (
  id BIGSERIAL PRIMARY KEY,
  location VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state_code VARCHAR(2) DEFAULT 'CA',
  latitude DECIMAL(10, 6) NOT NULL,
  longitude DECIMAL(10, 6) NOT NULL,
  photo_url TEXT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  alt_text TEXT NOT NULL,
  service_type VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for fast queries
CREATE INDEX IF NOT EXISTS idx_location_photos_city ON location_photos(city);
CREATE INDEX IF NOT EXISTS idx_location_photos_location ON location_photos(location);

-- Insert your location photos with proper SEO metadata
INSERT INTO location_photos (location, city, latitude, longitude, photo_url, title, description, alt_text, service_type) VALUES
('Pleasanton, CA', 'Pleasanton', 37.6805, -121.9284, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F4da8481e83a34368bee14973a8e2fa51?format=webp&width=800&height=1200', 'Premium Garage Door Hardware Installation - Pleasanton', 'Professional garage door hardware installation showcasing quality parts and expert workmanship in Pleasanton, CA', 'Premium garage door hardware installation Pleasanton California', 'Hardware Installation'),

('Dublin, CA', 'Dublin', 37.7014, -121.8863, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fed647bb2a82341409f4790573e8250d2?format=webp&width=800&height=1200', 'Garage Door Opener Replacement - Dublin CA', 'Complete garage door opener repair and replacement service in Dublin, CA with certified master technician', 'Garage door opener repair replacement Dublin California 94568', 'Opener Repair'),

('San Francisco, CA', 'San Francisco', 37.7749, -122.4194, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F4c5d6836f4604c3a8c651d70fa7d5a9a?format=webp&width=800&height=1200', 'Wood Panel Garage Door Replacement - San Francisco', 'Beautiful classic recessed panel wood garage door replacement in San Francisco featuring traditional design', 'Full wood classic recessed panel garage door replacement San Francisco California', 'Door Replacement'),

('Berkeley, CA', 'Berkeley', 37.8716, -122.2727, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fc83b21083faf442c978a4ce0dd728e42?format=webp&width=800&height=1200', 'Custom Dual Carriage Overlay Garage Doors - Berkeley', 'Professional installation of custom dual carriage overlay garage doors with smooth, quiet operation in Berkeley', 'Dual carriage overlay garage doors Berkeley California', 'Custom Installation'),

('Castro Valley, CA', 'Castro Valley', 37.6047, -122.0767, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F03f81de1af074519bb2f9cddab64d416?format=webp&width=800&height=1200', 'Garage Door Panel Section Replacement - Castro Valley', 'Professional garage door panel section replacement and repair service in Castro Valley, CA', 'Garage door panel section replacement Castro Valley California', 'Panel Repair'),

('Danville, CA', 'Danville', 37.8205, -122.1055, 'https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2Fc7ac03e85a434ce09ed460be9439e68a?format=webp&width=800&height=1200', 'Professional Garage Door Service - Danville', 'Quality parts and professional organization on garage door repair service in Danville, CA', 'Professional garage door repair service parts Danville California', 'Professional Service');
