import PageTitle from '@/components/ui/page-title';
import TopCards from './components/top-cards';
export default function DashboardPage() {

  return (
    <main>
     <PageTitle title="Dashboard" subtext='Overview the result'/>
     <TopCards />
    </main>
  )
}

