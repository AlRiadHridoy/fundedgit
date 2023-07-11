import { useEffect, useState } from "react";

// chart
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

export default function Chart() {
  const [disWith, setDisWith] = useState({
    top: 30,
    right: 15,
    left: 10,
    bottom: 20,
  });

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 30,
        bottom: 30,
      });
    }
  }, []);

  const data = [
    {
      name: "1",
      uv: 0,
    },
    {
      name: "2",
      uv: 320,
    },
    {
      name: "3",
      uv: -140,
    },
    {
      name: "4",
      uv: 295,
    },
    {
      name: "5",
      uv: 150,
    },
    {
      name: "6",
      uv: -200,
    },
    {
      name: "7",
      uv: 500,
    },
    {
      name: "8",
      uv: 356,
    },
    {
      name: "9",
      uv: 350,
    },
    {
      name: "10",
      uv: 400,
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer height="100%">
      <AreaChart data={data} margin={disWith}>
        <CartesianGrid />
        <XAxis className="theXaxis" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="#c7b3fc34" stopOpacity={1} />
            <stop offset={off} stopColor="#c381fc34" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area dataKey="uv" stroke="#c382fc" fill="url(#splitColor)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
