import './app.css'

function App() {
  return (
  <div className='app'>
    <section className='side-bar'>
      <button>+ New chat</button>
      <div className='chat-history'>
      </div>
      <div className='nav'>
        <p>Made by Harsha</p>
      </div>
    </section>
    <section className='main'>
      <h1> Clone GPT</h1>
        <div className='input-field'>
        <input placeholder='Send a message'></input>
        <div id='submit'>***</div>
        </div>
        <div className='footer'>
        <p>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT May 24 Version</p>
      </div>
    </section>
  </div>);
}

export default App;
