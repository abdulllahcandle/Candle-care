
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const products = [
  {
    name: "شمعة لوشن - فانيلا كيك",
    price: "250 جنيه",
    description: "شمعة طبيعية تتحول إلى لوشن غني بزبدة الشيا برائحة فانيلا كيك.",
    image: "https://via.placeholder.com/300x200.png?text=Vanilla+Cake+Lotion+Candle"
  },
  {
    name: "شمعة لوشن - كنافة",
    price: "260 جنيه",
    description: "شمعة مرطبة فاخرة بزيوت طبيعية ورائحة الكنافة الشرقية.",
    image: "https://via.placeholder.com/300x200.png?text=Kunafa+Lotion+Candle"
  },
  {
    name: "شمعة لوشن - قمر الدين",
    price: "240 جنيه",
    description: "شمعة عطرية تتحول إلى كريم خفيف على البشرة برائحة قمر الدين.",
    image: "https://via.placeholder.com/300x200.png?text=Qamar+Eldin+Lotion+Candle"
  }
];

export default function LotionCandleStore() {
  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-pink-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        متجر شموع تتحول إلى لوشن
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="rounded-2xl shadow-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-pink-700 mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-pink-800">{product.price}</span>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white">أضف إلى السلة</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">اشترك ليصلك كل جديد</h2>
        <div className="flex gap-2">
          <Input placeholder="بريدك الإلكتروني" className="flex-1" />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white">اشترك</Button>
        </div>
      </div>
    </main>
  );
}
