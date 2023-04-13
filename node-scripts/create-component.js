const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the component name
rl.question('Enter the component name: ', (componentName) => {

  if(componentName.toString().includes(',')) {
    componentName.split(',').forEach((componentName) => {
      fs.readFile('src/utils/ComponentTemplate.js', 'utf8', (err, data) => {
        if (err) throw err;

        // Replace the placeholder component name with the user-specified name
        const updatedData = data.replace(/ComponentTemplate/g, componentName);

        // Write the updated file to the components directory with the user-specified name
        fs.writeFile(`src/components/${componentName}.js`, updatedData, (err) => {
          if (err) throw err;
          console.log(`New component ${componentName} created successfully!`);
          rl.close();
        });
      });
    })
  } else {

    // Read the template file
    fs.readFile('src/utils/ComponentTemplate.js', 'utf8', (err, data) => {
      if (err) throw err;

      // Replace the placeholder component name with the user-specified name
      const updatedData = data.replace(/ComponentTemplate/g, componentName);

      // Write the updated file to the components directory with the user-specified name
      fs.writeFile(`src/components/${componentName}.js`, updatedData, (err) => {
        if (err) throw err;
        console.log(`New component ${componentName} created successfully!`);
        rl.close();
      });
    });
  }
});