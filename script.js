import { supabase } from './supabaseClient.js';

function order(burgerName) {
  alert("הזמנת: " + burgerName + " 🍔");
}

window.showLogin = function() {
  document.getElementById('loginModal').style.display = 'block';
};

window.closeLogin = function() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('loginError').textContent = '';
};

window.showSignup = function() {
  document.getElementById('signupModal').style.display = 'block';
};

window.closeSignup = function() {
  document.getElementById('signupModal').style.display = 'none';
  document.getElementById('signupError').textContent = '';
};

window.handleLogin = async function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorElement = document.getElementById('loginError');

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    closeLogin();
    document.getElementById('loginForm').reset();
  } catch (error) {
    errorElement.textContent = error.message === 'Invalid login credentials'
      ? 'אימייל או סיסמה שגויים'
      : 'שגיאה בהתחברות';
  }
};

window.handleSignup = async function(event) {
  event.preventDefault();

  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const errorElement = document.getElementById('signupError');

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) throw error;

    closeSignup();
    document.getElementById('signupForm').reset();
    alert('נרשמת בהצלחה! כעת תוכל להתחבר');
  } catch (error) {
    errorElement.textContent = error.message === 'User already registered'
      ? 'משתמש זה כבר רשום'
      : 'שגיאה בהרשמה';
  }
};

window.logout = async function() {
  await supabase.auth.signOut();
};

function updateAuthUI(session) {
  const authButtons = document.getElementById('authButtons');
  const userInfo = document.getElementById('userInfo');
  const userEmail = document.getElementById('userEmail');

  if (session) {
    authButtons.style.display = 'none';
    userInfo.style.display = 'flex';
    userEmail.textContent = session.user.email;
  } else {
    authButtons.style.display = 'flex';
    userInfo.style.display = 'none';
  }
}

supabase.auth.onAuthStateChange((event, session) => {
  (async () => {
    updateAuthUI(session);
  })();
});

supabase.auth.getSession().then(({ data: { session } }) => {
  updateAuthUI(session);
});

window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');

  if (event.target === loginModal) {
    closeLogin();
  }
  if (event.target === signupModal) {
    closeSignup();
  }
};
