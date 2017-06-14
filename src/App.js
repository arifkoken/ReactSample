import React from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexLink } from 'react-router';

import AnaSayfa from './AnaSayfa/AnaSayfa';

import './App.css';

const App = () => <Menu />;

export default App;

const Hakkımızda = props =>
  <div>
    <h3>Hakkımızda Sayfası</h3>
    <h2>{props.params.isim}</h2>
  </div>;

const Address = props =>
  <div>
    <br />
    <IndexLink activeClassName="active" to="/address">Twitter Sayfası</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName="active" to="/address/instagram">Instagram Sayfası</IndexLink>
    <h1>Süleyman Demirel Üniversitesi Bilgi İşlem Daire Başkanlığıf</h1>
    {props.children}
  </div>;
const Instagram = () => <h3>Instagram Sayfası</h3>;
const TwitterFeed = () => <h3>Twitter Sayfası</h3>;

const HiyerarsikComponents = props =>
  <div>
    {props.title}
    {props.subTitle}
  </div>;
const Title = () => <h1>Başlık</h1>;
const SubTitle = () => <h1>Alt Başlık</h1>;

const Query = props => <h2>{props.location.query.message}</h2>;

const NotFound = () => <h1>404.. This page is not found!</h1>;

const Container = props => <div><Nav />{props.children}</div>;

//* *****************************************Menu Start
const Menu = () =>
  <Router history={hashHistory}>
    <Route path="/" component={Container}>
      <IndexRoute component={AnaSayfa} />
      <Route path="/address" component={Address}>
        <IndexRoute component={TwitterFeed} />
        <Route path="instagram" component={Instagram} />
      </Route>
      <Route path="/hiyerarsikComponents" component={HiyerarsikComponents}>
        <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
      </Route>
      <Route path="/hakkimizda(/:isim)" component={Hakkımızda} />
      <Route path="query" component={Query} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>;
//* *****************************************Menu End

const Nav = () =>
  <div>
    <IndexLink activeClassName="active" to="/">Ana Sayfaa </IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName="active" to="/address">Address</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName="active" to="/hakkimizda/arif">Hakkımızda</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName="active" to="/HiyerarsikComponents">
      Hiyerarsik Components Components
    </IndexLink>&nbsp;&nbsp;
    <IndexLink
      activeClassName="active"
      to={{ pathname: '/query', query: { message: 'Query Mesajı Denemesi' } }}
    >
      Route Query
    </IndexLink>
  </div>;
