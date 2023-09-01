import React from 'react';

import { LayerType } from './Chart';
import SegmentObject from './SegmentObject';

interface ChartListProperties {
  layers: Array<LayerType>;
}

const SegmentList = (properties: ChartListProperties) => {
  // TODO make this interact with "toggle chart components" so we display the right components
  // of the EKG
  const dummyChartComponentData = [
    { name: 'Segment 1', display: true },
    { name: 'Segment 2', display: true },
    { name: 'Segment 3', display: true },
  ];

  const chartComponentList: Array<React.JSX.Element> = [];
  let index = 0;
  while (index < 3) {
    chartComponentList.push(
      <div
        key={dummyChartComponentData[index].name}
        className="SegmentContainer"
      >
        <SegmentObject
          selectedLayers={properties.layers}
          segment={dummyChartComponentData[index].name}
        />
      </div>
    );
    index += 1;
  }

  return <div className="SegmentListContainer">{chartComponentList}</div>;
};

export default SegmentList;
