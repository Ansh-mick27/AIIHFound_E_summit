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
        className="fixed top-0 right-0 bottom-0 w-[25vw] -z-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/spiral-stairs.png)',
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          opacity: 1.0,
          animation: 'spiralScroll 20s linear infinite'
        }}
      />
    </>
  );
}
