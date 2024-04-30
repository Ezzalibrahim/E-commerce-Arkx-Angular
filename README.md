# Products List

## Packages

### how to install & Configure tailwind css package


``` code
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
``` 

#### Add the paths to all of your template files in your tailwind.config.js file.

``` js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

#### Add the Tailwind directives to your CSS

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```