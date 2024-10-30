function Header() {
  return <h1>WEAREONE</h1>
}

function Nav() {
  return <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
}

function Main() {
  return <section>WEAREONE</section>
}

function Footer() {
  return <section>WEAREONE</section>
}

function App() {
  return <>
    <Header />
    <Nav />
    <Main />
    <Footer />
  </>
}
export default App;