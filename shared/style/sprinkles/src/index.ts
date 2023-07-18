import { createSprinkles } from '@vanilla-extract/sprinkles'

export const sprinkles = createSprinkles()

export type Sprinkles = Parameters<typeof sprinkles>[0]
