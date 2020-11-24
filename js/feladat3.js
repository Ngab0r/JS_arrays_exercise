'use strict'; {
    const stringArray = ['első', 'második', 'harmadik'];

    // const createHtmlTemplateFromString = (inputStringArray) => {
    //     const teszt = inputStringArray.map(item => '<li>'.concat(item).concat('</li>'))
    //     teszt.unshift('<ul>');
    //     teszt.push('</ul>');
    //     return teszt.join('');
    // }

    const createHtmlTemplateFromString = (inputStringArray) =>
        (
            '<ul>\n'.concat(inputStringArray.map(item => '  <li>'.concat(item).concat('</li>')).join('\n')).concat('\n</ul>')
        )
    console.log(createHtmlTemplateFromString(stringArray));
}