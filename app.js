class OrderBuilder {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
    return this;
  }
  setAddress(address) {
    this.address = address;
    return this;
  }
  setPaymentMethod(paymentMethod) {
    this.paymentMethod = paymentMethod;
    return this;
  }
  build() {
    return new Order(this);
  }
}
