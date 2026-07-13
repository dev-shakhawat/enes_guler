 

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="container mx-auto px-2 max-w-330  ">
        {children}
    </div>
  )
}