import Link from "next/link";

interface ButtonProps {
  href?: string;
  target?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  variant = "normal",
  children,
}) => {
  let isInternal = false;
  if (href?.startsWith("/") || href?.startsWith("#")) isInternal = true;

  const classes = ["text-xl font-medium text-white w-max py-2 px-8 block"];

  if (variant === "normal") classes.push("bg-black");
  if (variant === "primary") classes.push("bg-indigo-600");

  const props = {
    target,
    title: children?.toString(),
    className: classes.join(" "),
  };

  if (href && isInternal === true)
    return (
      <Link href={href}>
        <a href={href} {...props}>
          {children}
        </a>
      </Link>
    );
  else if (href)
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  else return <button className={classes.join(" ")}>{children}</button>;
};

export default Button;
