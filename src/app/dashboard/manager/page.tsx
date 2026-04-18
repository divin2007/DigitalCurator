"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ManagerDashboard() {
  const [workers, setWorkers] = useState([
    { id: 1, name: "Divine Kariza", role: "Senior Curator", activeTasks: 12, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxJNIMk-rrlMJQidp8f1Zehi2r03TcL6QczYBeDNh9w5iK_wzZsJtkF0ALM0kH4lpc8WzfFx1-qzQTcRba5xDPBUl31HIM5TIez5i536HVei9YmRzpczKRJxUZ9je13hh2t7DZRT9N7s4G-MGRiY8N8p7FLNn2a6N1f1ve_R0nz9VILGtDE9PyfgzaeYdHQB5AujDRnZxImzL4ANJ8FoFIGtYSIKmBgjjaOubqG7vlpd2WmO9nyy0_hoDDX76LUQ_9qfeBxzlikzc" },
    { id: 2, name: "Emmanuel Karemera", role: "Property Consultant", activeTasks: 8, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE9XoBARxFbNT-aemmrSq0d841iXSNi7NFN6HgeIhY16egLISfVgsUfXqMRQrP68EGdOIoRpyq5Hm0AfPpcTbCZrE3egMYbXU0knCBq-T4ZAWp-ibVTrUS9vTQ_MT-sZczVbffbJmtFaE71Pt_w0eF4c3ltZTa6QQ5nYz6CxD2P-znawDc-qrcK7rQjlEgFQBIm1BnqmiuURKDR7WZBvWNjJXdx38MqwUyKn_zaeqMOi--2s1n6lIJoM_VMuTa9bmqgmRhKcohdUc" },
    { id: 3, name: "Jean-Paul Karekezi", role: "Acquisition Expert", activeTasks: 5, imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbi_d8hT-IpSleSyHKO83dKyDGA_Q3VlC2wFfiUYSFouO6RW0Ti3_bu1KmvZAW_AK01g9eyz0V3wLLcz0zoYSFSECIsFQiM4ozya9bPLS6hOHPCO7bHJoLDaLRhYy0v-Z8Wv7sM1UZVOyjBPC0kaqUCh2xTYeMhfDYWH7FdHTSQOFyBt5C1TcOTBKPj_NHvZtGPozz4y3mXGQzKpDTIBWXaGaHCEHPpLHnBmmDFytZpN9EU9ljU0bSq9NZiM2vpRVv3c13ce-CCsI" },
  ]);

  const [tasks, setTasks] = useState([
    { id: 101, title: "Nyarutarama Inquiry Review", assignedTo: 1, priority: "High", status: "In Progress" },
    { id: 102, title: "Kivu Emerald Valuation", assignedTo: 2, priority: "Medium", status: "Pending" },
    { id: 103, title: "Rebero Site Visit", assignedTo: 3, priority: "High", status: "Assigned" },
  ]);

  const [selectedWorker, setSelectedWorker] = useState<number | null>(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const assignTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWorker || !taskTitle) return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      assignedTo: selectedWorker,
      priority: "Medium",
      status: "Assigned"
    };

    setTasks([...tasks, newTask]);
    const workerName = workers.find(w => w.id === selectedWorker)?.name;
    setWorkers(workers.map(w => w.id === selectedWorker ? { ...w, activeTasks: w.activeTasks + 1 } : w));
    setTaskTitle("");
    setSuccessMessage(`Task successfully distributed to ${workerName}`);
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
        <header className="mb-16">
          <span className="label-sm text-[0.6875rem] uppercase tracking-[0.1em] text-primary font-bold font-label">Management Portal</span>
          <h1 className="text-5xl font-headline font-bold tracking-tight text-on-surface mt-2">Executive Overview</h1>
          <p className="text-on-surface-variant max-w-md font-body mt-4">Manage your elite team of curators and distribute property leads with precision.</p>
          {successMessage && (
            <div className="mt-8 p-4 bg-primary/10 text-primary border border-primary/20 rounded-sm font-body text-sm flex items-center gap-3">
              <span className="material-symbols-outlined">check_circle</span>
              {successMessage}
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Workers List */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl font-headline font-semibold">Curation Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workers.map(worker => (
                <div key={worker.id} className="bg-surface-container-low p-6 rounded-sm editorial-shadow flex items-center gap-6 border border-outline-variant/10">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden grayscale shrink-0">
                    <Image src={worker.imageUrl} alt={worker.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-lg">{worker.name}</h4>
                    <p className="text-xs text-primary font-label uppercase tracking-widest">{worker.role}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-2xl font-headline">{worker.activeTasks}</span>
                      <span className="text-[0.65rem] uppercase tracking-widest text-on-surface-variant font-label">Active Tasks</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedWorker(worker.id)}
                    className={`p-2 rounded-full transition-all ${selectedWorker === worker.id ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-primary/10'}`}
                  >
                    <span className="material-symbols-outlined">add_task</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-12">
              <h2 className="text-2xl font-headline font-semibold mb-8">Active Assignments</h2>
              <div className="bg-surface-container-lowest rounded-sm border border-outline-variant/20 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low text-[0.6875rem] uppercase tracking-widest font-bold text-on-surface-variant font-label">
                      <th className="px-6 py-4">Task</th>
                      <th className="px-6 py-4">Assigned To</th>
                      <th className="px-6 py-4">Priority</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {tasks.map(task => (
                      <tr key={task.id} className="font-body text-sm hover:bg-surface-container-low/50 transition-colors">
                        <td className="px-6 py-4 font-headline font-bold">{task.title}</td>
                        <td className="px-6 py-4">{workers.find(w => w.id === task.assignedTo)?.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase ${task.priority === 'High' ? 'bg-error-container text-on-error-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 italic text-on-surface-variant">{task.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Task Assignment Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-inverse-surface text-white p-10 rounded-sm editorial-shadow sticky top-32">
              <h3 className="font-headline text-2xl mb-8">Assign New Task</h3>
              <form className="space-y-8" onSubmit={assignTask}>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-primary-fixed-dim font-bold font-label">Lead / Activity</label>
                  <input
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary-fixed-dim transition-colors text-sm"
                    placeholder="e.g. Schedule Private Viewing"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.6875rem] uppercase tracking-widest text-primary-fixed-dim font-bold font-label">Assign To</label>
                  <select
                    value={selectedWorker || ""}
                    onChange={(e) => setSelectedWorker(Number(e.target.value))}
                    className="w-full bg-transparent border-0 border-b border-outline-variant py-2 focus:ring-0 focus:border-primary-fixed-dim transition-colors text-sm appearance-none"
                    required
                  >
                    <option value="" disabled className="text-zinc-900">Select Curator</option>
                    {workers.map(w => (
                      <option key={w.id} value={w.id} className="text-zinc-900">{w.name}</option>
                    ))}
                  </select>
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary text-white">Distribute Task</Button>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
