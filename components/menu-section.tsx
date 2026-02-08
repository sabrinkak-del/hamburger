"use client"

import { BurgerCard } from "@/components/burger-card"

const burgers = [
  {
    name: "Classic Burger",
    description: "קציצת בקר, חסה, עגבנייה, בצל",
    price: "₪45",
  },
  {
    name: "Cheese Burger",
    description: "בקר, גבינת צ׳דר, חמוצים",
    price: "₪49",
  },
  {
    name: "Double Burger",
    description: "שתי קציצות, גבינה, רוטב הבית",
    price: "₪59",
  },
]

export function MenuSection() {
  return (
    <section className="px-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">התפריט שלנו</h2>
      <div className="flex flex-col gap-5">
        {burgers.map((burger) => (
          <BurgerCard key={burger.name} {...burger} />
        ))}
      </div>
    </section>
  )
}
