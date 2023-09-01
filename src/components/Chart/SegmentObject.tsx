/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';

import { LayerType } from './Chart';

import EKG1 from '@/images/sample/ekg/fullEKG1.jpeg';
import EKG2 from '@/images/sample/ekg/fullEKG2.jpeg';

interface SegmentObjectProperties {
  selectedLayers: Array<LayerType>;
  segment: string;
}

const SegmentObject = ({
  selectedLayers,
  segment,
}: SegmentObjectProperties) => {
  // const [state, dispatch] = useReducer(oldState, action) // THIS IS FOR PANNING/ZOOMING
  // import {useReducer} from 'react'
  // zander is so sexy 🤤
  // Folder of images is being weird so just manually doing it untill API is ready.
  const images = [
    { id: selectedLayers[0].id, src: EKG1 },
    { id: selectedLayers[1].id, src: EKG2 },
    { id: selectedLayers[2].id, src: EKG1 },
    { id: selectedLayers[3].id, src: EKG2 },
  ];

  const layers: Array<React.JSX.Element> = [];
  // for (const [index, selectedLayer] of selectedLayers.entries()) {
  // if (selectedLayer.selected) {
  //   layers.push(
  //     <view key={index}>
  //       <Image src={images[index].src} className="SegmentImg" alt="" />
  //     </view>
  //   );
  // }
  // }

  return (
    <div className="SegmentObj">
      <p className="Subheading">{segment}</p>
      {layers}
    </div>
  );
};

export default SegmentObject;
