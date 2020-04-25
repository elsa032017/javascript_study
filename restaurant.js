// find a reastaurants api to show menus and images
// to show in owr website and allow user to choose from image
// then send that order to restaurant via post and confirm order via text or email
// add user cocation and deliveri live proccess event


const restaurants = {
  'Mcdonals': ['Hamburger', 'Mcmufin', 'apple pie', 'Milkshake'],
  'Chipotle': ['Bowl', 'Burrito', 'Quesadilla', 'tacos'],
  'tatsu': ['pork ramen', 'chicken ramen', 'veggie ramen', 'tofu ramen'],
  'Papa Jhons': ['hawaiian pizza', 'pepperoni pizza', 'veggie pizza', 'salami pizza']
}

const allFoods = []
var restaurantOrders;
var sendOrderToRestaurant;
const menus = Object.values(restaurants)
for (let menu = 0; menu < menus.length; menu++) {
  for (let food = 0; food < menus.length; food++) {
    allFoods.push(menus[menu][food])
    console.log(`would you like to eat ${menus[menu][food]}`)
  }
}

const order = allFoods[Math.floor(Math.random() * allFoods.length)];
console.log(`the order you pick is ${order}`)
for (let menu = 0; menu < menus.length; menu++) {
  for (let food = 0; food < menus.length; food++) {
    if (menus[menu][food] === order){
      restaurantOrders = Object.keys(restaurants)
      sendOrderToRestaurant = restaurantOrders[menu]
    }
  }
}

class DoorDashOrder {
  constructor(order){
    this.order = order
  }

  doorDashRecevesOrder(){
    return `this is the orderd ${this.order} we resived`
  }

 doorDashacceptsOrder(){
   return `we accepted your order ${this.order}`
 }

  doorDashSendOrderToRestaurant(){
    return `we have an order of ${this.order} to be prepared the restarutant ${sendOrderToRestaurant} will prepare soon`
  }

  restaurantReceivesOrder(){
    return `order ${this.order} received`
  }

  restaurantsendsOrderToKitchen(){
    return `prepare ${this.order} order`
  }

  kitchenPreparesFood(){
    return `order ${this.order} done`
  }

  restaurantNotifiesDriverOfFinishedOrder(){
    return `order ${this.order} ready to pick up`
  }

 driverPicksUpFood(){
   return ` driver has pick up your ${this.order} order `
 }

 driverDeliversFood(){
   return `driver is delivering your ${this.order} order`
 }


  runAll(){
    return `${this.doorDashRecevesOrder()}
            ${this.doorDashacceptsOrder()}
            ${this.doorDashSendOrderToRestaurant()}
            ${this.restaurantReceivesOrder()}
            ${this.restaurantNotifiesDriverOfFinishedOrder()}
            ${this.kitchenPreparesFood()}
            ${this.restaurantsendsOrderToKitchen()}
            ${this.driverPicksUpFood()}
            ${this.driverDeliversFood()}
    `
  }

}

let firstOrder = new DoorDashOrder(order)
console.log(firstOrder.runAll());
