import "node_modules/video-react/dist/video-react.css";

import "@/styles/globals.css";

import "../molecules/button/button.styles.css";
import "../components/navigation/navigation.styles.css";
import "../components/hero/hero.styles.css";
import "../components/intro/images.styles.css";
import "../components/academy-images/images.styles.css";

import "../components/intro/intro.styles.css";
import "../components/evaluate/evaluate.styles.css";
import "../components/evaluate/images.styles.css";

import "../components/footer/footer.styles.css";
import "../components/video/video.styles.css";
import "../components/founders/founders.styles.css";

import "../components/working-with/working-with.styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
