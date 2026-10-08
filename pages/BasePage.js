class BasePage{
    constructor(page){
        this.page = page;
        this.pageUrl = "https://demowebshop.tricentis.com/"
        
    }

    // Page Open
    async page_Open(){
        await this.page.goto(this.pageUrl,{
            waitUntil: 'domcontentloaded', timeout: 60000
        });
        this.page.setViewportSize({width:1920, height: 1080})
    }

    // Page Close
    async pageClose(url){
        await this.page.close();
    }
}

export {BasePage};
