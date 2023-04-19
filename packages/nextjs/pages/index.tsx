import Head from "next/head";
import type { NextPage } from "next";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "welcome", x: 0, y: 0, w: 9, h: 3 },
  { i: "streams", x: 9, y: 0, w: 3, h: 3 },
  { i: "contract-info", x: 9, y: 1, w: 3, h: 1 },
  { i: "living-room", x: 0, y: 3, w: 9, h: 1 },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scaffold-eth App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="px-4">
        <ResponsiveGridLayout
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 3, sm: 3, xs: 2, xxs: 1 }}
          resizeHandles={["ne", "se", "sw", "nw"]}
        >
          <div className="bg-primary" key="welcome">
            <div className="p-2">Welcome !!</div>
          </div>
          <div className="bg-primary" key="streams">
            <div className="p-2">Stream</div>
          </div>
          <div className="bg-primary" key="contract-info">
            <div className="p-2">Contract balance</div>
          </div>
          <div className="bg-primary" key="living-room">
            <div className="p-2">living room</div>
          </div>
        </ResponsiveGridLayout>
      </div>
    </>
  );
};

export default Home;
