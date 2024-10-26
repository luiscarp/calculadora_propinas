import { menuItems } from "./data/db";

function App() {
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto mt-20 bg-slate-300 grid md:grid-cols-2">
        <div className=" mx-auto">
          <h2>Menu</h2>
        </div>

        <div className=" mx-auto">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
