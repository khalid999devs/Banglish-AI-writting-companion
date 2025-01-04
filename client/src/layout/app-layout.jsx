import { Outlet } from 'react-router-dom';
import GradientObjects from '@/components/gradient_objects';
import NavBar from '@/components/nav_bar';

export default function AppLayout() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden'>
      <GradientObjects />
      <NavBar />
      <Outlet />
    </div>
  );
}
