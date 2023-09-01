import React from 'react';

import { LayerType } from './Chart';

interface LayersListProperties {
  layers: Array<LayerType>;
  onSelect: (id: string) => void;
}

const LayersList = (properties: LayersListProperties) => {
  const layerComponentList: Array<React.JSX.Element> = [];
  // eslint-disable-next-line unicorn/no-array-for-each
  properties.layers.forEach((layer: LayerType, index: number) => {
    layerComponentList.push(
      <button
        className="Layer"
        key={layer.id}
        onClick={() => properties.onSelect(layer.id)}
      >
        <p className="LayerText">
          {'Chart ' + (index + 1) + ': ' + layer.date}
        </p>
        <div
          className="LayerButton"
          style={{
            background: layer.selected ? 'lightGreen' : 'lightGrey',
          }}
        />
      </button>
    );
  });

  return <>{layerComponentList}</>;
};

export default LayersList;
