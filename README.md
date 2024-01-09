## Run

```
npm install - install dependencies
(npm run start:dev) or (npm run start:dev:vite) - start server + frontend of the project in dev mode
```

----

## Scripts

- `npm run start` - running a frontend project on webpack dev server
- `npm run start:vite` - running frontend project on vite
- `npm run start:dev` - running frontend project on webpack dev server + backend
- `npm run start:dev:vite` - running frontend project on vite + backend
- `npm run start:dev:server` - running backend server
- `npm run build:prod` - build in prod mode
- `npm run build:dev` - build in dev mode (not minimized)
- `npm run lint:ts` - checking ts files with linter
- `npm run lint:ts:fix` - fix ts files with a linter
- `npm run lint:scss` - checking style scss files with a linter
- `npm run lint:scss:fix` - fix scss files style with a linter
- `npm run test:unit` - running unit tests with jest
- `npm run test:ui` - running screenshots tests with loki
- `npm run test:ui:ok` - confirmation of new screenshots
- `npm run test:ui:ci` - running screenshots tests in CI
- `npm run test:ui:report` - generating a full report for screenshot tests
- `npm run test:ui:json` - generating json report for screenshot tests
- `npm run test:ui:html` - generating HTML report for screenshot tests
- `npm run storybook` - running Storybook
- `npm run storybook:build` - building a storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode.

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Unit tests on jest - `npm run test:unit`
2) Component tests with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More about tests - [документация тестирование](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-ulbi-tv-plugin*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers in terms of FSD (for example widgets cannot be used in features and entitites)
3) public-api-imports - allows import from other modules only from public api. Has auto fix.

##### Running linters

- `npm run lint:ts` - checking ts files with linter
- `npm run lint:ts:fix` - fix ts files with a linter
- `npm run lint:scss` - checking scss files style linter
- `npm run lint:scss:fix` - fix scss files style linter

----
## Storybook

The project describes story-cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story-cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

Read more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - configuration webpack
- /config/jest - configuration test environment
- /config/storybook - configuration storybook

The `scripts` folder contains scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline и pre commit hooks

The GitHub actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in CI.

In precommit hooks we check the project with linters, config in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

You can only use feature flags using the toggleFeatures helper

an object with options is passed into it

{   

    {
        name: feature flag name,
        on: function that runs after the feature is turned ON
        of: function that runs after the feature is turned OFF
    }
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. Name of the feature flag to be removed
2. Status (on\off)
----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
