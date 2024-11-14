import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const { tip, setTip, placeOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menu</h2>
          <div className=" space-y-3 mt-3">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              ></MenuItem>
            ))}
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents state={state} dispatch={dispatch}></OrderContents>
              <TipPercentageForm setTip={setTip} tip={tip}></TipPercentageForm>
              <OrderTotals
                order={state.order}
                tip={tip}
                placeOrder={placeOrder}
              ></OrderTotals>
            </>
          ) : (
            <p className=" text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
