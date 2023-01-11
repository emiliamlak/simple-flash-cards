import Button from './components/Button/Button';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  return (
    <div>
      <PageTitle>SETS</PageTitle>
      <Button onClick={() => console.log('HI!')}>Default BUTTON</Button>
      <Button type="secondary" onClick={() => console.log('HI!')}>White BUTTON</Button>
    </div>
  );
}

export default App;
