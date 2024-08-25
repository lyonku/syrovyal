import * as React from "react";

function Cross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.13 10.13a.625.625 0 01.884 0L20 19.116l8.986-8.986a.625.625 0 11.884.884L20.884 20l8.986 8.986a.625.625 0 11-.884.884L20 20.884l-8.986 8.986a.625.625 0 11-.884-.884L19.116 20l-8.986-8.986a.625.625 0 010-.884z"
        fill={props.color ?? "#000"}
      />
    </svg>
  );
}

const MemoCross = React.memo(Cross);
export default MemoCross;
