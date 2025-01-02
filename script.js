document.addEventListener('DOMContentLoaded', (event) => {
    if ("vibrate" in navigator) {
      console.log("Виброотклик поддерживается.");
      
      document.querySelector('.btn').addEventListener('click', () => {
        navigator.vibrate(200);
        document.body.style.backgroundColor = "lightcoral"; // Визуальная обратная связь
        setTimeout(() => document.body.style.backgroundColor = "", 200);
      });
    } else {
      console.log("Виброотклик не поддерживается.");
    }
  });
  
