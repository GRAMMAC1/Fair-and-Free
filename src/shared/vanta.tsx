import Script from "next/script";

export function Vanta({ onReady }: { onReady: () => void }) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js" />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        onReady={onReady}
      />
    </>
  );
}

export default Vanta;
