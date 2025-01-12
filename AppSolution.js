```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} >
          <Route path="/:id" element={<ContactDetails />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() { console.log('Home rendered'); return <h1>Home</h1>; }
function About() { console.log('About rendered'); return <h1>About</h1>; }

function Contact() { 
  const location = useLocation();
  console.log('Contact rendered', location.pathname);
  return (
    <div>
      <h1>Contact</h1>
      {/* render children only if path is /contact/:id */}
      {location.pathname.startsWith('/contact/') && <Outlet />}
    </div>
  );
}

function ContactDetails() { console.log('ContactDetails rendered'); return <h1>Contact Details</h1>; }

// Added Outlet for nested routes
const Outlet = React.lazy(() => import('react-router-dom').then(module => ({default: module.Outlet})));
export default App; 
```