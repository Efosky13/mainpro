export const slugify = (text) => {
    return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w\-]+/g, '') // remove all non-word char
    .replace(/\-\-+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '') // Trim -  from the end of text
};