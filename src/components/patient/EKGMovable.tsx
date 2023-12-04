import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Draggable from 'react-draggable';

import im from '../../images/sample/ekg/fullEKG1.jpeg';
import { EKG } from '@/constants/EKG';

interface ProcessImageResponse {
  message: string;
  data?: string; // Or any other type depending on what your Python script outputs
}

const EKGMovable = (props: { ekg: EKG }) => {
  const [processedImageData, setProcessedImageData] = useState<string | null>(null);
  const className = `box ${props.ekg.bgColor}`;
  const draggableRef = useRef(null); // Creating a ref

  const processImage = async (): Promise<void> => {
    try {
      const response = await fetch('/api/processEKG');
      const data: ProcessImageResponse = await response.json();
      console.log(data);
      if (data.data) {
        setProcessedImageData(data.data);
      }
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  return (
    <Draggable
      nodeRef={draggableRef} // Use the ref here
      axis="y"
      handle=".box"
      bounds="body"
      positionOffset={{ x: '0', y: '35%' }}
    >
      <div style={{ flex: '2' }} ref={draggableRef}> {/* Attach the ref to the element */}
        <div style={{ padding: '10px', margin: 'auto' }} className={className}>
          <button onClick={processImage}>Process EKG Image</button>
        </div>
        <div>
          <Image
            src={im}
            alt="EKG"
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
