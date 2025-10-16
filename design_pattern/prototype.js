const ProductPrototype = {
  clone(updates = {}) {
    return Object.assign(Object.create(ProductPrototype), this, updates);
  },
};

const baseLaptop = Object.assign(Object.create(ProductPrototype), {
  brand: "dell",
  ram: "8gb",
  color: "silver",
});

const laptop1 = baseLaptop.clone({ ram: "16gb" });
const laptop2 = baseLaptop.clone({ color: "black" });
const laptop3 = baseLaptop.clone({ brand: "hp", ram: "32gb" });

console.log(baseLaptop);
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
