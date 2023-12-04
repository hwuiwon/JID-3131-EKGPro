import Image from 'next/image';
import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

import { EKG } from '@/constants/EKG';

interface ProcessImageResponse {
  message: string;
  data?: string; // Replace with the type of your processed image data
}

const EKGMovable = (props: { ekg: EKG }) => {
  const [imageSrc, setImageSrc] = useState('/images/sample/ekg/fullEKG1.jpeg'); // Initial image source
  const [processedImageData, setProcessedImageData] = useState<string | null>(
    null
  );
  const className = `box ${props.ekg.bgColor}`;
  const draggableRef = useRef(null);

  const processImage = async (): Promise<void> => {
    try {
      const response = await fetch('/api/processEKG');
      const data: ProcessImageResponse = await response.json();
      if (data.data) {
        setImageSrc(data.data.slice(6)); // Update the image source with the processed image
        setProcessedImageData(data.message);
      }
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  return (
    <Draggable
      nodeRef={draggableRef}
      axis="y"
      handle=".box"
      bounds="body"
      positionOffset={{ x: '0', y: '35%' }}
    >
      <div style={{ flex: '2' }} ref={draggableRef}>
        <div style={{ padding: '10px', margin: 'auto' }} className={className}>
          {/*  eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
          {/* <button
            onClick={processImage}
            style={{
              backgroundColor: '#EEEEEE', // Gray background
              border: '2px solid #707070', // Slightly darker gray border
              borderRadius: '8px', // Rounded corners
              padding: '10px 20px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'background-color 0.3s ease', // Smooth transition for the hover effect
            }}
            onMouseOver={e =>
              (e.currentTarget.style.backgroundColor = '#a9a9a9')
            } // Lighter gray on hover
            onMouseOut={e =>
              (e.currentTarget.style.backgroundColor = '#EEEEEE')
            } // Back to original color
          >
            Convert EKG
          </button> */}
        </div>
        <div>
          <Image
            src={imageSrc} // Use the state for the image source
            alt="EKG"
            width={500}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
              userSelect: 'none',
              filter: 'opacity(50%)',
            }}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default EKGMovable;
