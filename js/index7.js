const pricePerDroid = "800";
const orderedQuantity = "6"
const deliveryFee = "50"
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${50} credits) is included in total price.`
console.log(message)