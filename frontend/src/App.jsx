import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ResearchPaper from './components/ResearchPaper';
import CourseItem from './components/CourseItem';
import Calendar from './components/Calendar';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8eef5] flex flex-col">
      <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className="flex-1 lg:ml-[260px] p-6 transition-all">
          <div className="max-w-6xl mx-auto">
            <header className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800 uppercase">University Lecturer</h2>
              <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center text-white">👤</div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                {/* Research Section */}
                <section className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Research Papers</h3>
                  <ResearchPaper title="Deep Learning Approaches" size="1.2 MB" status="APPROVED" />
                  <ResearchPaper title="Social Media Impacts" size="800 KB" status="IN REVIEW" />
                  <ResearchPaper title="Renewable Energy Strategies" size="620 KB" status="REJECTED" />
                </section>

                {/* Courses Section */}
                <section className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold mb-4">My Courses</h3>
                  <CourseItem title="Introduction to Sociology" schedule="Tue, Thu 10:00 AM – 11:30 AM" code="SOC101" />
                  <CourseItem title="Data Structures" schedule="Mon, Wed, Fri 2:00 PM – 3:30 PM" code="CSC201" />
                  <CourseItem title="Modern Political Thought" code="POL303" />
                </section>
              </div>

              {/* Sidebar Section */}
              <div className="xl:col-span-1">
                <Calendar />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;