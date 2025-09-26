import React, { createContext, useContext, useState, ReactNode } from 'react'

type RouteType = 'home' | 'mou-shah' | 'mou-hitms' | 'mou-iiui' | 'mou-pakuraan' | 'mou-talpur' | 'mou-iconsult'

interface RouterContextType {
  currentRoute: RouteType
  navigate: (route: RouteType) => void
}

const RouterContext = createContext<RouterContextType | undefined>(undefined)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<RouteType>('home')

  const navigate = (route: RouteType) => {
    setCurrentRoute(route)
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}