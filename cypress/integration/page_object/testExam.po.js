const moment = require('moment-timezone');
const date_ob = new Date();
export class TestExamPo {
    saturnProductPrice = '//*[@data-test="mms-badge" and contains(., "{tag}")]/ancestor::*[@data-test="mms-product-card"]//*[@data-test="mms-strike-price-label"]/following-sibling::span/span';
    douglasProductPrice = '//*[@data-testid="eyecatcher__container" and contains(.,"{tag}")]//..//*[@class="product-price__price"]'
    checkPriceVisibilityForSaturn(tag) {
        cy.xpath(this.saturnProductPrice.replace('{tag}', tag)).should('be.visible');
    }

    checkPriceVisibilityForDouglas(tag) {
        cy.xpath(this.douglasProductPrice.replace('{tag}', tag)).should('be.visible');
    }

    checkTemperature(location) {
        let date_time = moment(date_ob.getTime()).format('YYYY-MM-DDTHH:mm:ss').replace(':','%3A')
        cy.request('GET',`https://api.data.gov.sg/v1/environment/air-temperature?date_time=${date_time}%2B08%3A00&date=${date_time.split('T')[0]}`)
            .then((result) => {
            let stationData = result.body.metadata.stations.find( ({ name }) => name === location );
            console.log(result.body.items[0].readings.find( ({ station_id }) => station_id === stationData.id ).value + ' degrees in ' + location)
        })
    }
}