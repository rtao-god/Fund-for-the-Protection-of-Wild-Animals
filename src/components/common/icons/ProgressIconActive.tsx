interface ProgressIconActiveProps {
  className?: string
}

export default function ProgressIconActive({ className }: ProgressIconActiveProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="290"
      height="4"
      viewBox="0 0 290 4"
      fill="none"
    >
      <path d="M0 2.00024L289.454 2.00022" stroke="#F16835" strokeWidth="4" />
    </svg>
  )
}
