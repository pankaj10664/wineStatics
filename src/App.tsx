// App.tsx

import React, { useEffect, useState } from "react";
import WineStats from "./WineStats";
import "./App.css";

interface WineData {
  Alcohol: number;
  Flavanoids: number;
  Ash: number;
  Hue: number;
  Magnesium: number;
  Gamma?: number;
}

const calculateGamma = (wine: WineData): number => {
  return (wine.Ash * wine.Hue) / wine.Magnesium;
};

const App: React.FC = () => {
  const [wineData, setWineData] = useState<WineData[]>([]);

  useEffect(() => {
    
    const sampleWineData: WineData[] = [
      { Alcohol: 1, Flavanoids: 5, Ash: 3, Hue: 0.8, Magnesium: 80 },
  { Alcohol: 1, Flavanoids: 7, Ash: 4, Hue: 0.7, Magnesium: 85 },
  { Alcohol: 1, Flavanoids: 8, Ash: 5, Hue: 0.9, Magnesium: 90 },
  { Alcohol: 1, Flavanoids: 6, Ash: 4.5, Hue: 1.0, Magnesium: 95 },
  { Alcohol: 1, Flavanoids: 9, Ash: 4.2, Hue: 0.6, Magnesium: 100 },
  { Alcohol: 2, Flavanoids: 6, Ash: 4.8, Hue: 0.7, Magnesium: 80 },
  { Alcohol: 2, Flavanoids: 5, Ash: 3.5, Hue: 0.8, Magnesium: 85 },
  { Alcohol: 2, Flavanoids: 7, Ash: 4.2, Hue: 0.6, Magnesium: 90 },
  { Alcohol: 2, Flavanoids: 8, Ash: 5, Hue: 0.9, Magnesium: 95 },
  { Alcohol: 2, Flavanoids: 6.5, Ash: 4.5, Hue: 1.1, Magnesium: 100 },
  { Alcohol: 1, Flavanoids: 7.5, Ash: 4.8, Hue: 0.7, Magnesium: 80 },
  { Alcohol: 1, Flavanoids: 6.5, Ash: 3.5, Hue: 0.8, Magnesium: 85 },
  { Alcohol: 1, Flavanoids: 8.5, Ash: 4.2, Hue: 0.6, Magnesium: 90 },
  { Alcohol: 1, Flavanoids: 6.2, Ash: 4.5, Hue: 1.0, Magnesium: 95 },
  { Alcohol: 1, Flavanoids: 9.2, Ash: 4.8, Hue: 0.9, Magnesium: 100 },
  { Alcohol: 3, Flavanoids: 7.8, Ash: 4.5, Hue: 0.9, Magnesium: 80 },
  { Alcohol: 3, Flavanoids: 7.5, Ash: 4.8, Hue: 0.7, Magnesium: 85 },
  { Alcohol: 3, Flavanoids: 6.8, Ash: 3.5, Hue: 0.8, Magnesium: 90 },
  { Alcohol: 3, Flavanoids: 7.2, Ash: 4.2, Hue: 0.6, Magnesium: 95 },
  { Alcohol: 3, Flavanoids: 6.5, Ash: 4.5, Hue: 0.9, Magnesium: 100 },
  { Alcohol: 2, Flavanoids: 6.8, Ash: 4.5, Hue: 0.9, Magnesium: 80 },
  { Alcohol: 2, Flavanoids: 7.5, Ash: 4.8, Hue: 0.7, Magnesium: 85 },
  { Alcohol: 2, Flavanoids: 6.8, Ash: 3.5, Hue: 0.8, Magnesium: 90 },
  { Alcohol: 2, Flavanoids: 7.2, Ash: 4.2, Hue: 0.6, Magnesium: 95 },
  { Alcohol: 2, Flavanoids: 6.5, Ash: 4.5, Hue: 0.9, Magnesium: 100 },
  { Alcohol: 3, Flavanoids: 7.8, Ash: 4.5, Hue: 0.9, Magnesium: 80 },
  { Alcohol: 3, Flavanoids: 7.5, Ash: 4.8, Hue: 0.7, Magnesium: 85 },
  { Alcohol: 3, Flavanoids: 6.8, Ash: 3.5, Hue: 0.8, Magnesium: 90 },
  { Alcohol: 3, Flavanoids: 7.2, Ash: 4.2, Hue: 0.6, Magnesium: 95 },
  { Alcohol: 3, Flavanoids: 6.5, Ash: 4.5, Hue: 0.9, Magnesium: 100 },
];

    // Calculate Gamma for each wine data point
    const wineDataWithGamma: WineData[] = sampleWineData.map((wine) => ({
      ...wine,
      Gamma: calculateGamma(wine),
    }));

    setWineData(wineDataWithGamma);
  }, []);

  return (
    <div>
      {wineData.length > 0 && <WineStats data={wineData} property="Flavanoids" />}
      {wineData.length > 0 && <WineStats data={wineData} property="Gamma" />}
    </div>
  );
};

export default App;
