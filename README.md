# Paidy's TO-DO challenge

This app is part of the Paidy's technical challenge for the Senior React Native developer position.

## Table of contents

- [Requirements](#requirements)
- [Folder structure](#folder-structure)
- [Using the app](#using-the-app)
- [Used libraries](#used-libraries)
- [Solution approach](#solution-approach)
- [Installing and running the app](#installing-and-running-the-app)

## Requirements

1. Implement a secured TODO list application with a bare React Native project and Expo local-authentication module.
2. The application MUST ask for authentication before the user can add, update and delete items on the list.
3. Clean and Robust state management.
4. Remember to keep it simple so that it’s much easier for us to review your code. Do not forget to add comments explaining what your
   code does.
5. Implement some unit tests. No need to overkill, just test the parts you think are important.

## Solution approach

The solution was planned to look as similar as possible to the video attached to the challenge, with just a couple of changes. For example, the color palette used, instead of the blue that was shown in the video, I checked on Paidy's pink color. Also, I thought it would be a good idea to persist the tasks on the local storage of the phone, so in case we want to close the app, and reopen it, we could resume where we left. In addition, when you press on any card, in the video there was missing something that graphically showed the selected task, so when a task is selected, it frames it in a pink border.
Other thing that was added, is a little validation, that when there is no title in the input, the add or edit button gets disabled, so we don't have to deal with empty title tasks. This is validated in both UI and in the context itself.

From the project structure, to how the methods are coded, is all part to usage of best practices in coding.
There are several concepts applied here, like:

- **Dependency inversion**: We don't need to rely on one specific library, so if we want to change it in the future, we just need to modify one file, and not change a bunch of files that calls directly to some library. We could see this applied in files `~utils/idUtils.ts` and `~hooks/usePersistance.ts`.
- **Encapsulation**: The idea is not to expose everything for a method, but just the things we need to use. For example, in the task context (`~/contexts/tasksContext.tsx`), we don't expose the whole `setTasks` state method, but we just create all the needed CRUD methods, and only expose those. We can even create some validation inside here, or all the needed logic for the future, so we don't need to care this in each file.
- **Single responsability**: Following with the context, we can see that the screens that calls the task context doesn't have to care about any logic to make the CRUD to any task, since it's all handled in one place. This makes it simpler to work on, and we can scale much faster, since everything is on one known place.
- **Scalable simplicity**: By using this theme helpers, is easier to make a change across the app in terms of design. If we need to change a color, we just need to change it in colors.ts and will apply to the whole app.

Now, in terms of organization, in this project repo, in the projects tab, we can go to the [board](https://github.com/users/IgnacioSanh/projects/5/views/1) where all tasks were organized into 3 columns: To-do, in progress and done. Each one of these cards has it's own ticket, which leads to the next point: branching strategy

For the branching strategy, the git flow workflow was used. We have our main branch (`main`) that should contain what we currently have in production.
From the main branch, we cut a `develop` branch, which has all the code that is currently working on. Finally, each ticket has it's own `feature` branch, which was merged by using a PR, so we can see all the commits with corresponding comments to roll back in case we see a problem.

## Folder structure

All the folder referenced here can be called by typescript aliases, which can be reviewed in files `tsconfig.json` and `babel.config.js`.

- **/components**: Each component has it's own folder with component, test and styling files. The components
  used here are use in more than one place.
  - **/screen-component**: If a component is used only in one screen, it's going to be inside a folder with the screen name. In case this component needs to be used in other components, it can be moved one folder up (to the general components folder).
- **/contexts**: All the React Context files. In each context file, we should expect to have the Provider and the hook to use the context outside. With this approach, the context itself is encapsulated, and only the Provider and the custom hook to consume it are exposed.
- **/hooks**: All the custom hooks created are here, except for the ones of the context, since they need to exist in the same file as the context is present. In this project, there is only one custom hook, that is the usePersistance. This is to use dependency inversion, so in the future we want to change the library that creates the persistance, we just have to change one file, since all the needed method are exposed here.
- **/screens**: All the screens, that makes a compound of components. In this project we have only 2 screens: Login and Todo. Same as the components, they are contained on it's own folder, with a component file and another one for the styling. In case we want to add integration tests, we can add them inside each screen folder.
- **/theme**: This is a folder that contains all the styling helpers. It's divided in 3 topics: Colors, Fonts and Spacings. The idea is that all styling files uses this constants helpers. The colors folder includes all the possible colors of the app, so we can easily change them in only one place. The fonts include different sizes and a custom font family so we can add them into `<Text style={[font.style1, font.style2]}>` components. Finally, the spacings help with standarized spacings and border radius.
- **/types**: The types folder includes files that contains interfaces (in those cases a .d.ts extension is used for major clarity), and for the rest, in case we need some enums, we can create or add into existing files related by topic.
- **/utils**: All utils that we could have. In this case is just the idUtils, that again, is only a dependency inversion file, so we don't have to call the library itself in case that we want to change it in the future.

## Using the app

The basic flow is the following:

1. If the user doesn't have security enrolled, it's going to show a scren asking to add a PIN, pattern or fingerprint. A message saying "Set Authentication to proceed" will appear, and a button below that redirects to settings. In Android, is going to lead directly to security settings. In iOS we need to go to _Touch ID & Passcode_ to configure security.
   _Note_: For iOS simulator to work the authentication, we can go in the top menu to Features > Touch ID > Enroll (mark as checked) 2. Once the configuration, we can go back to the app, and the screen will change.
2. Now will state "Please authenticate", with a button below to Authenticate. If we press it, will ask for the PIN, or the fingerprint we configured.
   _Note: In iOS to authenticate correctly, we should go to Features > Touch ID > Matching touch_
3. We should see the TO-DO screen. Here, we list all the existing tasks to-do.
4. To add a task, we can see at the botom an input, to write the title of the task to be added. Once we add a text here, we can press the add button, and the task will be added at the end of the list.
5. To Edit a task, we should click anywhere in the task card. Anywhere but the remove button... that one will remove the task!. Once we press anywhere in the card, we are going to see a border surrounding the card, marking it as selected. Now, if we look at the bottom input, we can see that is pre-filled with the current task title. If we modify that text, and press the edit button, we are going to see that the title will change in the list.
6. Finally, to remove a task, we could press the Remove button at the right side of the card, and the card will dissapear from the list.

## Used libraries

The following libraries were used as dependency for this app:

- **expo**: Even though the app is a bare React Native, one of the requirements was to use an expo library, so Expo was added to the project.
- **expo-local-authentication**: To authenticate using the phone security setting.
- **react-native-mmkv**: A library to use the phone's internal storage to persist the context.
- **@react-navigation/native**: To switch between screens, this routing library was used.
- **@testing-library/react-native**: Along with Jest, used to create all the tests.
- **babel-plugin-module-resover**: A babel plugin that helps to create aliases to use instead of relative routes.

## Installing and running the app

First, you need to have the environment setup as suggested by [React Native](https://reactnative.dev/docs/environment-setup). It's recommended to use
any version manager for Ruby (for example [rbenv](https://github.com/rbenv/rbenv)), same for Node ([NVM](https://github.com/nvm-sh/nvm)) and Java ([sdkman](https://sdkman.io/install)). This application was created using the **React Native CLI**.

Once you have the environment ready, install the dependencies using `npm install`.
After that, you can start metro, the React Native Bundler. From there, you can start right away the app, selecting which OS you would like to run it. As an alternative, you can open a new tab in the terminal (leaving metro running in another instance), and execute the specific OS you need:

- `npm run ios` for iOS. Also, you can add the simulator parameter to run in a specific device: `npm run ios --simulator='<device name>'`.
- `npm run android` for Android. To run in a specific emulator, you just need to have that simulator already up and running.
