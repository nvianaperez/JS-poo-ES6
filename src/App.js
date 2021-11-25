import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour: 
    // un formulario por defecto cuando se envía se refresca para esperar la respuesta del servidor. 
    // le pasamos este evento a la función (e) y luego llamamos al evento con preventDefault() para cancelar este comportamiento por defecto 
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Create a new Oject Product
    const product = new Product(name, price, year);
    // const product = new Product (); se crea un objeto product con todas sus propiedades undefined

    // Create a new UI instance
    const ui = new UI(); //instancio un nuevo objeto ui de la clase UI

    // Input User Validation
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
      return; //al llegar aquí, ya termina con la función y no sigue con el resto de código
    }

    // Save Product
    ui.addProduct(product); //y después de haber hecho la validación del input del usuario, accedo al método addProduct de la clase UI y le paso el objeto product para que lo añada
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm(); //llamo a resetear el formulario. clase.método objeto.método
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
