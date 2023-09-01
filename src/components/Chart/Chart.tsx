import React, { useState } from 'react';

import LayersList from './Layers';
import SegmentList from './SegmentList';

export interface LayerType {
  id: string;
  date: string;
  selected: boolean;
}

// in case we want to make it a map instead of an array
// interface LayerType extends LayerDataType, LayerIDType {}
// interface LayerIDType {
//   id: string
// }
// interface LayerDataType {
//   date: string
//   selected: boolean
// }

const dummyData: Array<LayerType> = [
  { id: '000000', date: 'February 3rd, 2023', selected: true },
  { id: '000001', date: 'March 15th, 2023', selected: false },
  { id: '000002', date: 'April 12th, 2023', selected: false },
  { id: '000003', date: 'April 26th, 2023', selected: false },
];

const Chart = () => {
  const [layers, setLayers] = useState(dummyData);

  const handleLayerSelect = (id: string) => {
    const temporaryLayers = [...layers];
    let index = 0;
    while (index < temporaryLayers.length) {
      if (temporaryLayers[index].id == id) {
        temporaryLayers[index].selected = !temporaryLayers[index].selected;
      }
      index += 1;
    }
    setLayers(temporaryLayers);
  };

  return (
    <div className="AnalysisContianer">
      <div className="LayerContainer">
        <p className="Subheading" style={{ margin: '10px' }}>
          Layers
        </p>
        <LayersList layers={layers} onSelect={handleLayerSelect} />
      </div>
      <SegmentList layers={layers} />
    </div>
  );
};

export default Chart;
