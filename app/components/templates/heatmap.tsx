import { ForexHeatMap } from 'react-ts-tradingview-widgets';

const Heatmap = () => {
  return (
    <div className="py-20 bg-white">
      <div className="relative max-w-4xl mx-auto">
        <ForexHeatMap height={382} width={'100%'}></ForexHeatMap>
      </div>
    </div>
  );
};

export default Heatmap;
