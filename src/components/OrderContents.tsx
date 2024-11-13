import { formatCurrency } from "../helpers";
import { OrderState } from "../reducers/order-reducer";
import { MenuItem, OrderItem } from "../types";

type orderContentsProps = {
  state: OrderState
  removeItem: (item: MenuItem["id"]) => void;
};

export default function OrderContents({
  state,
  removeItem,
}: orderContentsProps) {
  return (
    <div>
      <h2 className=" font-black text-4xl">Consumo</h2>
      <div className=" space-y-3 mt-3">
        {state.order.map((item) => (
          <div
            className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className=" text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>

              <p className=" font-black">
                cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className=" bg-red-600 h-8 w-8 rounded-full text-white font-blackß"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
