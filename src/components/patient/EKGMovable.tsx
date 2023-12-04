import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

import { EKG } from '@/constants/EKG';

interface ProcessImageResponse {
  message: string;
  data?: string; // Replace with the type of your processed image data
}

const EKGMovable = (props: { ekg: EKG }) => {
  const [imageSrc, setImageSrc] = useState('/images/sample/ekg/fullEKG1.jpeg'); // Initial image source
  const [processedImageData, setProcessedImageData] = useState<string | null>(null);
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
      console.error("Error processing image:", error);
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
          <button onClick={processImage}>Process EKG Image</button>
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
          {processedImageData && <div>{processedImageData}</div>}
        </div>
      </div>
    </Draggable>
  );
};

export default EKGMovable;
