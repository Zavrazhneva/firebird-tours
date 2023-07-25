import s from './App.sass';
import { UsersContainer } from './components/Users/UsersContainer';


export const App = () => {
  return <div className={s.app}>
    <UsersContainer />
  </div>;
};