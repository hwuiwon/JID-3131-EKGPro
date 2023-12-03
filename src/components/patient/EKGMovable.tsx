import Image from 'next/image';
import React from 'react';
import Draggable from 'react-draggable';

import im from '../../images/sample/ekg/fullEKG1.jpeg';

import { EKG } from '@/constants/Ekg';

const EKGMovable = (props: { ekg: EKG }) => {
  const className = `box ${props.ekg.bgColor}`;
  return (
    <Draggable
      axis="y" // Allow both horizontal and vertical dragging
      handle=".box" // Define a handle to drag by a specific element
      bounds="body"
      positionOffset={{ x: '0', y: '35%' }}
    >
      <div style={{ flex: '2' }}>
        <div
          style={{ padding: '10px', margin: 'auto' }}
          className={className}
        ></div>
        <div /*style={{margin: "4px", flex: "1"}} */>
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
        </div>
      </div>
    </Draggable>
  );
};

export default EKGMovable;
