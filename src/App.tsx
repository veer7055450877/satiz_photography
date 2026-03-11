import { Routes, Route, useLocation } from 'react-router-dom';
import { FloatingNav } from './components/layout/FloatingNav';
import { FloatingControls } from './components/layout/FloatingControls';
import { CustomCursor } from './components/ui/CustomCursor';
import { CursorProvider } from './context/CursorContext';
import { Home } from './pages/Home';
import { StoriesPage } from './pages/StoriesPage';
import { JournalPage } from './pages/JournalPage';
import { JournalPostPage } from './pages/JournalPostPage';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <CursorProvider>
      <div className="font-sans text-primary bg-background min-h-screen selection:bg-white selection:text-black">
        <CustomCursor />

        {/* Only show Floating Nav on Home page for anchor scrolling */}
        {location.pathname === '/' && <FloatingNav />}

        <FloatingControls />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:id" element={<JournalPostPage />} />
        </Routes>
      </div>
    </CursorProvider>
  );
}

export default App;
