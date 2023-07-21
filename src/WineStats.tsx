// WineStats.tsx

import React from "react";
import { calculateMean, calculateMedian, calculateMode } from "./utils";

interface WineData {
  Alcohol: number;
  Flavanoids: number;
  Ash: number;
  Hue: number;
  Magnesium: number;
  Gamma?: number;
}

interface Props {
  data: WineData[];
  property: keyof WineData;
}

const WineStats: React.FC<Props> = ({ data, property }) => {
  const classes: number[] = data.reduce<number[]>((acc, wine) => {
    if (!acc.includes(wine.Alcohol)) {
      acc.push(wine.Alcohol);
    }
    return acc;
  }, []);

  const getClassData = (className: number) => {
    return data.filter((wine) => wine.Alcohol === className).map((wine) => wine[property]);
  };

  const renderStatsRow = (measure: string) => {
    const rowData = classes.map((className) => {
      const classData = getClassData(className);
      let value: number;

      switch (measure) {
        case "Mean":
          value = calculateMean(classData as any);
          break;
        case "Median":
          value = calculateMedian(classData as any);
          break;
        case "Mode":
          value = calculateMode(classData as any);
          break;
        default:
          value = 0;
      }

      return (
        <td key={className} className="cell">
          {value.toFixed(3)}
        </td>
      );
    });

    return (
      <tr key={measure}>
        <td className="cell">{measure}</td>
        {rowData}
      </tr>
    );
  };

  return (
    <div className="wine-stats">
      <h2>{property}</h2>
      <table className="wine-table">
        <thead>
          <tr>
            <th className="cell">Measure</th>
            {classes.map((className) => (
              <th key={className} className="cell">
                Class {className}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderStatsRow("Mean")}
          {renderStatsRow("Median")}
          {renderStatsRow("Mode")}
        </tbody>
      </table>
    </div>
  );
};

export default WineStats;
