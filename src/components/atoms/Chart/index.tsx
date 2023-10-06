import React, {useEffect, useState} from 'react';
import {Chart, Line, Area} from 'react-native-responsive-linechart';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export type Props = {
  accessibilityLabel: string;
  chartData: number[];
  color?: string;
  domain: {x: {min: number; max: number}; y: {min: number; max: number}};
  size: {
    h: number;
    w: number;
  };
};

const ChartElement: React.FC<Props> = ({
  color = '#dedede',
  chartData,
  domain,
  size,
}) => {
  const [data, setData] = useState<{x: number; y: number}[]>([]);
  useEffect(() => {
    let _data: {x: number; y: number}[] = [];
    chartData.forEach((element: number, index: number) => {
      _data.push({
        x: index,
        y: element,
      });
    });
    setData(_data);
  }, [chartData]);

  return (
    <Chart
      style={{height: size.h, width: size.w}}
      data={data}
      padding={{top: wp('28%')}}
      xDomain={{min: domain.x.min, max: data.length - 1}}
      yDomain={{min: domain.y.min, max: domain.y.max}}>
      <Area
        theme={{
          gradient: {
            from: {color, opacity: 0.3},
            to: {color, opacity: 0},
          },
        }}
      />
      <Line theme={{stroke: {color, width: 1}}} />
    </Chart>
  );
};

export default ChartElement;
