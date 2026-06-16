import { useState, useEffect } from 'react';
import api from '../api/axios';
import { Plus, Trash2, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';

const statuses = ['Applied', 'Interview', 'Offer', 'Rejected'];

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await api.get('/jobs/');
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    if (!company || !role) return;
    try {
      await api.post('/jobs/', { company, role, status: 'Applied' });
      setCompany('');
      setRole('');
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/jobs/${id}`, { status });
      setJobs(jobs.map(job => job.id === id ? { ...job, status } : job));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await api.delete(`/jobs/${id}`);
      setJobs(jobs.filter(job => job.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Add Job Form */}
          <div className="lg:col-span-1">
            <div className="glass-card p-6 h-fit sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="h-5 w-5 text-blue-500" />
                Add Application
              </h2>
              <form onSubmit={handleCreateJob} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Company</label>
                  <input
                    type="text"
                    className="glass-input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Google"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Role</label>
                  <input
                    type="text"
                    className="glass-input"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Frontend Engineer"
                    required
                  />
                </div>
                <button type="submit" className="btn-gradient w-full py-2.5 mt-2 flex justify-center items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Save Application
                </button>
              </form>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : jobs.length === 0 ? (
              <div className="glass-card p-12 text-center border-dashed border-2 border-slate-700/50">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">No applications yet</h3>
                <p className="text-slate-400 mt-2">Add your first job application using the form to get started.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {jobs.slice().reverse().map((job) => (
                  <div key={job.id} className="glass-card p-5 transition-transform hover:scale-[1.01] duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{job.company}</h3>
                          <span className={`badge badge-${job.status}`}>{job.status}</span>
                        </div>
                        <p className="text-slate-400 mt-1 flex items-center gap-1.5">
                          {job.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <select
                          className="flex-1 sm:flex-none glass-input py-2 text-sm max-w-[150px]"
                          value={job.status}
                          onChange={(e) => updateStatus(job.id, e.target.value)}
                        >
                          {statuses.map(s => (
                            <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="p-2.5 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
