module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        mainQueryInput : 'input[name="as_q"]',
        languageDropdown :'#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        submitButton : '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(value){
            return this
                        .setValue('@mainQueryInput',value);

        },
        selectFilter(selector,value){
            const page = this;
            const valueSelector = '.goog-menuitem[value="'+value +'"]';
            page
                .click(selector)
                .click(valueSelector);
            return this;
        },
        search (){
            return this
                        .click('@submitButton');
        }
    }],
}