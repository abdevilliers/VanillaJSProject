pl.view.deleteProduct = {
    setupUserInterface: function () {
        var saveButton = document.forms['Product'].commit;
        saveButton.addEventListener("click", 
        pl.view.deleteProduct.handleSaveButtonClickEvent);
    
    },
    handleSaveButtonClickEvent: function () {
        console.log("inside event handler");
        var formEl = document.forms['Product'];
      
        var keys=[], key="", row={}, i=0;
       console.log(localStorage.getItem("products"));
        Product.loadAll();
        keys = Object.keys( Product.instances);
        console.log(keys.length);
        console.log("inside js"+Product.newarr.length);
       var flag=1;
        for (i=0; i < keys.length; i++) {
          key = keys[i];
          if(Product.instances[key].pdName.indexOf(formEl.pdName.value)!=-1){
          flag=0;
          Product.destroy(Product.instances[key].pdId);
          Product.saveAll();
          break;
          }
        }
        if(flag==1)
        {
            alert("Product not found");
        }
        else{
            alert("Product deleted successfully");
        }
       
        formEl.reset();
      }
  };

  