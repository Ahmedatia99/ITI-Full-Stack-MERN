function UserBuilder() {
  const user = {
    name: "",
    email: "",
    role: "",
    preferences: {}
  };

  return {
    setName(name) {
      user.name = name;
      return this;
    },

    setEmail(email) {
      user.email = email;
      return this;
    },

    setRole(role) {
      user.role = role;
      return this;
    },

    setPreferences(preferences) {
      user.preferences = preferences;
      return this;
    },

    build() {
      return { ...user }; 
    }
  };
}


const user = UserBuilder()
  .setName("ahmed")
  .setEmail("atia@atat.com")
  .setRole("hero")
  .setPreferences("football")
  .build();

console.log(user);