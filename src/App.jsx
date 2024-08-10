
import './App.css'

import PlayerProfile from './components/PlayerProfile/PlayerProfile';

const App = () => {
  const player = {
    name: 'Златан Иброгимовичь',
    group: '2011(2)',
    paid: true,
    balance: 1000,
    lessons: 16,
    attended: 0,
    adjustment: 0, // Пример перерасчета
    nextMonthBalance: 0
  };

  return (
    <div>
      <h1>Журнал посещаемости</h1>
      <PlayerProfile player={player} />
    </div>
  );
};

export default App;