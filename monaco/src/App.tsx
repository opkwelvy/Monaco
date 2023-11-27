import Editor from '@monaco-editor/react';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs-light');
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <div className="header">
          <h1>Editor</h1>
          <div>
            <div className="select-section">
              <label htmlFor="language">Language</label>
              <select
                name="language"
                id="language"
                onChange={({ target }) => setLanguage(target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="css">CSS</option>
              </select>
            </div>
            <div className="select-section">
              <label htmlFor="theme">Theme</label>
              <select
                id="theme"
                name="theme"
                value={theme}
                onChange={({ target }) => setTheme(target.value)}
              >
                <option value="vs-light">Light</option>
                <option value="vs-dark">Dark</option>
                <option value="hc-black">High Contrast</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <Editor language={language} height="90vh" theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
