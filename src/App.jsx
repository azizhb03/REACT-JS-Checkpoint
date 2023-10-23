import "./App.css";
import TopNav from "./component/Nav";
import Cart from "./component/Card";

export default function App() {
  return (
    <>
      <TopNav />
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="\welcome.avif"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold">REACT JS Checkpoint!</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
          Welcome to my project
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              click me!
            </button>
          </div>
        </div>
      </div>
      <div
        className="container mt-10"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "relative",
          top: "25px",
        }}
      >
        <Cart
          img="public\react-1-logo-png-transparent.png"
          title="React JS"
          description="React JS est une bibliothèque JavaScript frontale à code source ouvert permettant de créer des interfaces utilisateur ou des composants d'interface utilisateur. Elle est maintenue par Facebook et une communauté de développeurs individuels et d'entreprises."
        />
        <Cart
          img="public\jsx.png"
          title="JSX"
          description="JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it."
        />
        <Cart
          img="public\es6.png"
          title="ES6"
          description="ES6 comes with significant changes to the JavaScript language. It brought several new features like, let and const keyword, rest and spread operators, template literals, classes, modules and many other enhancements to make JavaScript programming easier and more fun."
        />
      </div>
    </>
  );
}
