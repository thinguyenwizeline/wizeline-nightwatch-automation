module.exports = {
    'Google advanced search: Wizeline': function(browser){
        const mainQuery = "Wizeline";
       
        const page = browser.page.googleAdvancedSearchObjects();

        console.log("hello");
        console.log("Travis testing 28 June");

        page
               .navigate()
               .setValue('@mainQueryInput',mainQuery)
               .selectFilter('@languageDropdown','lang_it')
               .selectFilter('@lastUpdateDropdown','m')
               .search()
               .saveScreenshot('tests-output/google.png');
    }

}