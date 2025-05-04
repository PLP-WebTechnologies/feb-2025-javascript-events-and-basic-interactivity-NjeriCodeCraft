// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Change button text
  document.getElementById("changeTextBtn").addEventListener("click", function () {
    this.textContent = this.textContent === "Click Me!" ? "Nice Click! 😎" : "Click Me!";
  });
  
  // Secret double-click
  document.getElementById("secretBtn").addEventListener("dblclick", function () {
    alert("🎉 You discovered a hidden surprise!");
  });
  
  // Image gallery logic
  const images = [
    "images/Pikachu.jpeg",
    "images/pandas.jpeg",
    "images/panda.jpeg",
    "images/love.jpeg",
    "images/cutpa.jpeg",
    "images/cuties.jpeg",
    "images/Cute panda.jpeg",
  ];
  let currentIndex = 0;
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("galleryImg").src = images[currentIndex];
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentIndex];
  });
  
  // Tabs
  document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(div => {
        div.classList.remove("active");
      });
      document.getElementById(`tab${tab}`).classList.add("active");
    });
  });
  
  // Form validation
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  
  emailInput.addEventListener("input", () => {
    const valid = /\S+@\S+\.\S+/.test(emailInput.value);
    emailInput.className = valid ? "valid" : "invalid";
    emailFeedback.textContent = valid ? "" : "Invalid email format";
  });
  
  passwordInput.addEventListener("input", () => {
    const valid = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordInput.value);
    passwordInput.className = valid ? "valid" : "invalid";
    passwordFeedback.textContent = valid
      ? ""
      : "Min 8 chars, 1 capital letter, 1 number";
  });
  
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    const validEmail = /\S+@\S+\.\S+/.test(emailInput.value);
    const validPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordInput.value);
  
    if (!validEmail || !validPassword) {
      e.preventDefault();
      alert("❌ Fix form errors before submitting!");
    }
  });
  
  // Keypress bonus
  document.addEventListener("keydown", (e) => {
    if (e.key === "j") {
      alert("💡 You pressed 'J' for JavaScript joy!");
    }
  });
  