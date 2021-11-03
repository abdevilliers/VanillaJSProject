
pl.view.addProduct = {
    setupUserInterface: function () {
      var saveButton = document.forms['Product'].commit;
      // load all book objects
      Product.loadAll();
      // Set an event handler for the save/submit button
      saveButton.addEventListener("click", 
          pl.view.addProduct.handleSaveButtonClickEvent);
      window.addEventListener("beforeunload", function () {
          Product.saveAll(); 
      });
    },
    // save user input data
    handleSaveButtonClickEvent: function () {
      var formEl = document.forms['Product'];
      var newProd = { pdId: formEl.pdId.value, 
          pdName: formEl.pdName.value, 
          qtyAvail: formEl.qtyAvail.value};
      Product.add( newProd);
      Product.saveAll();
      formEl.reset();
    }
  };