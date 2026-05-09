import React from 'react';

const AddCourse = () => {
  return (
    <div className="flex-1 flex flex-col grainy-bg min-h-screen">
      <section className="relative pt-16 pb-12 px-6 md:px-20 overflow-hidden border-b border-primary/10">
        <div className="scanline absolute inset-0 opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-4 bg-accent-red text-white text-[10px] font-black tracking-[0.3em] uppercase rounded-sm">
            Access Level: ARCHIVE_ADMIN
          </div>
          <h1 className="text-slate-100 text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic select-none">
            Add New<br />
            <span className="text-primary">Course</span>
          </h1>
          <p className="mt-6 text-primary/60 text-sm font-bold uppercase tracking-[0.4em] max-w-xl">
            Create a new course module for the archive
          </p>
        </div>
        <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-primary">add_circle</span>
        </div>
      </section>

      <div className="px-6 md:px-20 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-background-dark border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-100 mb-6">
              Course Details
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background-dark border border-primary/30 rounded-sm text-slate-100 font-medium focus:border-primary focus:outline-none"
                  placeholder="Enter course title"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-background-dark border border-primary/30 rounded-sm text-slate-100 font-medium focus:border-primary focus:outline-none h-32 resize-none"
                  placeholder="Enter course description"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                    Level
                  </label>
                  <select className="w-full px-4 py-3 bg-background-dark border border-primary/30 rounded-sm text-slate-100 font-medium focus:border-primary focus:outline-none">
                    <option>BEGINNER</option>
                    <option>INTERMEDIATE</option>
                    <option>ADVANCED</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 bg-background-dark border border-primary/30 rounded-sm text-slate-100 font-medium focus:border-primary focus:outline-none">
                    <option>Backend</option>
                    <option>Low-Level</option>
                    <option>Security</option>
                    <option>Architecture</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-primary mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-background-dark border border-primary/30 rounded-sm text-slate-100 font-medium focus:border-primary focus:outline-none"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-primary/30 text-primary font-black uppercase text-sm rounded-sm hover:bg-primary hover:text-background-dark transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-background-dark font-black uppercase text-sm rounded-sm hover:bg-white transition-colors"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;