import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Beranda from './Component/Beranda';
import Sejarah from './Component/Sejarah';
import KepalaSekolah from './Component/KepalaSekolah';
import Guru from './Component/Guru';
import Jurusan from './Component/Jurusan';
import AlamatKontak from './Component/AlamatKontak';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Beranda} />
        <Link path="/Sejarah" exact component={Sejarah} />
        <Link path="/KepalaSekolah" exact component={KepalaSekolah} />
        <Link path="/Guru" exact component={Guru} />
        <Link path="/Jurusan" exact component={Jurusan} />
        <Link path="/AlamatKontak" exact component={AlamatKontak} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
