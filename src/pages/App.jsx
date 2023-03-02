import gitlogo from '../assets/github.png'

import {Container} from './style';

function App() {
  return (
    <Container>
      <img src={gitlogo} alt="Logo do github" width={72} height={72} />
    </Container>
  );
}

export default App;
