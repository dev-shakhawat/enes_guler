 
export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="mx-auto max-w-330 px-4 ">
        {children}
    </div>
  )
}