const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-md",
  pill: "rounded-md md:rounded-lg lg:rounded-xl",
} as const;
const variants = {
  fill: {
    black_900: "bg-black-900 text-white hover:bg-gray-800",
    red_300: "bg-red-300 shadow-sm",
    cyan_400: "bg-cyan-400 shadow-md",
    lime_800: "bg-lime-800 shadow-lg",
    red_400_01: "bg-red-400_01",
    green_600: "bg-green-600 shadow-3xl text-white",
  },
  outline: {
    black_900: "border-black-900 border-[3px] border-solid text-black-900",
  },
} as const;
const sizes = {
  xs: "h-10 px-3",
  sm: "h-12 px-8 text-xl",
  md: "h-14 px-9 text-base",
  lg: "h-16 px-6",
} as const;

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
  color?: string;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function Button({
  variant = "fill",
  size = "xs",
  shape = "round",
  children,
  className = "",
  leftIcon,
  rightIcon,
  color = "text-black",
}: Props) {
  return (
    <button
      className={`round ${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
}

export default Button;
