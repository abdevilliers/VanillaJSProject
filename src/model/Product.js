
 function Product( pProduct) {
    this.pdId = pProduct.pdId;
    this.pdName = pProduct.pdName;
    this.qtyAvail = pProduct.qtyAvail;
  };

  Product.instances = {};  // initially an empty associative array
  Product.newarr=[];
  

  Product.convertRow2Obj = function (ProductRow) {
    var Productdtls = new Product( ProductRow);
    return Productdtls;
  };
  // Load the book table from Local Storage
  Product.loadAll = function () {
    var key="", keys=[], ProductsString="", products={}, i=0;  
    try {
      if (localStorage.getItem("products")) {
        ProductsString = localStorage.getItem("products");
      }
    } catch (e) {
      alert("Error when reading from Local Storage\n" + e);
    }
    if (ProductsString) {
      products = JSON.parse( ProductsString);
      keys = Object.keys( products);
      console.log( keys.length +" products loaded.");
      for (i=0; i < keys.length; i++) {
        key = keys[i];
        Product.instances[key] = Product.convertRow2Obj( products[key]);
      }
    }
  };
  //  Save all book objects to Local Storage
  Product.saveAll = function () {
    var ProductsString="", error=false,
        nmrOfProducts = Object.keys( Product.instances).length;  
        console.log("the size of instances"+nmrOfProducts);
        console.log("the size of array is"+Product.newarr.length);
    try {
      ProductsString = JSON.stringify( Product.instances);
      localStorage.setItem("products", ProductsString);
    } catch (e) {
      alert("Error when writing to Local Storage\n" + e);
      error = true;
    }
    if (!error) console.log( nmrOfProducts + " products saved.");
  };
  //  Create a new book row
  Product.add = function (newProd) {
    var productVar = new Product( newProd);
    Product.newarr.push(productVar);
    Product.instances[newProd.pdId] = productVar;
    console.log("Product " + productVar.pdId + " created!");
  };
  //  Update an existing book row
  Product.update = function (newProd) {
    var productVar = Product.instances[newProd.pdId];
    var qtyAvail = parseInt( newProd.qtyAvail);
    
    if (productVar.qtyAvail !==newProd.qtyAvail) { productVar.qtyAvail = qtyAvail;}
    console.log(" Product " + newProd.pdId + " modified!");
  };
  //  Delete a book row from persistent storage
  Product.destroy = function (pdId) {
    if (Product.instances[pdId]) {
      console.log("Product " + pdId + " deleted");
      delete Product.instances[pdId];
    } else {
      console.log("There is no product with productId " + pdId + " in the database!");
    }
  };
