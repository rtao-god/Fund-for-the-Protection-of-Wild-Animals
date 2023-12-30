interface VectorProps {
  className?: string;
}

export default function Vector({ className }: VectorProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="62" height="5" viewBox="0 0 62 5" fill="none">
      <path d="M2 2.19434H60" stroke="#362E2C" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
