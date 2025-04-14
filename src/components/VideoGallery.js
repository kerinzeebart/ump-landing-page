import React, { useState } from 'react';
import '../App.css';

function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  
  // List of videos from the videos folder
  const videos = [
    { id: 1, title: 'Chicken Showcase', src: '/videos/Video.webm', thumbnail: '/images/chik.png' },
    { id: 2, title: 'Chicken Action', src: '/videos/Chicke02.webm', thumbnail: '/images/chik.png' },
    { id: 3, title: 'Sanctuary Building', src: '/videos/Chicke03.webm', thumbnail: '/images/chik.png' },
    { id: 4, title: 'Tree Environment', src: '/videos/Chicke04_tree.webm', thumbnail: '/images/chik.png' },
    { id: 5, title: 'Jump Mechanics', src: '/videos/Chicke04_jump_mechanics.webm', thumbnail: '/images/chik.png' },
    { id: 6, title: 'Run Mechanics', src: '/videos/Chicke05_run_mechanics.webm', thumbnail: '/images/chik.png' },
  ];

  return (
    <section id="video-gallery" style={{ 
      background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-primary) 100%)', 
      textAlign: 'center',
      paddingTop: '100px',
      paddingBottom: '100px',
    }}>
      <div className="container">
        <h2>Gameplay Videos</h2>
        <p style={{ maxWidth: '700px', margin: '0 auto 60px', fontSize: '1.2rem', color: 'var(--secondary-color)' }}>
          Watch Ultra Mega Chicken Patrol in action with these featured gameplay clips
        </p>
        
        {activeVideo ? (
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto 40px',
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
          }}>
            <video 
              src={activeVideo.src} 
              controls 
              autoPlay 
              style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: '#000' }}
            />
            <button 
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              ×
            </button>
            <h3 style={{ 
              textAlign: 'left', 
              padding: '15px 20px', 
              margin: 0, 
              backgroundColor: 'var(--dark-secondary)', 
              color: 'var(--light-text)'
            }}>
              {activeVideo.title}
            </h3>
          </div>
        ) : (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px', 
            maxWidth: '1200px', 
            margin: '0 auto'
          }}>
            {videos.map(video => (
              <div 
                key={video.id} 
                onClick={() => setActiveVideo(video)}
                style={{ 
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  backgroundColor: 'var(--dark-secondary)',
                  transition: 'transform 0.3s ease',
                  height: '100%',
                }}
                className="video-card"
              >
                <div style={{ 
                  height: '180px', 
                  backgroundColor: '#000', 
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <video 
                    src={video.src} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.7 
                    }} 
                    muted 
                    onMouseOver={(e) => e.target.play()} 
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    backgroundColor: 'rgba(230, 57, 70, 0.8)', 
                    borderRadius: '50%', 
                    width: '50px', 
                    height: '50px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <span style={{ color: '#fff', fontSize: '24px' }}>▶</span>
                  </div>
                </div>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ margin: '0 0 10px', color: 'var(--primary-color)', fontSize: '1.3rem' }}>
                    {video.title}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    Click to watch full video
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoGallery;
