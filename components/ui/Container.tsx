import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[1600px] px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}