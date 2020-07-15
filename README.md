# Bootstrap datetime picker

The original version of this repository was deprecated in favour of [this](https://eonasdan.github.io/bootstrap-datetimepicker/). However this new fork changed a lot of features and lost keyboard navigation which is important for accessibility. Our fork makes a few tweaks to make the picker be as accessible as it can reasonably be.

## Developing

There are some NPM dependencies so run `npm ci` after checking out.

The source files are:

    * `js/bootstrap-datetimepicker.js`
    * `less/datetimepicker.less`

Run `npm run build-all` to build the output files including the `.min` versions and sourcemaps.