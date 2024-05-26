let uniqueIdCounter = 0;

export const generateUniqueId = (prefix: string = '') => `${prefix}${uniqueIdCounter++}`;
