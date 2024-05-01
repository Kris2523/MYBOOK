const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

   // Item yang akan ditambahkan ke keranjang
var items = [
    { id: 1, name: "Produk 1", price: 10 },
    { id: 2, name: "Produk 2", price: 20 },
    { id: 3, name: "Produk 3", price: 30 }
];

// Fungsi untuk menambah item ke keranjang
function addToCart(itemId) {
    var item = items.find(item => item.id === itemId);
    if (item) {
        // Tambahkan item ke keranjang
        // Di sini, Anda dapat menyimpan item di localStorage atau variabel lainnya
        console.log("Menambahkan item ke keranjang:", item);
    } else {
        console.log("Item tidak ditemukan.");
    }
}
