var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25
}

// to know the values
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];

// to know the object keys only
var properties = Object.keys(shoppingCart);

// to know the object values only
var propertiesValues = Object.values(shoppingCart);

// to know key and values
var propertyName = "book";
var propertyValue = shoppingCart[propertyName];

// console.log(propertyName,propertyValue);


// set property value
shoppingCart.mouse = 15;
shoppingCart["mouse"] = 29;
shoppingCart[propertyName] = 89;
console.log(shoppingCart);