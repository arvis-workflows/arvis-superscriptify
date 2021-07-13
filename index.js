const arvish = require('arvish');
const superscript = require('superscript-text');

const superscriptedText = superscript(arvish.input);

arvish.output([{
    title: `Copy your superscripted '${arvish.input}' to the clipboard`,
    subtitle: superscriptedText,
    arg: superscriptedText
}]);