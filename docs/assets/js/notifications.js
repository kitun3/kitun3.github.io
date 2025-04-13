let notificationTimeout;
let isAnimating = false;

function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notification-text');

  if (isAnimating) return;

  clearTimeout(notificationTimeout);

  if (notification.classList.contains('show')) {
    isAnimating = true;
    notification.classList.remove('show');
    notification.classList.add('hide');

    setTimeout(() => {
      isAnimating = false;
      showNewNotification(notification, notificationText, message);
    }, 300);
  } else {
    showNewNotification(notification, notificationText, message);
  }
}

function showNewNotification(notification, notificationText, message) {
  isAnimating = true;
  notification.classList.remove('hide');
  notificationText.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    isAnimating = false;
  }, 300);

  notificationTimeout = setTimeout(() => {
    isAnimating = true;
    notification.classList.remove('show');
    notification.classList.add('hide');
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  }, 3000);
}
