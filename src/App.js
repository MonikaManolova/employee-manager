import React from 'react';
import * as AppUI from './AppUI'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <AppUI.App>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Dashboard />
      </div>
      <Footer />
    </AppUI.App>
  );
}

export default App;
