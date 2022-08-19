const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
    images: {
        disableStaticImages: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
})