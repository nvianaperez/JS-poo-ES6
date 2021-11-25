// UI Constructor
export class UI {
  // Add a new Product
  addProduct(product) {
    const productList = document.getElementById("product-list"); //accedo a esta parte derecha del DOM
    const element = document.createElement("div"); // con JS creo un elemento nuevo y lo lleno de HTML
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element); 
    // una vez creado y rellenado, ahora hay que insertarlo 
    // productList es el elemento padre, le insertamos un elemento hijo con appendChild(elemento hijo)
  }

  // defino el método: una vez hago submit, el formulario se resetea para poder entrar otro producto
  resetForm() {
    document.getElementById("product-form").reset();
  }

  // defino el método: deleteProduct, método de la clase UI
  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success"); //this. proque quiero acceder a otra función que está dentro de esta misma clase
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4`; // le doy una clase a este div que acabo de crear
    div.appendChild(document.createTextNode(message)); // a div le añado un hijo que es el mensaje, y lo creo con createTextNode al momento

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app); //inserta el div en el container, antes de app

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
