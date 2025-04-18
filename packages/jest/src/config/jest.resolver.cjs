/**
 * @description
 * https://github.com/mswjs/msw/issues/1786
 */
module.exports = (path, options) => {
    // Call the defaultResolver, so we leverage its cache, error handling, etc.
    return options.defaultResolver(path, {
        ...options,
        // Use packageFilter to process parsed `package.json` before the resolution
        // (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)
        packageFilter: (pkg) => {
            if (pkg.name === 'msw') {
                delete pkg.exports['./node'].browser
            }
            if (pkg.name === '@mswjs/interceptors') {
                delete pkg.exports
            }

            return pkg
        },
    })
}
