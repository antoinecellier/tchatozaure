import flatten from 'lodash/flatten'

export const flatArray = () => flatten([1, [2, [3, [4]], 5]]);