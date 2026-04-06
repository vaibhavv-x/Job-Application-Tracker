import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Briefcase, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="glass-card mb-8 rounded-none border-t-0 border-l-0 border-r-0 border-b border-glass-border bg-slate-900/50 sticky top-0 z-10 w-full backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-white">JobTracker</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 text-sm hidden sm:block font-medium">{user.email}</span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
