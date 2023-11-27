import Editor from '@monaco-editor/react';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('javascript');
  const files: any = {
    'script.py': {
      name: 'script.py',
      language: 'python',
      value: `print("hello world")`,
    },
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: '<div> </div>',
    },
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: `console.log("hello world")`,
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: 'body{margin: 0}',
    },
    'new file': {
      name: 'new file',
      language: language,
      value: '',
    },
  };
  const [fileName, setFileName] = useState('script.py');
  const [theme, setTheme] = useState('vs-light');
  const file = files[fileName];

  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <div className="header">
          <h1>Editor</h1>
          <div className="buttons">
            <button onClick={() => setFileName('script.py')}>
              Switch to script.py
            </button>
            <button onClick={() => setFileName('index.html')}>
              Switch to index.html
            </button>
            <button onClick={() => setFileName('script.js')}>
              Switch to script.js
            </button>
            <button onClick={() => setFileName('style.css')}>
              Switch to style.css
            </button>
            <button onClick={() => setFileName('new file')}>
              Switch to new file
            </button>
          </div>
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
          <Editor
            height="90vh"
            theme={theme}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
