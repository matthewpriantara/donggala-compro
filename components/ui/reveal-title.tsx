import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactNode,
} from "react";

function renderWords(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(/(\s+)/).map((word, index) =>
        /^\s*$/.test(word) ? (
          word
        ) : (
          <span
            key={index}
            className="title-reveal-word"
            style={{ display: "inline-block" }}
          >
            {word}
          </span>
        ),
      );
    }
    if (
      isValidElement<{ children?: ReactNode }>(child) &&
      child.props.children &&
      !["a", "button"].includes(String(child.type))
    ) {
      return cloneElement(child, undefined, renderWords(child.props.children));
    }
    return child;
  });
}

/** Render the final word structure on the server so animation never rewrites React's DOM. */
export function RevealTitle({
  as: Tag = "h2",
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" }) {
  return (
    <Tag {...props}>{Tag === "h1" ? renderWords(children) : children}</Tag>
  );
}
