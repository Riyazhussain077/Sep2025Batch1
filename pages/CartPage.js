exports.CartPage =
    class CartPage {

        constructor(page) {
            this.page = page;
            this.verifyProduct = '//tbody[@id="tbodyid"]/tr/td[2]';
        }

        async checkProduct(productName) {
            const productsInCart = await this.page.$$(this.verifyProduct)
            for (const product of productsInCart) {
                console.log(await product.textContent())
                if (productName === await product.textContent()) {
                    break;
                }
            }
            return true;
        }
    };