pl.view.searchProduct = {
    setupUserInterface: function () {
        var saveButton = document.forms['Product'].commit;
        saveButton.addEventListener("click", 
        pl.view.searchProduct.handleSaveButtonClickEvent);
    
    },
    handleSaveButtonClickEvent: function () {
        console.log("inside event handler");
        var formEl = document.forms['Product'];
        var tableBodyEl = document.querySelector("table#products>tbody");
        var keys=[], key="", row={}, i=0;
       console.log(localStorage.getItem("products"));
        Product.loadAll();
        keys = Object.keys( Product.instances);
        console.log(keys.length);
        console.log("inside js"+Product.newarr.length);
       
        for (i=0; i < keys.length; i++) {
          key = keys[i];
          if(Product.instances[key].pdName.indexOf(formEl.pdName.value)!=-1){
          row = tableBodyEl.insertRow();
          row.insertCell(-1).textContent = Product.instances[key].pdId;      
          row.insertCell(-1).textContent = Product.instances[key].pdName;  
          row.insertCell(-1).textContent = Product.instances[key].qtyAvail;
          }
        }
       
        formEl.reset();
      }
  };

  