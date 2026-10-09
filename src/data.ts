// All personal details, apps, and upcoming projects are edited here.
export const profile = {
  journeyStartDate: '2025-03-28', name: 'Nishit Dave', domain: 'nishitdave.dev',
  email: 'nishit@nishitdave.dev' as string | null,
  socials: { GitHub: 'https://github.com/nishit-dave', X: 'https://x.com/Nishit_Dave_' } as Record<string, string | null>,
  appStore: 'https://apps.apple.com/us/developer/nishit-dave/id1807529288',
};
export const apps = [
  { id: '6797847280', releaseDate: '2026-09-01', name: 'Never: Quit Lust & Control', shortName: 'Never', category: 'Health & Fitness', tagline: 'Make room for a better you.', description: 'A habit-change app with streak tracking and tools to help manage urges and build self-control.', color: '#e6e9df', label: 'Habits & self-control' },
  { id: '6765836514', releaseDate: '2026-05-07', name: 'Bitey: AI Calorie Tracker', shortName: 'Bitey', category: 'Health & Fitness', tagline: 'Food tracking, without the friction.', description: 'Log meals with text, voice, or a photo. AI helps estimate calories and macros in a simple food journal.', color: '#eee7da', label: 'AI & nutrition' },
  { id: '6758268967', releaseDate: '2026-02-16', name: 'Stay Fit: Workout Tracker', shortName: 'Stay Fit', category: 'Health & Fitness', tagline: 'A little structure. A stronger routine.', description: 'Personal workout plans, exercise logging, strength insights, and recovery tracking for home or gym training.', color: '#e3e7e8', label: 'Training & progress' },
  { id: '6755719229', releaseDate: '2025-12-03', name: 'Cram AI - Study Notes, Quiz', shortName: 'Cram AI', category: 'Education', tagline: 'From information to understanding.', description: 'Turn videos, documents, images, and recordings into study notes, flashcards, quizzes, and mind maps.', color: '#ebe5ed', label: 'AI & learning' },
  { id: '6749707513', releaseDate: '2025-08-26', name: 'FitChase: Gym & Home Workouts', shortName: 'FitChase', category: 'Health & Fitness', tagline: 'Your workout. Wherever you are.', description: 'Home and gym workout routines with personalized plans, reminders, and progress tracking.', color: '#e8e8de', label: 'Fitness & wellbeing' },
].map(app => ({ ...app, url: `https://apps.apple.com/us/app/id${app.id}`, icon: `apps/${app.id}-icon.jpg`, screenshots: [0, 1, 2].map(n => `apps/${app.id}-${n}.jpg`), verifiedAt: '2026-10-08' }));
export const upcoming = [{ name: 'Clipzer', startDate: '2026-07-02', url: 'https://clipzer.app/', status: 'In Development', description: 'An AI-powered video repurposing product. I’m exploring ways to help turn long-form video into content for new formats and audiences.' }];
export const skills = ['Flutter & Dart', 'Mobile application development', 'UI/UX implementation', 'SQLite & offline-first apps', 'API integration', 'AI-powered product development', 'Web development'];




