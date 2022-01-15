import Header from './components/Header';
import BasicSection from './components/BasicSection';

import { AboutUs, HowToApply } from './utils/constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BasicSection 
        textFirst={AboutUs.textFirst}
        imageUrl={AboutUs.imageUrl}
        title={AboutUs.title}
        description={AboutUs.description}
        additionalInfo={AboutUs.additionalInfo}
      />
      <BasicSection 
        textFirst={HowToApply.textFirst}
        imageUrl={HowToApply.imageUrl}
        title={HowToApply.title}
        description={HowToApply.description}
      />
    </div>
  );
}

export default App;
