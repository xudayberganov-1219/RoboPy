// Ro'yhatdan o'tish
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const messageElement = document.getElementById('message');

  if (password !== confirmPassword) {
      messageElement.textContent = 'Parollar mos kelmadi!';
      return;
  }

  const userData = {
      username: username,
      email: email,
      password: password
  };

  // Foydalanuvchi ma'lumotlarini saqlash
  localStorage.setItem('user', JSON.stringify(userData));

  messageElement.textContent = 'Ro\'yhatdan o\'tdingiz!';
  messageElement.style.color = 'green';

  setTimeout(function () {
      // Ro'yhatdan o'tishdan so'ng login sahifasiga o'tish
      document.getElementById('registration-container').style.display = 'none';
      document.getElementById('login-container').style.display = 'block';
  }, 2000);
});

// Login
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const messageElement = document.getElementById('login-message');

  const storedUserData = JSON.parse(localStorage.getItem('user'));

  if (storedUserData) {
      if (username === storedUserData.username && password === storedUserData.password) {
          messageElement.textContent = 'Tizimga kirish muvaffaqiyatli!';
          messageElement.style.color = 'green';

          setTimeout(function () {
              document.getElementById('login-container').style.display = 'none';
              document.getElementById('dashboard-container').style.display = 'block';
              document.getElementById('user-name').textContent = `Salom, ${storedUserData.username}`;
          }, 2000);
      } else {
          messageElement.textContent = 'Foydalanuvchi nomi yoki parol noto\'g\'ri!';
          messageElement.style.color = 'red';
      }
  } else {
      messageElement.textContent = 'Foydalanuvchi topilmadi. Iltimos, ro\'yhatdan o\'ting!';
      messageElement.style.color = 'red';
  }
});

// Dashboard - Chiqish
function logout() {
  localStorage.removeItem('user');
  document.getElementById('dashboard-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
}

// Testlarni boshlash va javobni tekshirish
function startTest(testNumber) {
  // Test bo'limini ko'rsatish
  document.querySelectorAll('.task-details').forEach(function (taskDetail) {
      taskDetail.style.display = 'none';
  });
  document.getElementById(`test${testNumber}-details`).style.display = 'block';
}

// Testlarni tekshirish
document.getElementById('check-answer-btn').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A+B)`; // Test 1 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test1-result');
});

document.getElementById('check-answer-btn-2').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer-2').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A*B)`; // Test 2 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test2-result');
});

document.getElementById('check-answer-btn-3').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer-3').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A%B)`; // Test 3 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test3-result');
});

document.getElementById('check-answer-btn-4').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer-4').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A**B)`; // Test 4 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test4-result');
});
document.getElementById('check-answer-btn-5').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer-5').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A//B)`; // Test 5 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test5-result');
});
document.getElementById('check-answer-btn-6').addEventListener('click', function () {
  const userAnswer = document.getElementById('user-answer-6').value.trim();
  const correctAnswer = `A=int(input())\nB=int(input())\nprint(A/B)`; // Test 6 to'g'ri javobi

  checkAnswer(userAnswer, correctAnswer, 'test6-result');
});
// Javobni tekshirish funktsiyasi
function checkAnswer(userAnswer, correctAnswer, resultElementId) {
  const resultElement = document.getElementById(resultElementId);

  // Javobni taqqoslash
  if (userAnswer === correctAnswer) {
      resultElement.textContent = 'Accepted';
      resultElement.classList.add('accepted');
      resultElement.classList.remove('wrong');
  } else {
      resultElement.textContent = 'Wrong answer';
      resultElement.classList.add('wrong');
      resultElement.classList.remove('accepted');
  }
}


// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById('hamburger-menu');
  menu.classList.toggle('show');
}

// Close the hamburger menu if clicked outside of it
document.addEventListener('click', function(event) {
  const menu = document.getElementById('hamburger-menu');
  const hamburger = document.querySelector('.hamburger');
  
  // Close menu if clicked outside the hamburger or menu
  if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('show');
  }
});
