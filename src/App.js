import { Navigation } from './components'
import { Routes, Route } from 'react-router-dom'
import { ReportForm } from './components'

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/report" element={<ReportForm />} />
          {/* <Route exact path="/" element={Home} /> */}

        </Routes>

      </div>

    </div>
  );
}

export default App;
