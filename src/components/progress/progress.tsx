import "./progress.css";

interface Props {
  duration: number;
}

export const Progress = (props: Props) => {
  const { duration } = props;
  return (
    <div
      className="progress"
      style={{
        animationDuration: `${duration}s`,
        animationFillMode: "forwards",
      }}
    >
      Animation
    </div>
  );
};
