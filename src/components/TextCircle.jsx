export default function TextCircle({
  index,
  line,
  diameter,
  numCircles,
  animationsOn,
}) {
  const lineLength = line.length;
  const radius = diameter / 2;
  const direction = index % 2 ? "clockwise" : "counterclockwise";
  const duration = (index + 2) * 10 + "s";
  const opacity = 1 - index * (1 / numCircles);

  return (
    <div
      className={`circle ${direction}`}
      style={{
        height: diameter,
        width: diameter,
        animationDuration: animationsOn ? duration : "0s",
        opacity: opacity,
      }}
    >
      {line.split("").map((char, i) => (
        <span
          style={{
            transform: `rotate(${i * (360 / lineLength)}deg)`,
            transformOrigin: `0 ${radius}px`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
