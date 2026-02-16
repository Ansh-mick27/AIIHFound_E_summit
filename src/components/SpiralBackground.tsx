export default function SpiralBackground() {
  return (
    <>
      <style jsx>{`
        @keyframes spiralScroll {
          0% {
            background-position: right 100%;
          }
          100% {
            background-position: right 0%;
          }
        }
      `}</style>
      <div
        className="absolute top-0 right-0 h-full w-[25vw] pointer-events-none"
        style={{
          backgroundImage: 'url(/images/spiral-stairs.png)',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'right center',
          backgroundSize: '100% auto',
          opacity: 0.8,
          animation: 'spiralScroll 20s linear infinite',
          zIndex: 1
        }}
      />
    </>
  );
}
