let original = {
    name: "Alice",
    address: { city: "Wonderland" }
  };
 
  let shallow = { ...original }; // or Object.assign({}, original)
 
  shallow.name = "Bob";
  shallow.address.city = "New City";
 
  console.log(original.name); // "Alice" ✅ not affected
  console.log(original.address.city); // "New City" ❌ affected!
