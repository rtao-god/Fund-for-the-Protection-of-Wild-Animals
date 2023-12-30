interface PawTextProps {
  className?: string
  text?: string
}

export default function PawText({ className, text }: PawTextProps) {
  return <p className={className}> {text} </p>
}
