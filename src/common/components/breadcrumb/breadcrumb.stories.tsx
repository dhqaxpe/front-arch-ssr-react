import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'
import { Breadcrumb } from './breadcrumb.component'

import { Camera } from 'lucide-react';

const meta: Meta<typeof Breadcrumb> = {
    title: 'Breadcrumb',
    component: Breadcrumb,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
    render: props => <Breadcrumb steps={[{name:'hola', ref:'/'},{name: 'adios',ref: '/'}]} Separator={Camera}></Breadcrumb>,
    args: {},
    async play({ canvasElement }) {
        const canvas = within(canvasElement)
        const container = canvas.getByTestId('breadcrumb')

        expect(container).toBeTruthy()
    },
}
