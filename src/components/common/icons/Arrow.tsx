interface ArrowProps {
  className?: string
}

export default function Arrow({ className }: ArrowProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        d="M16.3302 2.92004L3 16.3914M3 16.3914L18 29.8626M3 16.3914H33"
        stroke="#F16835"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  )
}
