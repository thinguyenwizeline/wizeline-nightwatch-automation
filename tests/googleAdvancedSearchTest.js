module.exports = {
    'Google advanced search: Wizeline': function(browser){
        const mainQuery = "Wizeline";
       
        const page = browser.page.googleAdvancedSearchObjects;

        page
               .navigate()
               .setValue('@mainQueryInput',mainQuery)
               .click(languageDropdownOpenerSelector)
               .click(languageDropdownValueSelector)
               .click(lastUpdateDropdownOpenerSelector)
               .click(lastUpdateDropdownValueSelector)
               .click(submitButtonSelector)
               .saveScreenshot('tests-output/google.png');
    }

}