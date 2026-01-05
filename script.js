"use strict";

const loginBtn = document.querySelector(".login-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const signupBtn = document.querySelector(".signup");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const accountName = document.querySelector(".accountName");
const accountBalance = document.querySelector(".accountBalance");
const banktag=document.querySelector(".bank-tag")
const logbtn=document.querySelector(".logbtn")
const accountlogin=document.querySelector(".account-login")
const initial=100000.00;

// Tramsfer initial balance to account page
const transferForm = document.querySelector('.transfer-form');
const recipientInput = document.getElementById('recipient');
const transferAmountInput = document.getElementById('transfer-amount');



// login and signup login
window.addEventListener("DOMContentLoaded", function() {
  // Support either .login-form or .account-login selector
  const loginForm = document.querySelector('.login-form') || document.querySelector('.account-login');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = usernameInput ? usernameInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value.trim() : '';
      const initialBalance = initial;

      if (username === 'Daa Yussif' && password === '1234') {

        alert('Login successful!');
        // Save username and set initial balance on login
        localStorage.setItem('username', username);
        localStorage.setItem('balance', initialBalance.toFixed(2));


        // Update visible UI if present
        if (accountName) accountName.textContent = `Welcome, ${username}`;
        if (accountBalance) accountBalance.textContent = `$${initialBalance.toFixed(2)}`;

        
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';

        window.location.href = 'Account.html';
        return;
      }

      
      alert('Invalid username or password');
    });
  }

  // Populate username and balance if stored
  const storedUsername = localStorage.getItem('username');
  const storedBalance = parseFloat(localStorage.getItem('balance')) || 0;

  if (accountName) {
    if (storedUsername) {
      accountName.textContent = `Welcome, ${storedUsername}`;
      accountName.classList.add('account-username');
    } else {
      accountName.textContent = 'Guest';
    }
  }

  if (accountBalance) {
    accountBalance.textContent = `$${storedBalance.toFixed(2)}`;
  }

  // sign up page login form handling
  if (signupBtn) {
    signupBtn.addEventListener("click", function (e) {
      if (e) e.preventDefault();
      const username = usernameInput ? usernameInput.value.trim() : '';
      const balance = 0.00;
      localStorage.setItem('username', username);
      localStorage.setItem('balance', balance.toFixed(2));
      alert('Sign up successful! Please log in.');
      window.location.href = 'Account.html';
    });
  }

  const signupname = localStorage.getItem('username');
  const signublance = parseFloat(localStorage.getItem('balance')) || 0;
  if (accountName) accountName.textContent = `Welcome, ${signupname}`;
  if (accountBalance) accountBalance.textContent = `$${signublance.toFixed(2)}`;

  // Deposit form handling (adds to stored balance and updates display)
  const depositForm = document.querySelector('.deposit-form');
  const depositAmountInput = document.getElementById('deposit-amount');
  if (depositForm && depositAmountInput) {
    depositForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const depositAmount = parseFloat(depositAmountInput.value);
      if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid amount greater than 0.');
        return;
      }

      const current = parseFloat(localStorage.getItem('balance')) || 0;
      const newBalance = current + depositAmount;
      localStorage.setItem('balance', newBalance.toFixed(2));
      if (accountBalance) accountBalance.textContent = `$${newBalance.toFixed(2)}`;
      depositAmountInput.value = '';
      alert(`Deposited $${depositAmount.toFixed(2)} successfully`);
    });
  }

});

banktag.textContent="MyBank™";

// Function to close the modal
const close = function () {
  if (modal) modal.classList.add('hidden');
  if (overlay) overlay.classList.add('hidden');
};

if (loginBtn) {
  loginBtn.addEventListener("click", function (e) {
    if (e) e.preventDefault();
    if (modal) modal.classList.remove("hidden");
    if (overlay) overlay.classList.remove("hidden");
  });
}

// Function to close the modal
closeBtn.addEventListener("click", close);
overlay.addEventListener("click", close);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        close();
    }
});





