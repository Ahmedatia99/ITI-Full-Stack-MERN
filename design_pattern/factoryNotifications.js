const NOTIFICATION_TYPES = Object.freeze({
  email: "email",
  sms: "sms",
  push: "push",
});

const Email = () => ({
  send: (message) => console.log(`Welcome ${message} you have email`),
});

const Sms = () => ({
  send: (message) => console.log(`Welcome ${message} you have sms`),
});

const Push = () => ({
  send: (message) => console.log(` Welcome ${message} you have push up day `),
});

const Notification_Getaway = Object.freeze({
  [NOTIFICATION_TYPES.email]: Email,
  [NOTIFICATION_TYPES.sms]: Sms,
  [NOTIFICATION_TYPES.push]: Push,
});

const NotificationFactory = (type) => {
  const Notification = Notification_Getaway[type];
  if (!Notification) {
    return "no notifications";
  }
  return Notification();
};

const email = NotificationFactory(NOTIFICATION_TYPES.push);
email.send("ahmed");
