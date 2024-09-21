import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  return (
    <Gallery>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0' }}>
          {images.map((image, index) => {

            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  margin: '0 10px',
                }}>
                <Item
                  cropped
                  original={image.source}
                  thumbnail={image.source}
                  width='1280'
                  height='1920'>
                  {({ ref, open }) => (
                    <img
                      style={{
                        cursor: 'pointer',
                        objectFit: 'contain',
                        width: image.width,
                        height: image.height,
                      }}
                      alt={image.alt}
                      src={image.source}
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                    />
                  )}
                </Item>
              </div>
            );
          })}
        </div>
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
