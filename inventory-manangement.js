const inventory = [];

const findProductIndex = (name) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const addProduct = (product) => {
    const lowerName = product.name.toLowerCase();
    const index = findProductIndex(lowerName);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${lowerName} quantity updated`);
    } else {
        inventory.push({ name: lowerName, quantity: product.quantity });
        console.log(`${lowerName} added to inventory`);
    }
};




const removeProduct = (name, quantity) => {
    const lowerName = name.toLowerCase();
    const index = findProductIndex(lowerName);

    if (index === -1) {
        console.log(`${lowerName} not found`);
        return;
    }

    if (inventory[index].quantity < quantity) {
        console.log(`Not enough ${lowerName} available, remaining pieces: ${inventory[index].quantity}`);
        return;
    }

    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1); // Remove product if quantity reaches 0
        console.log(`${lowerName} removed from inventory`);
    } else {
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);
    }
};

