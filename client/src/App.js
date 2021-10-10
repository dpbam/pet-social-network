import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";

const exampleProfile = {
  username: "Timbo",
  firstName: "Tim",
  lastName: "Primmer",
  email: "test@gmail.com",
  zipcode: "54321",
  image: "https://avatars.githubusercontent.com/u/28116353?v=4",
  pets: [{
    name: "Peppy",
    type: "dog",
    breed: "Bichon",
    age: 10,
    about: "Quis amet culpa incididunt elit sit exercitation reprehenderit sit nulla non ad laborum elit velit. Pariatur cupidatat reprehenderit esse id occaecat officia quis magna. Cupidatat duis labore dolor enim non pariatur. Do anim nostrud id enim. Do mollit incididunt eu reprehenderit ut incididunt.",
    owner: "Timbo",
    playdate: true,
    image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25134724/Bichon-Frise-standing-in-the-grass.jpg"
  },
  {
    name: "Ricky",
    type: "dog",
    breed: "Border Terrier",
    age: 11,
    about: "Velit labore consectetur aute cupidatat est ex ad veniam. Quis velit dolor cupidatat laborum veniam non pariatur ut eiusmod laboris consectetur id. Cillum consequat pariatur sunt aute proident laboris dolor duis proident amet officia nulla consectetur. Sit laboris cillum sint pariatur labore Lorem nulla dolor commodo. Laboris enim do culpa pariatur.",
    owner: "Timbo",
    playdate: false,
    image: "http://cdn.akc.org/content/hero/smiley_border_terrier_hero.jpg"
  },
  {
    name: "Red",
    type: "dog",
    breed: "Boxer",
    age: 11,
    about: "Consectetur pariatur id qui culpa ipsum sit consectetur eu non. Enim amet nulla magna esse mollit minim dolore eu esse ad sunt mollit. Est tempor culpa ullamco proident. Velit velit nulla incididunt in velit exercitation reprehenderit veniam do aliqua magna irure velit. Voluptate commodo ex minim amet ut laborum sint esse pariatur. Tempor qui dolor occaecat nostrud aute culpa sint nisi dolor mollit voluptate aliquip aliquip.",
    owner: "Timbo",
    playdate: true,
    image: "https://www.thesprucepets.com/thmb/h-1donXJH4OQv7XQjck1tsmD8Kk=/1885x1414/smart/filters:no_upscale()/Boxer-GettyImages-463043655-91a77226f5884b41915d50811e4e4e2b.jpg"
  }],
  posts: [
    { title: "Test post 1" },
    { title: "Test post 2" },
    { title: "Test post 3" },
    { title: "Test post 4" },
    { title: "Test post 5" }
  ]
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/profile" component={() => (<Profile profile={exampleProfile} />)} />
            {/* Possible solution to if a user hits a relative path that doesn't exist, can change later */}
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
