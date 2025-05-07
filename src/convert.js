const fs = require("fs");

const data = require("./shoesList.json"); // original nested JSON
let result = [];

for (const category in data) {
  for (const key in data[category]) {
    result.push({
      _id: `${key}_${category}`, // make ID unique
      original_id: key,          // keep original ID
      name: data[category][key].name,
      price: data[category][key].price,
      itemsLeft: data[category][key].itemsLeft,
      img: data[category][key].img,
      category: category
    });
  }
}

fs.writeFileSync("flat-shoes.json", JSON.stringify(result, null, 2));
console.log("✅ flat-shoes.json created successfully!");
