import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button onClick={() => console.log('HI!')}>Default BUTTON</Button>
      <Button type="secondary" onClick={() => console.log('HI!')}>White BUTTON</Button>
    </div>
  );
}

export default App;
