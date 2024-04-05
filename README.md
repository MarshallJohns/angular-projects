# angular-projects

## codeLabs-homes-app-start

Inside the codelabs-homes-app-start folder is the basic angular tutorial. one key component to look at is the app/test/test.component.ts file. There is where I've created the reusable component that can have different styles based on the component that is rendering it. Inside of the test.component.css file I have two different classes specified. the test component is being rendered in the home component and the details component. each component gives the test component a different class name called testClass that gets injected into the test component.

## angular-todo

The other file is the angular todo and the only real files of any note are the shared.service.ts which handles all the methods for the RESTful firebase requests and the app.component.ts is using those services.
