import { useEffect } from 'react'

export default function Toast({ message, onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      style={{
        backgroundColor: 'var(--color-accent)', 
        color: '#fff',                        
        left: '50%',                            
        transform: 'translateX(-50%)',        
      }}
      className="fixed top-6 z-50 px-6 py-3 rounded-2xl font-bold text-sm shadow-lg animate-bounce"
    >
      {message}
    </div>
  )
}