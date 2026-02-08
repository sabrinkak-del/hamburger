"use client"

interface BurgerCardProps {
  name: string
  description: string
  price: string
}

export function BurgerCard({ name, description, price }: BurgerCardProps) {
  function handleOrder() {
    alert("הזמנת: " + name + " 🍔")
  }

  return (
    <div className="bg-[hsl(0,0%,11%)] p-5 rounded-[0.625rem]">
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-gray-300 mb-2">{description}</p>
      <span className="text-lg font-bold text-white">{price}</span>
      <div className="mt-3">
        <button
          onClick={handleOrder}
          className="px-5 py-2.5 bg-[#ffb703] text-[hsl(0,0%,7%)] font-semibold border-none rounded-md cursor-pointer hover:bg-[#ffa200] transition-colors"
        >
          הזמן
        </button>
      </div>
    </div>
  )
}
