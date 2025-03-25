import { Metadata } from 'next'
import HeaderDashboard from './components/header-dashboard'
import TabsSection from './components/tabs-section'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}
export default function HomePage() {
  return (
    <div className='pl-10 pr-10 mb-10 -mt-5'>
      <HeaderDashboard />
      <TabsSection />
    </div>
  )
}
