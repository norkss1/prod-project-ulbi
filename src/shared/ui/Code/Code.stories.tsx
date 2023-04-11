import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    text: '<!DOCTYPE html>\n'
        + '<html lang="en">\n'
        + '  <head>\n'
        + '    <meta charset="UTF-8">\n'
        + '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
        + '    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n'
        + '    <title>HTML 5 Boilerplate</title>\n'
        + '    <link rel="stylesheet" href="style.css">\n'
        + '  </head>\n'
        + '  <body>\n'
        + '\t<script src="index.js"></script>\n'
        + '  </body>\n'
        + '</html>',
};
