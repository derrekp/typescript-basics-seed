// NOTE: Config files are highly dependant
// on project structure
module.exports = {
    entry: "./src/app.ts",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};