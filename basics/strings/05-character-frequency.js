const characterFrequency = (string) => {
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    // Use string[i] as the key, not i
    obj[string[i]] = (obj[string[i]] || 0) + 1;
  }
  console.log(obj, "obj");
};

characterFrequency("shailsahiln");
