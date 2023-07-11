import { TickerTape } from "react-ts-tradingview-widgets";

<script
  type="text/javascript"
  src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
  async
></script>;

const styles = {
  parent: {
    display: "none",
  },
};

export default function TradingWdget() {
  const data = [
    {
      description: "",
      proName: "OANDA:EURUSD",
    },
    {
      description: "",
      proName: "OANDA:GBPUSD",
    },
    {
      description: "",
      proName: "OANDA:GBPJPY",
    },
    {
      description: "",
      proName: "OANDA:AUDUSD",
    },
    {
      description: "",
      proName: "OANDA:USDJPY",
    },
    {
      description: "",
      proName: "OANDA:USDCAD",
    },
    {
      description: "",
      proName: "OANDA:NZDUSD",
    },
    {
      description: "",
      proName: "OANDA:EURJPY",
    },
    {
      description: "",
      proName: "OANDA:USDCHF",
    },
    {
      description: "",
      proName: "OANDA:AUDJPY",
    },
    {
      description: "",
      proName: "OANDA:EURGBP",
    },
    {
      description: "",
      proName: "OANDA:NZDJPY",
    },
    {
      description: "",
      proName: "OANDA:EURAUD",
    },
    {
      description: "",
      proName: "OANDA:GBPAUD",
    },
    {
      description: "",
      proName: "OANDA:AUDCAD",
    },
    {
      description: "",
      proName: "OANDA:EURCAD",
    },
    {
      description: "",
      proName: "OANDA:GBPCAD",
    },
    {
      description: "",
      proName: "OANDA:CADJPY",
    },
    {
      description: "",
      proName: "OANDA:EURNZD",
    },
    {
      description: "",
      proName: "OANDA:NZDCAD",
    },
    {
      description: "",
      proName: "OANDA:AUDNZD",
    },
    {
      description: "",
      proName: "OANDA:AUDCHF",
    },
    {
      description: "",
      proName: "OANDA:GBPNZD",
    },
    {
      description: "",
      proName: "OANDA:CHFJPY",
    },
    {
      description: "",
      proName: "OANDA:GBPCHF",
    },
    {
      description: "",
      proName: "OANDA:EURCHF",
    },
    {
      description: "",
      proName: "OANDA:CADCHF",
    },
    {
      description: "",
      proName: "OANDA:NZDCHF",
    },
  ];

  return (
    <div className="ticker-widget pt-12 sm:pt-16 relative z-10 ">
      <div className="container">
        <div className="wrapper backdrop-blur-3xl bg-main-bg/30">
          <TickerTape
            colorTheme="dark"
            copyrightStyles={styles}
            displayMode="compact"
            isTransparent={true}
            symbols={data}
          />
        </div>
      </div>
    </div>
  );
}
