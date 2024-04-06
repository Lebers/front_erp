const toasty = {
  success: (message, options) => createToast("success", message, options),
  error: (message, options) => createToast("error", message, options),
  warning: (message, options) => createToast("warning", message, options),
  info: (message, options) => createToast("info", message, options),
  settings: {
    timer: 5000,
    success: { icon: "fa-circle-check", defaultText: "Success" },
    error: { icon: "fa-circle-xmark", defaultText: "Error" },
    warning: { icon: "fa-triangle-exclamation", defaultText: "Warning" },
    info: { icon: "fa-circle-info", defaultText: "Info" },
  }
};

function createToast(id, message, options) {
  const { icon, defaultText } = toasty.settings[id];
  const text = message?.length ? message : defaultText;
  const invertedClass = options?.inverted ? "inverted" : "";

  const elem = document.createElement("li");
  elem.className = `myApp-toast ${id} ${invertedClass}`;
  elem.innerHTML =
    `<div class="column">
       <i class="fa-solid ${icon}"></i>
       <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  const notificationsContainer = document.querySelector(".myApp-notifications");
  if (notificationsContainer) {
    notificationsContainer.appendChild(elem);
  } else {
    console.error('The notifications container (.myApp-notifications) does not exist in the DOM.');
  }

  elem.timeoutId = setTimeout(() => removeToast(elem), toasty.settings.timer);
}

function removeToast(elem) {
  elem.classList.add("hide");
  if (elem.timeoutId) clearTimeout(elem.timeoutId);
  setTimeout(() => elem.remove(), 500);
}
