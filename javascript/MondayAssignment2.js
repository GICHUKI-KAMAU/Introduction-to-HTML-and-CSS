const availableFoods = [
    { id: "qwe234dfh", name: "Burger", image: "🍔", price: 234 },
    { id: "qwe2356dxh", name: "Pizza", image: "🍕", price: 400 },
    { id: "qwe2456yh", name: "Meat", image: "🍗", price: 500 },
    { id: "qwe2785yh", name: "Chicken", image: "🍗", price: 1200 }
  ];
  
  const expensiveItems = availableFoods.filter(item => item.price > 450);
  
  const totalBill = expensiveItems.reduce((sum, item) => sum + item.price, 0);
  
  console.log(`My total bill for items above 450 is ${totalBill}`);
  