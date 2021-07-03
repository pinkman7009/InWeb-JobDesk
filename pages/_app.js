import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import AuthState from "../context/auth/AuthState";
import PredictionState from "../context/predictions/PredictionState";

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <PredictionState>
        <Component {...pageProps} />
      </PredictionState>
    </AuthState>
  );
}

export default MyApp;
